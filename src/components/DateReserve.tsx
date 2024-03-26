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
  const [location, setLocation] = useState<String>("65df5083dc8452a715f007cd");

  return (
    <div className="bg-slate-100 rounded-lg space-x-5 w-fit px-10 py-5 flex flex-row items-end">
      <TextField
        variant="standard"
        name="Name"
        label="Name"
        onChange={(e) => {
          onNameChange(e.target.value);
        }}
      ></TextField>

      <TextField
        variant="standard"
        name="Lastname"
        label="Lastname"
        onChange={(e) => {
          onLastNameChange(e.target.value);
        }}
      ></TextField>

      <TextField
        variant="standard"
        name="Citizen ID"
        label="Citizen ID"
        onChange={(e) => {
          onIDChange(e.target.value);
        }}
      ></TextField>

      <Select
        variant="standard"
        name="hospitalSelect"
        id="hospitalSelect"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          onLocationChange(e.target.value);
        }}
        className="w-[200px]"
      >
        <MenuItem value="65df5083dc8452a715f007cd">Continental Hotel</MenuItem>
        <MenuItem value="6601131cb8800f973efcbcbe">Rajavithi Hospital</MenuItem>
      </Select>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slotProps={{ textField: { size: "small" } }}
          className="bg-white"
          value={reserveDate}
          onChange={(value) => {
            setReserveDate(value);
            onDateChange(value);
          }}
        ></DatePicker>
      </LocalizationProvider>
    </div>
  );
}
