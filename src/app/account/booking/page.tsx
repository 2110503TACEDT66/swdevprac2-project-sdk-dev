"use client";
import BookingForm from "@/components/BookingForm";

export default function Booking() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="w-[100%] flex flex-col items-center space-y-4">
        <div className="text-xl font-medium">Vaccine Booking</div>
        <BookingForm></BookingForm>
      </div>
    </main>
  );
}
