import { auth } from "@/auth"
import { Check } from "@/config/check"
import Todos from "./todos"

export default async function Page() {
    const session = await auth()
    return (
        <>
            <Check />
            <Todos userId={session?.user} />
        </>
    )
}