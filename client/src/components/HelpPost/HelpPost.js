import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { IoArrowUp, IoLocationOutline } from "react-icons/io5";
import Tag from "./Tag";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";

const HelpPost = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="w-full border bg-white rounded-lg h-64 p-2 px-4 items-center gap-1.5 flex flex-row max-w-[500px] hover:shadow-md transition-all ">
      <Tooltip
        content="ACİL"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <div className="p-0.5 rounded-full border flex justify-center items-center">
          <IoArrowUp className={`text-xs`} />
        </div>
      </Tooltip>
      <div className=" flex flex-col w-full">
        <div className="flex flex-row items-center justify-between gap-3 ">
          <div>
            <img src="" />
            <label className="font-semibold text-base text-gradient">
              Yardım Başlığı
            </label>
          </div>
          <label className="text-xs text-gray-400 "> 25.04.2023</label>
        </div>
        <div className="flex items-center  text-[10px] justify-between text-gray-400 -translate-y-0.5">
          <div className="flex gap-0.5">
            <label className="text-gray-600">Samet Dogan</label>
            <label>12:30</label>
          </div>
          <div className="flex gap-1">
            <Tag />
            <Tag />
            <Tag />
          </div>
        </div>

        <div className="text-sm border-y py-0.5 text-justify">
          açıklama açıklama açıklama açıklam aaçıklama açıklamaaçıklama açıklam
          aaçıklama açıklamaaçıklama açıklama
        </div>
        <div className="text-xs flex gap-1 items-center justify-between ">
          <label>phone:telefontelefon</label>
          <div className="flex gap-1">
            <IoLocationOutline />
            konum konum
          </div>
        </div>
      </div>
      {user.isAdmin ? (
        <button className="flex items-center justify-center p-1 hover:bg-red-200  rounded-full ">
          <MdOutlineDeleteForever className="text-sm" />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HelpPost;
