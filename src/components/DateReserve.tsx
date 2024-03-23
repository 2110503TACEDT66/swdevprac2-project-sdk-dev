"use client";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";

export default function DateReserve() {
  const [reserveDate, setReserveDate] = useState(null);
  const [location, setLocation] = useState("Chula");

  return (
    <div className="bg-slate-100 rounded-lg space-x-5 w-fit px-10 py-5 flex flex-row items-end">
      <TextField
        variant="standard"
        name=" Name-Lastname"
        label="Name-Lastname"
      ></TextField>

      <TextField
        variant="standard"
        name="Citizen ID"
        label="Citizen ID"
      ></TextField>

      <Select
        variant="standard"
        name="hospitalSelect"
        id="hospitalSelect"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-[200px]"
      >
        <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
        <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
        <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
      </Select>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slotProps={{ textField: { size: "small" } }}
          className="bg-white"
          value={reserveDate}
          onChange={(value) => {
            setReserveDate(value);
            alert(value);
          }}
        ></DatePicker>
      </LocalizationProvider>
    </div>
  );
}
