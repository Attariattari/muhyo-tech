import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export default async function AdminLoginPage() {
    const session = await getAuthSession();

    // If session exists and is valid, redirect to the secure dashboard
    if (session) {
        redirect("/admin/dashboard");
    }

    // Otherwise, present the secure authorization gateway
    return <LoginForm />;
}
