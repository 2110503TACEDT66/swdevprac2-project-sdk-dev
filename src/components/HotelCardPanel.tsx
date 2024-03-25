'use clent'
import HotelCard from "./HotelCard"
import Link from "next/link"
export default function HotelCardPanel(){
    return(
<div className="cards">
      <div className="block  w-full " >
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
      </div>
</div>
    )
}