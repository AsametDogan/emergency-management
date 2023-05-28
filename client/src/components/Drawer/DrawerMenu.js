import React, { useEffect, useState } from "react";
import {
  MdAdd,
  MdFormatListBulleted,
  MdOutlineAddHomeWork,
} from "react-icons/md";
import DrawerButton from "./DrawerButton";
import NewHelp from "../NewHelp";
import { useSelector } from "react-redux";

const DrawerMenu = () => {
  const user = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="max-w-[230px] md:max-w-[150px] w-full flex flex-col  sm:hidden py-2 px-1 gap-2 overflow-y-scroll scrollbar-hide">
      <DrawerButton
        onClick={handleOpen}
        txtcolor={"text-white "}
        Icon={MdAdd}
        bgcolor={"bg-red-500 hover:bg-red-700"}
        text={"Yeni Durum"}
      />
      <DrawerButton
        txtcolor={"text-gradient"}
        Icon={MdFormatListBulleted}
        bgcolor={"hover:bg-grey"}
        text={"Acil Durumlar"}
        link={"help"}
      />
      <div className={`${user.isAdmin ? "" : "hidden"} bg-blueLi `}>
        <DrawerButton
          txtcolor={"text-white hover:text-blueDark"}
          Icon={MdOutlineAddHomeWork}
          bgcolor={"bg-blueLight hover:bg-grey"}
          text={"Yeni Kullanıcı Ekle"}
          link={"add-user"}
        />
      </div>
      <NewHelp handleOpen={handleOpen} open={open} />
    </div>
  );
};

export default DrawerMenu;
