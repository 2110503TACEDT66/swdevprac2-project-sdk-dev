"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Banner() {
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  let [index, setIndex] = useState(0);
  const router = useRouter();

  const { data: session } = useSession();

  return (
    <div
      className="w-full h-[80vh] flex flex-col justify-center items-center 
      relative p-1.5 z-10 my-5"
      onClick={() => {
        setIndex(index + 1);
      }}
    >
      <Image
        src={covers[index % covers.length]}
        alt="cover"
        className="object-cover"
        fill={true}
        priority
      ></Image>
      <div className="w-4/5 max-w-2xl mx-auto text-center text-white z-20">
        <h1 className="text-6xl font-medium">Vaccine Service Center</h1>
        <br></br>
        <h3 className="font-serif">
          Easy, Fast, and Hassle-Free Vaccination App<br></br>
          Secure Your Health, Book Your Vaccine Today!
        </h3>
        <br></br>
        Welcome to Vaccine Service Center We're excited to help you schedule
        your COVID-19 vaccine appointment quickly and conveniently. With Vaccine
        Book, you can easily find available appointments, choose a location near
        you, and book your slot in just a few taps. Your health and safety are
        our top priority, and we're here to make the vaccination process as
        smooth as possible.
      </div>
      {session ? (
        <div className="z-30 absolute top-5 right-10 font-semibold text-white text-xl">
          Welcome {session.user.name}
        </div>
      ) : null}
      <button
        className="bg-white text-cyan-600 border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
        hover:bg-cyan-600 hover:text-white hover:border-transparent"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/hospital");
        }}
      >
        Select Hospital
      </button>
    </div>
  );
}
