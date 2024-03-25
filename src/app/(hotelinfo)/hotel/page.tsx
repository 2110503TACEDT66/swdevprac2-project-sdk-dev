'use client'
import Image from "next/image";
import HotelBanner from "@/components/HotelBanner";
import HotelCard from "@/components/HotelCard";
import HotelCardPanel from "@/components/HotelCardPanel";

export default function Hotel(){
    return (
        <main>
            <HotelBanner/>
            <HotelCardPanel/>
     
        </main>
    )
}