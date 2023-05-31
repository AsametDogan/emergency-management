import React, { useState } from "react";
import { registerUserApi } from "../api/auth";
import { Switch } from "@material-tailwind/react";

const RegisterPage = () => {
  const [newUser, setNewUser] = useState({
    username: "kutlur",
    email: "kutlu@gmail.com",
    password: "12345ss*6",
    phone: "5070268158",
    adress: "Angaranın Bağları Büklüm Büklüm Yolları",
    isAdmin: false,
    contactName: "samet",
    contactPhone: "5070268158",
  });
  console.log(newUser);

  //username, email, password, phone, adress, contactName, contactPhone
  return (
    <div className="flex flex-col ">
      <form className="flex flex-col gap-2">
        username
        <input
          type="text"
          value={newUser.username}
          onChange={(event) => {
            setNewUser({ ...newUser, username: event.target.value });
          }}
        />
        email
        <input
          type="text"
          value={newUser.email}
          onChange={(event) => {
            setNewUser({ ...newUser, email: event.target.value });
          }}
        />
        password
        <input
          type="text"
          value={newUser.password}
          onChange={(event) => {
            setNewUser({ ...newUser, password: event.target.value });
          }}
        />
        phone
        <input
          type="text"
          value={newUser.phone}
          onChange={(event) => {
            setNewUser({ ...newUser, phone: event.target.value });
          }}
        />
        adress
        <input
          type="text"
          value={newUser.adress}
          onChange={(event) => {
            setNewUser({ ...newUser, adress: event.target.value });
          }}
        />
        contactName
        <input
          type="text"
          value={newUser.contactName}
          onChange={(event) => {
            setNewUser({ ...newUser, contactName: event.target.value });
          }}
        />
        contactPhone
        <input
          type="text"
          value={newUser.contactPhone}
          onChange={(event) => {
            setNewUser({ ...newUser, contactPhone: event.target.value });
          }}
        />
        <Switch
          value={newUser.isAdmin}
          onChange={() => {
            newUser.isAdmin
              ? setNewUser({ ...newUser, isAdmin: false })
              : setNewUser({ ...newUser, isAdmin: true });
          }}
        />
        <button
          onClick={() => {
            registerUserApi(newUser);
          }}
          className="bg-blue-gray-200"
        >
          GÖnder la gardaş
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
