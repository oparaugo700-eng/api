import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function Check() {
    const session = await auth();
    if (!session?.user) {
        redirect("/auth/login")
    }
}