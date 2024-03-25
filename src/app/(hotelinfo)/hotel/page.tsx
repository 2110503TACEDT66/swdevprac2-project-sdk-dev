'use client'
import Image from "next/image";
import HotelBanner from "@/components/hotelsComponents/HotelBanner";
import HotelCard from "@/components/hotelsComponents/HotelCard";
import HotelCardPanel from "@/components/hotelsComponents/HotelCardPanel";

export default function Hotel(){
    // const hotels = await getHotels();
    return (
        <main className="absolute inset-y-0 left-0 z-10 w-full">
            <HotelBanner/>
            <HotelCardPanel/>
     
        </main>
    )
}