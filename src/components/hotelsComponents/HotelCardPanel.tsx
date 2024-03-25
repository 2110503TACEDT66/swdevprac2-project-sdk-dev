"use clent";
import HotelCard from "./HotelCard";
import Link from "next/link";
import { useReducer } from "react";
import RegionButton from "./RegionButton";

export default function HotelCardPanel() {
  const regionReducer = (selectedRegion:string,action:{regionName:string})=>{
    if(selectedRegion===action.regionName){
      return "None"
    }
    return action.regionName
  }

  const [selectedRegion,dispatchRegion] = useReducer(regionReducer,"None");

  const regions = ["North", "Northeast", "Central", "South"];

  return (
    <div className="my-0 relative bg-blue">
      <div className="relative flex flex-col px-28 py-4">
        <div className="font-poppins font-medium text-2xl">
          Find hotel for your next trip 🗺️
        </div>
        <div className="flex flex-row gap-x-1 mt-8 justify-start ">
          {regions.map((regionName) => (
            <RegionButton
              key={regionName}
              name={regionName}
              selected={selectedRegion === regionName}
              onRegion={()=>dispatchRegion({regionName:regionName})}/>
          ))}
        </div>
        <div className="grid grid-cols-4grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-4 gap-y-6 mt-8 gap-8 w-full h-auto">
          <HotelCard
            hotelName={"Pataya1"}
            imgSrc="/img/patta.jpg"
            address="Chonburi"
          ></HotelCard>
          <HotelCard
            hotelName={"Pataya1"}
            imgSrc="/img/patta.jpg"
            address="Chonburi"
          ></HotelCard>
          <HotelCard
            hotelName={"Pataya1"}
            imgSrc="/img/patta.jpg"
            address="Chonburi"
          ></HotelCard>
          <HotelCard
            hotelName={"Pataya1"}
            imgSrc="/img/patta.jpg"
            address="Chonburi"
          ></HotelCard>
          <HotelCard
            hotelName={"Pataya1"}
            imgSrc="/img/patta.jpg"
            address="Chonburi"
          ></HotelCard>
          <HotelCard
            hotelName={"Pataya1"}
            imgSrc="/img/patta.jpg"
            address="Chonburi"
          ></HotelCard>
          <HotelCard
            hotelName={"Pataya1"}
            imgSrc="/img/patta.jpg"
            address="Chonburi"
          ></HotelCard>
        </div>
      </div>

      {/* <div className="block  w-full " >
              <div className="flex flex-row gap-x-1 mt-16 justify-start mx-10 ">
                  <button className="rounded-full bg-slate-100 px-5 py-2 text-sky-600 shadow-sm font-bold">North</button>
                  <button className="rounded-full bg-slate-100 px-5 py-2 text-sky-600 shadow-sm font-bold">Northeast</button>
                  <button className="rounded-full bg-slate-100 px-5 py-2 text-sky-600 shadow-sm font-bold">Middle</button>
                  <button className="rounded-full bg-slate-100 px-5 py-2 text-sky-600 shadow-sm font-bold">South</button>
              </div>
              <div className="flex flex-row flex-wrap gap-x-10  my-10 mx-10">
                <Link
                  href={'/hote/hid'}
                  key={'hid'}
                  className="w-1/6"
                >
                  <HotelCard
                    hotelName={'Pataya1'}
                    imgSrc="/img/patta.jpg" 
                    address="Chonburi"
                  ></HotelCard>
                </Link>
                <Link
                  href={'/hotel/hid'}
                  key={'hid'}
                  className="w-1/6"
                >
                  <HotelCard
                    hotelName={'Pataya2'}
                    imgSrc="/img/patta.jpg" 
                    address="Chonburi"
                  ></HotelCard>
                </Link>
                <Link
                  href={'/hotel/hid'}
                  key={'hid'}
                  className="w-1/6"
                >
                  <HotelCard
                    hotelName={'Pataya3'}
                    imgSrc="/img/patta.jpg" 
                    address="Chonburi"
                  ></HotelCard>
                </Link>

              </div>
            </div> */}
    </div>
  );
}
