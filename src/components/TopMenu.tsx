import TopMenuItem from "./TopMenuItem";
import styles from "./topmenu.module.css";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import HotelIcon from '@mui/icons-material/Hotel';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="h-12 backdrop-blur bg-slate-100/70 fixed top-0 left-0 right-0 z-30 border-gray-200 shadow-lg flex flex-row justify-between px-5 py-1.5">
      <div className="flex flex-1 items-start justify-start h-full">
        <a  href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-900"> 
          <img src={"/img/logo.png"}
              className="w-8 h-8" // Example dimensions
              alt="logo Icon"
          ></img>
          <span className="self-center text-xl font-semibold whitespace-nowrap">Hotel Wisdom</span>
        </a>  
      </div>
      <div className="flex flex-1 items-center justify-center h-full"> 
        <a  href="/hotels" className="block rounded-lg py-2 pr-4 pl-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 flex items-center space-x-2"> 
          <HotelIcon/>
          <span className="text-lg font-medium">Hotels</span>
        </a>  
        <a  href="/account/favorites" className="block rounded-lg py-2 pr-4 pl-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 flex items-center space-x-2"> 
          <FavoriteIcon/>
          <span className="text-lg font-medium">My Favorites</span>
        </a>
        <a  href="/account/bookings" className="block rounded-lg py-2 pr-4 pl-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 flex items-center space-x-2"> 
          <BookmarkIcon/>
          <span className="text-lg font-medium">My Bookings</span>
        </a>  
      </div>
      <div className="flex flex-1 items-center justify-end"> 
          <Image
              src={"/img/logo.png"}
              className="w-auto h-full mr-3"
              alt="logo"
              width={0}
              height={0}
              sizes="100vh"
          ></Image>          
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hotel Wisdom</span>
      </div>
    </nav>






    // <div className="h-12 backdrop-blur bg-slate-100/70 fixed top-0 left-0 right-0 z-30 
    // border-gray-200 shadow-lg flex flex-row justify-between px-5  py-1.5 ">
    //   <div className="flex">
    //     <Image
    //       src={"/img/logo.png"}
    //       className= "w-auto h-full"
    //       alt="logo"
    //       width={0}
    //       height={0}
    //       sizes="100vh"
    //     ></Image>
    //     <TopMenuItem title="Booking" pageRef="/booking"></TopMenuItem>
    //     <TopMenuItem title="MyBooking" pageRef="/mybooking"></TopMenuItem>
    //   </div>
    //   {session ? (
    //     <Link href="/api/auth/signout">
    //       <div className="flex items-center h-full px-2 text-cyan-600 text-sm">
    //         Sign-Out of {session.user.name}
    //       </div>
    //     </Link>
    //   ) : (
    //     <Link href="/api/auth/signin">
    //       <div className="flex items-center h-full px-2 text-cyan-600 text-sm">
    //         Sign-In
    //       </div>
    //     </Link>
    //   )}
    // </div>
  );
}
