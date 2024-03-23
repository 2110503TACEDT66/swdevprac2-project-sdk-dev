"use client";
import { useEffect, useReducer, useState } from "react";
import Card from "./Card";
import Link from "next/link";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";

export default function CardPanel() {
  const [hospitalResponse, setHospitalResponse] = useState<HospitalJson | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const hospitals = await getHospitals();
      setHospitalResponse(hospitals);
    };
    fetchData();
  }, []);

  if (!hospitalResponse)
    return (
      <p>
        Hospital Panel is Loading...<LinearProgress></LinearProgress>
      </p>
    );

  return (
    <div className="cards">
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
        {hospitalResponse.data.map((hospitalItem: HospitalItem) => (
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
