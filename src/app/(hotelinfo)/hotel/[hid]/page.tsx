"use client";
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import BookingCard from "@/components/BookingCard"

export default function Booking({params}:{params:{hid:string}}) {

  const [name, setName] = useState<string>("");
  const[email, setEmail] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
 
 
  

  return (
    <main className="p-10 w-full">
      <div className="text-5xl">Your Accommodation Booking</div>
      <div className="py-5 text-2xl text-gray-600">Make sure all the details on this page are correct before proceeding the booking.</div>
      <div className="w-[95%] flex flex-row  gap-5 py-4">
        
          <div className="  flex flex-col basis-3/5 p-10 rounded-lg shadow-lg">
            <div className="text-3xl font-medium">Booking details</div>
            <div className="text-base text-gray-600 mt-2">Please fill in all field correctly to ensure you receive the booking comfirmation email</div>
            <DateReserve
            
              onNameChange={(value: string) => {
                setName(value);
              }}
              onEmailChange={(value: string) => {
                setEmail(value);
              }}
              onTelChange={(value: string) => {
                setTel(value);
              }}
              
              onDateChange={(value: Dayjs) => {
                setBookingDate(value);
              }}
              
            ></DateReserve>
            <div className="flex flex-row-reverse">
              <button
                name="Book Now!"
                className="block rounded-full bg-orange-500 px-5 py-2 text-white shadow-sm mt-5"
                onClick={addBooking()}
              >
                Book Now!
              </button>
            </div>
          </div>
        
        <div className="basis-2/5">
          <BookingCard hotelName="Pattaya@Legend" imgSrc="/img/patta.jpg" address="123 chonburi" tel="012345678" region="Middle"/>
        </div>
      </div>
    </main>
  );
}
