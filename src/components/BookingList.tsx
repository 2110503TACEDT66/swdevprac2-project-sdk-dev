"use client";

import { useSession } from "next-auth/react";

import deleteBooking from "@/libs/deleteBooking";


export default async function BookingList({ bookings }: { bookings: any }) {
  const { data: session } = useSession();

  return (
    <>
      <div>
        {bookings.count}
        <div
          style={{
            margin: "20px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignContent: "space-around",
          }}
        >
          {bookings.data.map((bookingItem: BookingItem) => (
            <div key={bookingItem.date.toString()}>
              <div className="text-md">
                Booking Date: {bookingItem.date.toString()}
              </div>
              <div className="text-md">
                Hotel: {(bookingItem.hotel as unknown as HotelItem).name}
              </div>
              <div className="text-md">
                Contact Name: {bookingItem.contactName}
              </div>
              <div className="text-md">
                Contact Email: {bookingItem.contactEmail}
              </div>
              <div className="text-md">
                Contact Telephone: {bookingItem.contactTel}
              </div>
              <div className="text-md">
                Created At: {bookingItem.createdAt.toString()}
              </div>
              <button
                name="Remove"
                className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"

                onClick={() => {
                  window.location.href = `/account/booking/?id=${bookingItem._id}`;
                }}
              >
                Edit
              </button>
              <button
                name="Remove"
                className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                onClick={async () => {
                  if (session) {
                    await deleteBooking(session.user.token, bookingItem._id);

                    location.reload();
                  }
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
