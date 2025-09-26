import { Button } from "@mui/material";
import Image from "next/image";
import { auth, signOut } from "@/auth";
import { Check } from "@/config/check";
// import { db } from "@/config/firebase-configure";
// import { doc, getFirestore, setDoc } from "firebase/firestore";

export default async function Home() {
  const session = await auth()
  console.log(session)
  return (
    < >
      <Check />
      <div className="min-h-[100vh]">
        <main className="min-h-[50vh]  lg:w-[800px] lg:border-2 shadow-2xl rounded-lg mt-[7em] mb-[2em] lg:mx-auto">
          <section className="flex flex-col lg:flex-row  lg:gap-[6em]">
            <div className="lg:pl-17 pt-5 pb-9 xl:pb-0 flex justify-center items-center">
              <Image
                src={session?.user?.image}
                width={200}
                height={200}
                alt="picture"
                className="rounded-full "
              />
            </div>
            <div className="flex flex-col justify-center gap-2 pl-6 pb-5 lg:pl-0 lg:pb-0">
              <p><span className="text-lg font-semibold">Name:</span> {session?.user?.name}</p>
              <p><span className="text-lg font-semibold">Email:</span> {session?.user?.email}</p>
              <form
                action={async () => {
                  "use server"
                  await signOut({ redirectTo: "/auth/login" });
                }}
              >
                <Button variant="contained" type="submit" className="w-[100px] lg:w-[300px]">Log out</Button>
              </form>


            </div>
          </section>

        </main>
      </div>
    </>
  );
}
