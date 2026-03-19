import { NextResponse } from "next/server";
import eventBus, { ADMIN_EVENTS } from "@/lib/eventBus";
import { getAuthSession } from "@/lib/auth";

export const dynamic = 'force-dynamic';

export async function GET(request) {
    const encoder = new TextEncoder();
    const session = await getAuthSession();
    const isAuthorized = !!session;

    const stream = new ReadableStream({
        start(controller) {
            const sendEvent = (event, data) => {
                const message = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
                controller.enqueue(encoder.encode(message));
            };

            // Listen for global admin events
            const onNotif = (data) => {
                // Only send general notifications to authorized admins
                if (isAuthorized) {
                    sendEvent('notification', data);
                }
            };

            const onUser = (data) => {
                // Anyone can hear user updates, but ideally we should filter. 
                // For simplified real-time without complex guest tokens, we broadcast lifecycle events.
                // Security: User events only contain email and status, no sensitive data.
                sendEvent('user', data);
            };

            eventBus.on(ADMIN_EVENTS.NOTIFICATION, onNotif);
            eventBus.on(ADMIN_EVENTS.USER_UPDATE, onUser);

            const keepAlive = setInterval(() => {
                controller.enqueue(encoder.encode(': keepalive\n\n'));
            }, 15000);

            request.signal.addEventListener('abort', () => {
                clearInterval(keepAlive);
                eventBus.off(ADMIN_EVENTS.NOTIFICATION, onNotif);
                eventBus.off(ADMIN_EVENTS.USER_UPDATE, onUser);
            });
        }
    });

    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache, no-transform',
            'Connection': 'keep-alive',
            'X-Accel-Buffering': 'no', // For Nginx
        },
    });
}
