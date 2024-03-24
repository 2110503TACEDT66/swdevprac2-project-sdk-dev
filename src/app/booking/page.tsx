"use client";
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() {
  const dispatch = useDispatch<AppDispatch>();

  const makeBooking = () => {
    if (id) {
      const item: BookingItem = {
        name: name,
        surname: lastName,
        id: id,
        hospital: bookingLocation,
        bookDate: dayjs(bookingDate).format("YYYY/MM/DD"),
      };
      dispatch(addBooking(item));
    }
  };

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [id, setID] = useState<string>("");
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingLocation, setBookingLocation] = useState<string>("Chula");

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">Vaccine Booking</div>
      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">
          Booking Information
        </div>
        <DateReserve
          onNameChange={(value: string) => {
            setName(value);
          }}
          onLastNameChange={(value: string) => {
            setLastName(value);
          }}
          onIDChange={(value: string) => {
            setID(value);
          }}
          onDateChange={(value: Dayjs) => {
            setBookingDate(value);
          }}
          onLocationChange={(value: string) => {
            setBookingLocation(value);
          }}
        ></DateReserve>
      </div>
      <button
        name="Book Vaccine"
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        onClick={makeBooking}
      >
        Book Vaccine
      </button>
    </main>
  );
}
