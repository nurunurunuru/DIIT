import Image from "next/image";
import Imran from "../../public/Imran.png"
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-200 shadow-lg rounded-lg mb-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-2 bg-gradient-to-r from-gray-50 to-gray-300 px-4 py-2 bg-white hover:ring-gray-400 transition-all duration-300">
        <Image src="/search.png" alt="Search Icon" width={16} height={16} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[250px] bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-8 justify-end w-full">
        {/* MESSAGE ICON */}
        <div className="relative bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300">
          <Image src="/message.png" alt="Messages" width={24} height={24} />
        </div>

        {/* ANNOUNCEMENT ICON WITH BADGE */}
        <div className="relative bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300">
          <Image
            src="/announcement.png"
            alt="Announcements"
            width={24}
            height={24}
          />
          <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-purple-600 text-white font-bold rounded-full text-xs">
            1
          </div>
        </div>

        {/* USER INFO */}
        <div className="flex flex-col items-end">
          <span className="text-sm font-semibold text-gray-800">
            Welcome, Admin
          </span>
          <span className="text-xs text-gray-500">{user?.publicMetadata?.role as string}</span>
        </div>

        {/* USER AVATAR */}
        <div className="relative rounded-full overflow-hidden border-2 border-gray-300 hover:border-purple-500 transition-colors duration-300 cursor-pointer">
          <Image 
            src={Imran}
            alt="Imran.png"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <UserButton/>
        
      </div>
    </div>
  );
};

export default Navbar;
