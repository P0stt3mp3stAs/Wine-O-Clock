import Navbar from "@/components/Navbar/Navbar";

export default function Menu() {
  return (
    <main className="bg-[#1E1E1E] h-screen pt-16">
      <Navbar />
      <div className="flex p-4">
        <h1 className="text-2xl font-bold">This is MENU page of Wine O'Clock</h1>
      </div>
    </main>
  );
}