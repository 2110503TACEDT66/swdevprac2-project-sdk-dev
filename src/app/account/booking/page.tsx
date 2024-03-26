"use client";
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import createBooking from "@/libs/createBooking";
import { useSearchParams } from "next/navigation";
import getOneBooking from "@/libs/getOneBooking";
import { BookingItem } from "../../../../interface";
import updateBooking from "@/libs/updateBooking";

export default function Booking() {
  const { data: session } = useSession();

  const urlParams = useSearchParams();
  const id = urlParams.get("id");

  const makeBooking = async () => {
    if (session) {
      const item = {
        date: dayjs(bookingDate).toDate(),
        contactEmail: contactEmail,
        contactName: contactName,
        contactTel: contactTel,
      };
      if (id) {
        await updateBooking(session.user.token, id, item);
      } else await createBooking(session.user.token, bookingLocation, item);
      window.location.href = "/account/mybookings";
    }
  };

  const [contactName, setName] = useState<string>("");
  const [contactEmail, setEmail] = useState<string>("");
  const [contactTel, setTel] = useState<string>("");
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingLocation, setBookingLocation] = useState<string>(
    "65df5083dc8452a715f007cd"
  );

  useEffect(() => {
    const getBooking = async () => {
      if (id != null && session && !contactEmail) {
        const bookings: BookingItem = (
          await getOneBooking(session.user.token, id)
        ).data;
        setName(bookings.contactName);
        setEmail(bookings.contactEmail);
        setTel(bookings.contactTel);
        setBookingDate(dayjs(bookings.date));
        setBookingLocation(bookings.hotel);
      }
    };
    getBooking();
  }, [contactName, contactEmail, contactTel, bookingDate, bookingLocation]);

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">Vaccine Booking</div>
      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">
          Booking Information
        </div>
        <DateReserve
          contactName={contactName}
          contactEmail={contactEmail}
          contactTel={contactTel}
          bookingDate={bookingDate}
          bookingLocation={bookingLocation}
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
