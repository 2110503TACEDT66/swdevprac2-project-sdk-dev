import Image from "next/image";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
export default function HotelCard({hotelName,imgSrc,address}:{hotelName:string,imgSrc:string,address:string}){
    return(
        <div className="w-full h-[300px] rounded-lg shadow-lg bg-white overflow-hidden hover:bg-blue-50 ">
            
            <div className=" h-[70%] relative">
                
                <Image
                
                src={imgSrc}
                alt="Hotel"
                fill={true}
                className="object-cover rounded-lg z-10"
                sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                ></Image>
            </div>
            <div className=" h-[15%] p-[10px]">
                <p className="text-xl">{hotelName}</p>
                
                <h1>{address}</h1>
            </div>
            <div className="block p-[10px]">
                <button>Book Now</button>
                <FavoriteIcon/>
            </div>
        </div>
    )
}