import { auth } from "@/auth"
import { Check } from "@/config/check"
import Recipes from "./recipes"

export default async function Page() {
    const session = await auth()
    return (
        <>
            <Check />
            <Recipes userId={session?.user} />
        </>
    )
}