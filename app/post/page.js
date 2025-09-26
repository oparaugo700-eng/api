import { auth } from "@/auth"
import { Check } from "@/config/check"
import Post from "./post"

export default async function Page() {
    const session = await auth()
    return (
        <>
            <Check />
            <Post userId={session?.user} />
        </>
    )
}