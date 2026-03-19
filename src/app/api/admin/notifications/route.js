import { NextResponse } from "next/server";
import { getAllNotifications, updateNotificationStatus, deleteNotification, getAuthSession } from "@/lib/auth";

async function isSuperAdmin() {
    const session = await getAuthSession();
    return session?.role === "super-admin";
}

export async function GET() {
  if (!(await isSuperAdmin())) return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  const notifications = await getAllNotifications();
  return NextResponse.json({ notifications });
}

export async function POST(request) {
  if (!(await isSuperAdmin())) return NextResponse.json({ message: "Forbidden" }, { status: 403 });

  try {
    const { id, action, status } = await request.json(); // action: update, delete. status: read/unread/etc
    if (action === "update") {
      const result = await updateNotificationStatus(id, status);
      return NextResponse.json({ success: result });
    } else if (action === "delete") {
      const result = await deleteNotification(id);
      return NextResponse.json({ success: result });
    }
    return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
