"use client";
import { TextField } from "@mui/material";

export default function SignUpForm({
  userName,
  userTel,
  userEmail,
  userPassword,
  onNameChange,
  onTelChange,
  onEmailChange,
  onPasswordChange,
}: {
  userName: string;
  userTel: string;
  userEmail: string;
  userPassword: string;
  onNameChange: Function;
  onTelChange: Function;
  onEmailChange: Function;
  onPasswordChange: Function;
}) {
  return (
    <div className="bg-slate-100 rounded-lg space-x-5 w-fit px-10 py-5 flex flex-row items-end">
      <TextField
        variant="standard"
        name="userName"
        label="Name"
        defaultValue={userName}
        onChange={(e) => {
          onNameChange(e.target.value);
        }}
      ></TextField>

      <TextField
        variant="standard"
        name="userTel"
        label="Tel"
        defaultValue={userTel}
        onChange={(e) => {
          onTelChange(e.target.value);
        }}
      ></TextField>

      <TextField
        variant="standard"
        name="userEmail"
        label="Email"
        defaultValue={userEmail}
        onChange={(e) => {
          onEmailChange(e.target.value);
        }}
      ></TextField>

      <TextField
        variant="standard"
        name="userPassword"
        label="Password"
        defaultValue={userPassword}
        onChange={(e) => {
          onPasswordChange(e.target.value);
        }}
      ></TextField>
    </div>
  );
}
