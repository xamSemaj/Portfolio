import Hero from "@/Components/Hero";
import { RecentProjects } from "@/Components/RecentProjects";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import Grid from "@/Components/ui/Grid";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { Clients } from "../Components/Clients";

export default function Home() {
  return (
    <main className="relative text-white bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/* <RecentProjects />
      <Clients /> */}
      </div>
    </main>
  );
}
