import Image from "next/image";
export default function hotelBanner() {
    return(
    <div className="relative flex flex-column justify-center items-center w-full h-[50vh] p-5">
        <Image
        className="object-cover  rounded-b-2xl opacity-50 z--1"
        src={'/img/hotelCover.jpg'}
        alt="cover"
        fill={true}
        priority
        ></Image>
        <div className="z-20 text-center ">
            <h1 className="text-6xl font-medium ">Hotel</h1>
            <br></br>
            <h3>
            Easy, Fast, and Hassle-Free Vaccination App<br></br>
            Secure Your Health, Book Your Vaccine Today!
            </h3>
        </div>    
      
    </div>
    )
    
}