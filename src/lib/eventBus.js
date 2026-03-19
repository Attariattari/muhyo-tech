import { EventEmitter } from 'events';

// Universal Event Bus for Real-time Authority Nexus
const globalEventBus = global.eventBus || new EventEmitter();

if (process.env.NODE_ENV !== 'production') {
    global.eventBus = globalEventBus;
}

export const ADMIN_EVENTS = {
    NOTIFICATION: 'authority:notif',
    USER_UPDATE: 'authority:user',
};

export default globalEventBus;
