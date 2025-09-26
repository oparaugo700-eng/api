import { auth } from "@/auth"
import { Check } from "@/config/check"
import Product from "./products"

export default async function Page() {
    const session = await auth()
    return (
        <>
            <Check />
            <Product userId={session?.user} />
        </>
    )
}