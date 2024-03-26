"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import getOneHotel from "@/libs/getOneHotel";
import HotelForm from "@/components/HotelForm";
import { HotelItem } from "../../../interface";
import createHotel from "@/libs/createHotel";

export default function ManageHotel() {
  const { data: session } = useSession();

  const urlParams = useSearchParams();
  const id = urlParams.get("id");

  const makeBooking = async () => {
    if (session) {
      const item = {
        name: hotel.name,
        address: hotel.address,
        district: hotel.district,
        province: hotel.province,
        postalcode: hotel.postalcode,
        tel: hotel.tel,
        region: hotel.region,
        image: hotel.image,
      };
      console.log(item)
      await createHotel(session.user.token, item);
      console.log(1)
      //window.location.href = "/account/mybookings";
    }
  };

  const [hotel, setHotel] = useState<HotelItem>(new HotelItem());

  useEffect(() => {
    const getBooking = async () => {
      if (id != null && session && hotel._id == "") {
        setHotel((await getOneHotel(session.user.token, id)).data);
      }
    };
    getBooking();
  }, [hotel]);

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      {session?.user.role == "admin" ? (
        <div>
          <div className="text-xl font-medium">Vaccine Booking</div>
          <div className="w-fit space-y-2">
            <div className="text-md text-left text-gray-600">
              Booking Information
            </div>
            <HotelForm
              hotel={hotel}
              onHotelChange={(value: HotelItem) => {
                setHotel(value);
              }}
            ></HotelForm>
          </div>
          <button
            name="Book Vaccine"
            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            onClick={makeBooking}
          >
            Book Vaccine
          </button>
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
