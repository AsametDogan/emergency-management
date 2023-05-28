import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const userData = useSelector((state) => state.user.data);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState(userData);
  return (
    <div
      className={`overflow-y-scroll max-h-[calc(100vh-80px)] p-2 w-full h-full scrollbar-hide flex flex-col items-center justify-evenly gap-2`}
    >
      <div className="h-28 w-28 sm:h-24 sm:w-24 p-1 rounded-full bg-white shadow-lg">
        <img
          src={
            userData.img_url ||
            "https://ibuc.co.za/wp-content/uploads/2021/01/Company-Profile.png"
          }
          alt="profile"
        />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2  gap-2 justify-center items-center  w-full">
        <div className="flex items-center gap-2 justify-center">
          <label className="font-semibold">İsim:</label>
          <input
            className={`text-center max-w-[250px] w-full place-self-center rounded-tl-lg rounded-br-lg bg-blue-gray-200 px-2 py-1`}
            value={user.username}
            disabled={!edit}
          />{" "}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <label className="font-semibold">İsim:</label>
          <input
            className={`text-center max-w-[250px] w-full place-self-center rounded-tl-lg rounded-br-lg bg-blue-gray-200 px-2 py-1`}
            value={user.username}
            disabled={!edit}
          />{" "}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <label className="font-semibold">İsim:</label>
          <input
            className={`text-center max-w-[250px] w-full place-self-center rounded-tl-lg rounded-br-lg bg-blue-gray-200 px-2 py-1`}
            value={user.username}
            disabled={!edit}
          />{" "}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <label className="font-semibold">İsim:</label>
          <input
            className={`text-center max-w-[250px] w-full place-self-center rounded-tl-lg rounded-br-lg bg-blue-gray-200 px-2 py-1`}
            value={user.username}
            disabled={!edit}
          />{" "}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <label className="font-semibold">İsim:</label>
          <input
            className={`text-center max-w-[250px] w-full place-self-center rounded-tl-lg rounded-br-lg bg-blue-gray-200 px-2 py-1`}
            value={user.username}
            disabled={!edit}
          />{" "}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <label className="font-semibold">İsim:</label>
          <input
            className={`text-center max-w-[250px] w-full place-self-center rounded-tl-lg rounded-br-lg bg-blue-gray-200 px-2 py-1`}
            value={user.username}
            disabled={!edit}
          />{" "}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <label className="font-semibold">İsim:</label>
          <input
            className={`text-center max-w-[250px] w-full place-self-center rounded-tl-lg rounded-br-lg bg-blue-gray-200 px-2 py-1`}
            value={user.username}
            disabled={!edit}
          />{" "}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <label className="font-semibold">İsim:</label>
          <input
            className={`text-center max-w-[250px] w-full place-self-center rounded-tl-lg rounded-br-lg bg-blue-gray-200 px-2 py-1`}
            value={user.username}
            disabled={!edit}
          />{" "}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <label className="font-semibold">İsim:</label>
          <input
            className={`text-center max-w-[250px] w-full place-self-center rounded-tl-lg rounded-br-lg bg-blue-gray-200 px-2 py-1`}
            value={user.username}
            disabled={!edit}
          />{" "}
        </div>
      </div>
      <div>
        <button onClick={()=>{setEdit(true)}}>edit</button>
      </div>
    </div>
  );
};

export default ProfilePage;
