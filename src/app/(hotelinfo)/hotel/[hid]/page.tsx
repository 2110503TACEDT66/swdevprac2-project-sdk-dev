"use client";
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import createBooking from "@/libs/createBooking";
import { useSearchParams } from "next/navigation";
import getOneBooking from "@/libs/getOneBooking";
import { BookingItem } from "../../../../../interface";
import BookingCard from "@/components/BookingCard"
import getOneHotel from "@/libs/getOneHotel";
import updateBooking from "@/libs/updateBooking";
import getBookings from "@/libs/getBookings";


export default function Booking({params}:{params: {hid: string}}) {
  const { data: session } = useSession();
  if(!session || !session.user.token) return (<div>Not login</div>)

  const urlParams = useSearchParams();
  const id = urlParams.get("id");

  useEffect(()=>{
    const fetchdata =  async ()=>{
      const data = await getOneHotel(session.user.token,params.hid)
      setHotelName(data.data.name);
      sethotelImg(data.data.image);
      sethotelAddress(data.data.address+" "+data.data.district+" "+data.data.province+" "+data.data.postalcode);
      sethotelRegion(data.data.region);
      sethotelTel(data.data.tel);
    }

    fetchdata()
  },[])
  

  const [hotelName,setHotelName] = useState("")
  const [hotelImg,sethotelImg] = useState("")
  const [hotelAddress,sethotelAddress] = useState("")
  const [hotelRegion,sethotelRegion] = useState("")
  const [hotelTel,sethotelTel] = useState("")

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
        window.location.href = "/account/mybookings";
      } else {
        if (canCreateBooking) {
      await createBooking(session.user.token, bookingLocation, item);
      window.location.href = "/account/mybookings";
    } else console.log("Can't book more than three");
  }
    }
  };
  const [canCreateBooking, setCanCreateBooking] = useState<boolean>(false);
  const [contactName, setName] = useState<string>("");
  const [contactEmail, setEmail] = useState<string>("");
  const [contactTel, setTel] = useState<string>("");
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingLocation, setBookingLocation] = useState<string>(
    "65df5083dc8452a715f007cd"
  );

  useEffect(() => {
    const getBooking = async () => {
      if (!session) return;
      if (id != null && !contactEmail) {
        const booking: BookingItem = (
          await getOneBooking(session.user.token, id)
        ).data;
        setName(booking.contactName);
        setEmail(booking.contactEmail);
        setTel(booking.contactTel);
        setBookingDate(dayjs(booking.date));
        setBookingLocation(booking.hotel);
      } else {
        const bookings = await getBookings(session.user.token);
        if (bookings.count < 3) setCanCreateBooking(true);
      }
    };
    getBooking();
  }, [contactName, contactEmail, contactTel, bookingDate, bookingLocation]);

  return (
    <main className="p-10 w-full">
      <div className="text-5xl">Your Accommodation Booking</div>
      <div className="py-5 text-2xl text-gray-600">Make sure all the details on this page are correct before proceeding the booking.</div>
      <div className="w-[95%] flex flex-row  gap-5 py-4">
      <div className="  flex flex-col basis-3/5 p-10 rounded-lg shadow-lg">
      <div className="text-3xl font-medium">Booking details</div>
        <div className="text-base text-gray-600 mt-2">Please fill in all field correctly to ensure you receive the booking comfirmation email</div>
    
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
        <div className="flex flex-row-reverse">
          <button
            name="Book Now!"
            className="block rounded-full bg-orange-500 px-5 py-2 text-white shadow-sm mt-5"
            onClick={makeBooking}
            >
          Book Now!
          </button>
        </div>
      </div>
      <div className="basis-2/5">
          <BookingCard hotelName={hotelName} imgSrc={hotelImg} address={hotelAddress} region={hotelRegion} tel={hotelTel}/>
        </div>
      </div>
    </main>
  );
}
