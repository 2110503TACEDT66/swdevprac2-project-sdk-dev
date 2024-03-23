"use client";
import Link from "next/link";
import Card from "./Card";

export default async function HospitalCatalog({
  hospitalsJson,
}: {
  hospitalsJson: HospitalJson;
}) {
  const hospitalJsonReady = await hospitalsJson;
  return (
    <div>
      {hospitalJsonReady.count}
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
        {hospitalJsonReady.data.map((hospitalItem: HospitalItem) => (
          <Link
            href={`/hospital/${hospitalItem.id}`}
            key={hospitalItem.id}
            className="w-1/5"
          >
            <Card
              hospitalName={hospitalItem.name}
              rating={5}
              imgSrc={hospitalItem.picture}
            ></Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
