import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function Card({
  hospitalName,
  rating,
  imgSrc,
  onCompare,
}: {
  hospitalName: string;
  rating: number;
  imgSrc: string;
  onCompare?: Function;
}) {
  return (
    <InteractiveCard>
      <div className="w-full h-[70%] relative">
        <Image
          src={imgSrc}
          alt="Hospital"
          fill={true}
          className="object-cover"
          sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
        ></Image>
      </div>
      <div className="w-full h-[15%] p-[10px]">
        <p className="text-xl">{hospitalName}</p>
        <br></br>
      </div>
    </InteractiveCard>
  );
}
