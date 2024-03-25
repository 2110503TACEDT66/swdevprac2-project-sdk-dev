"use client";

import BookingList from "@/components/BookingList";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function Mybooking() {
  return (
    <main>
      <Suspense
        fallback={
          <p>
            Hospital Panel is Loading...<LinearProgress></LinearProgress>
          </p>
        }
      >
        <BookingList></BookingList>
      </Suspense>
    </main>
  );
}
