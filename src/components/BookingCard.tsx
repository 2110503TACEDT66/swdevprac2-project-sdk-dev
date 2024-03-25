import Image from "next/image";
export default function HotelCard({hotelName,imgSrc,address,tel,region}:{hotelName:string,imgSrc:string,address:string,tel:string,region:string}){
    return(
        <div className="w-full rounded-lg shadow-lg bg-white hover:bg-blue-50 flex flex-col">
            
            <div className=" relative">
                
                <Image
                src={imgSrc}
                alt="Hotel"
                fill={true}
                className="object-cover rounded-lg z-10 w-full "
                
                ></Image>
            </div>
            <div className="p-5">
                <p className="text-2xl">{hotelName}</p>
                
                <h1 className="pl-3 pt-4 text-slate-600">{address}</h1>
                <p className="text-base pt-4 ">Telephone</p>
                <h1 className="pl-3 text-slate-600">{tel}</h1>
                <p className="text-base pt-4">Region</p>
                <h1 className="pl-3 text-slate-600">{region}</h1>
            </div>
            
        </div>
    )
}