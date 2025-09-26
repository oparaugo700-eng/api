import { auth } from "@/auth"
import { Check } from "@/config/check"
import Quotes from "./quotes"


export default async function Page() {
    const session = await auth()
    return (
        <>
            <Check />
            <Quotes userId={session?.user} />
        </>
    )
}