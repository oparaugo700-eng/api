import { auth } from "@/auth"
import { Check } from "@/config/check"
import Comments from "./comments"

export default async function Page() {
    const session = await auth()
    return (
        <>
            <Check />
            <Comments userId={session?.user} />
        </>
    )
}