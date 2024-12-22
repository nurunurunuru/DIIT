

import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import DIIT from "../../assets/diit.png";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        
        <Link href="/">
          <Image
            src={DIIT} // Use a leading slash for the path
            alt="Logo"
            width={70} // Adjust width as needed
            height={50} // Adjust height as needed
          />
        </Link>
        <Menu/>
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
