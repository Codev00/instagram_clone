import Rightbar from "@/components/Rightbar";
import HomePage from "@/components/HomePage";
import Image from "next/image";

export default function Home() {
   return (
      <div className="flex flex-row gap-10">
         <HomePage />
         <Rightbar />
      </div>
   );
}
