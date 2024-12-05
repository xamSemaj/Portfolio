import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import Grid from "@/Components/ui/Grid";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative text-white bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
