"use client";
import { TextField } from "@mui/material";
import { HotelItem } from "../../interface";

export default function HotelForm({
  hotel,
  onHotelChange,
}: {
  hotel: HotelItem;
  onHotelChange: Function;
}) {
  return (
    <div className="bg-slate-100 rounded-lg space-x-5 w-fit px-10 py-5 flex flex-row items-end">
      <TextField
        variant="standard"
        name="name"
        label="Name"
        defaultValue={hotel.name}
        onChange={(e) => {
          hotel.name = e.target.value;
          onHotelChange(hotel);
        }}
      ></TextField>

      <TextField
        variant="standard"
        name="address"
        label="Address"
        defaultValue={hotel.address}
        onChange={(e) => {
          hotel.address = e.target.value;
          onHotelChange(hotel);
        }}
      ></TextField>

      <TextField
        variant="standard"
        name="district"
        label="District"
        defaultValue={hotel.district}
        onChange={(e) => {
          hotel.district = e.target.value;
          onHotelChange(hotel);
        }}
      ></TextField>

      <TextField
        variant="standard"
        name="province"
        label="Province"
        defaultValue={hotel.province}
        onChange={(e) => {
          hotel.province = e.target.value;
          onHotelChange(hotel);
        }}
      ></TextField>

      <TextField
        variant="standard"
        name="postalcode"
        label="Postalcode"
        defaultValue={hotel.postalcode}
        onChange={(e) => {
          hotel.postalcode = e.target.value;
          onHotelChange(hotel);
        }}
      ></TextField>

      <TextField
        variant="standard"
        name="tel"
        label="Tel"
        defaultValue={hotel.tel}
        onChange={(e) => {
          hotel.tel = e.target.value;
          onHotelChange(hotel);
        }}
      ></TextField>
      <TextField
        variant="standard"
        name="region"
        label="Region"
        defaultValue={hotel.region}
        onChange={(e) => {
          hotel.region = e.target.value;
          onHotelChange(hotel);
        }}
      ></TextField>
      <TextField
        variant="standard"
        name="image"
        label="Image"
        defaultValue={hotel.image}
        onChange={(e) => {
          hotel.image = e.target.value;
          onHotelChange(hotel);
        }}
      ></TextField>
    </div>
  );
}
