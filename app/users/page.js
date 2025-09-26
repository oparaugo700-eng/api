import { auth } from "@/auth"
import { Check } from "@/config/check"
import Users from "./users"

export default async function Page() {
    const session = await auth()
    return (
        <>
            <Check />
            <Users userId={session?.user} />
        </>
    )
}