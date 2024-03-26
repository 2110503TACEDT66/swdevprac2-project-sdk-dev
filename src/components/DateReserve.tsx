"use client";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";
import { Dayjs } from "dayjs";

export default function DateReserve({
  contactName,
  contactEmail,
  contactTel,
  bookingDate,
  bookingLocation,
  onNameChange,
  onDateChange,
  onTelChange,
  onEmailChange,
}: {
  contactName: string;
  contactEmail: string;
  contactTel: string;
  bookingDate: Dayjs | null;
  bookingLocation: string;
  onNameChange: Function;
  onDateChange: Function;
  onTelChange: Function;
  onEmailChange: Function;
}) {

  const [date, setDate] = useState<Dayjs | null>(bookingDate);
  const [location, setLocation] = useState<String>(bookingLocation);

  return (
    <div className="bg-slate-100 rounded-lg space-x-5 w-fit px-10 py-5 flex flex-row items-end">
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


      <div>Booking Date</div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker

          slotProps={{ textField: { size: "small" } }}
          className="bg-white"
          value={date}

          onChange={(value) => {
            setDate(value);
            onDateChange(value);
          }}
        ></DatePicker>
      </LocalizationProvider>

      <TextField
        variant="standard"
        name="contactName"
        label="Contact Name"
        defaultValue={contactName}
        onChange={(e) => {
          onNameChange(e.target.value);
        }}
      ></TextField>

      <TextField
        variant="standard"
        name="contactEmail"
        label="Contact Email"
        defaultValue={contactEmail}
        onChange={(e) => {
          onLastNameChange(e.target.value);
        }}
      ></TextField>

      <TextField
        variant="standard"
        name="contactTel"
        label="Contact Telephone"
        defaultValue={contactTel}
        onChange={(e) => {
          onIDChange(e.target.value);
        }}
      ></TextField>
    </div>

  );
}
