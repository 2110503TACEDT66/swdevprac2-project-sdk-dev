import getHospital from "@/libs/getHospital";
import Image from "next/image";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hospitalDetail = await getHospital(params.hid);

  return (
    <main className="p-5">
      <h1 className="text-3xl font-medium text-center">
        {hospitalDetail.data.name}
      </h1>
      <div className="flex flex-row my-5">
        <Image
          src={hospitalDetail.data.picture}
          alt="fsfg"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%]"
        ></Image>
        <div className="text-lg mx-5">
          Address: {hospitalDetail.data.address}
          <br></br>
          Telephone: {hospitalDetail.data.tel}
        </div>
      </div>
    </main>
  );
}
