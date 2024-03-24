"use client";

import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking, removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {
  const dispatch = useDispatch<AppDispatch>();

  const bookitems = useAppSelector((state) => state.bookSlice.bookItems);
  return (
    <>
      {bookitems.length == 0 ? (
        <div className="px-5 mx-5 py-2 my-2 text-md">No Vaccine Booking</div>
      ) : (
        bookitems.map((bookitems) => (
          <div
            className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
            key={bookitems.id}
          >
            <div className="text-md">Name: {bookitems.name}</div>
            <div className="text-md">LastName: {bookitems.surname}</div>
            <div className="text-md">Citizen ID: {bookitems.id}</div>
            <div className="text-md">Hospital: {bookitems.hospital}</div>
            <div className="text-md">Booking Date: {bookitems.bookDate}</div>
            <button
              name="Book Vaccine"
              className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
              onClick={() => {
                dispatch(removeBooking(bookitems.id));
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </>
  );
}
