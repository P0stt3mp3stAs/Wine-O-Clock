import Navbar from "@/components/Navbar/Navbar";
import { redirect } from "next/dist/server/api-utils";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const {userId} = auth();
  if(userId){
    redirect("/dashboard")
  }
  return (
    <main className="">
      {/* <Navbar /> */}
      <div className="flex p-4">
        <h1 className="text-2xl font-bold">Welcome to Wine-O-Clock</h1>
      </div>
    </main>
  );
}