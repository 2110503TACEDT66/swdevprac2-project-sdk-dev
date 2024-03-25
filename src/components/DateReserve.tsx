"use client";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";
import { Dayjs } from "dayjs";

export default function DateReserve({
  onNameChange,
  onLastNameChange,
  onIDChange,
  onDateChange,
  onLocationChange,
}: {
  onNameChange: Function;
  onLastNameChange: Function;
  onIDChange: Function;
  onDateChange: Function;
  onLocationChange: Function;
}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [location, setLocation] = useState<String>("Chula");

  return (
    <form className="space-y-2 rounded-lg w-full py-5 flex flex-col">
      <div>Firstname-Lastname</div>
      <TextField
        
        fullWidth 
        variant="outlined"
        name="Name"
        label="Name"
        onChange={(e) => {
          onNameChange(e.target.value);
        }}
      ></TextField>

      <div>Contact Email</div>
      <TextField
        fullWidth
        margin="normal"
        variant="outlined"
        name="Lastname"
        label="Lastname"
        onChange={(e) => {
          onLastNameChange(e.target.value);
        }}
      ></TextField>

      <div>Telephone</div>
      <TextField
        fullWidth 
        variant="outlined"
        name="Citizen ID"
        label="Citizen ID"
        onChange={(e) => {
          onIDChange(e.target.value);
        }}
      ></TextField>


      <div>Booking Date</div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slotProps={{ textField: { size: "medium" } }}
          className="bg-white "
          value={reserveDate}
          onChange={(value) => {
            setReserveDate(value);
            onDateChange(value);
          }}
        ></DatePicker>
      </LocalizationProvider>


    </form>
  );
}
