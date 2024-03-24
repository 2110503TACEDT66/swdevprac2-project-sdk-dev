import styles from "./topmenu.module.css";
import Link from "next/link";
import Image from "next/image";

export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <div className="justify-between px-5">
      <Image src={"/img/logo.png"}
          className= "w-auto h-full"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"></Image>
      <Link href={pageRef} className={styles.itemcontainer}>
        {title}
      </Link>
    </div>
  );
}
