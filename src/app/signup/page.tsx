"use client";
import userSignUp from "@/libs/userSignUp";
import SignUpForm from "@/components/SignUpFrom";
import { useState } from "react";

export default function Signup() {
  const makeBooking = async () => {
    console.log(name + " " + " " + tel + " " + email + " " + password);
    const test = await userSignUp(name, tel, email, password);
    if (test.success) {
      window.location.href = "/api/auth/signin?callbackUrl=%2F";
    } else console.log(test.message);
  };

  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div>
        <div className="text-xl font-medium">Vaccine Booking</div>
        <div className="w-fit space-y-2">
          <div className="text-md text-left text-gray-600">
            Booking Information
          </div>
          <SignUpForm
            userName={name}
            userTel={tel}
            userEmail={email}
            userPassword={password}
            onNameChange={(value: string) => {
              setName(value);
            }}
            onTelChange={(value: string) => {
              setTel(value);
            }}
            onEmailChange={(value: string) => {
              setEmail(value);
            }}
            onPasswordChange={(value: string) => {
              setPassword(value);
            }}
          ></SignUpForm>
        </div>
        <button
          name="Book Vaccine"
          className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
          onClick={makeBooking}
        >
          Book Vaccine
        </button>
      </div>
    </main>
  );
}
