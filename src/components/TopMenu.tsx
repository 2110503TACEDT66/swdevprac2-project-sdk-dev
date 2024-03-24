import TopMenuItem from "./TopMenuItem";
import styles from "./topmenu.module.css";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.menucontainer}>
      {session ? (
        <Link href="/api/auth/signout">
          <div className="flex items-center h-full px-2 text-cyan-600 text-sm">
            Sign-Out of {session.user.name}
          </div>
        </Link>
      ) : (
        <Link href="/api/auth/signin">
          <div className="flex items-center h-full px-2 text-cyan-600 text-sm">
            Sign-In
          </div>
        </Link>
      )}
      <div className="flex">
        <TopMenuItem title="Booking" pageRef="/booking"></TopMenuItem>
        <TopMenuItem title="MyBooking" pageRef="/mybooking"></TopMenuItem>
        <Image
          src={"/img/logo.png"}
          className={styles.logoimg + " p-[4px]"}
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
        ></Image>
      </div>
    </div>
  );
}
