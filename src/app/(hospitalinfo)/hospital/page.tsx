import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default async function Hospital() {
  const hospitals = await getHospitals();

  return (
    <main className="text-center p-5">
      <h1 className="text-3xl font-medium">Select Your Hospitals</h1>
      <Suspense
        fallback={
          <p>
            Hospital Panel is Loading...<LinearProgress></LinearProgress>
          </p>
        }
      >
        <HospitalCatalog hospitalsJson={hospitals}></HospitalCatalog>
      </Suspense>
    </main>
  );
}
