import React, { useEffect, useState } from "react";
import {
  MdAdd,
  MdFormatListBulleted,
  MdOutlineAddHomeWork,
  MdMenu,
  MdFilterAlt,
} from "react-icons/md";
import { BsSortDown } from "react-icons/bs";
import DrawerButton from "./DrawerButton";
import NewHelp from "../NewHelp";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  Checkbox,
  Collapse,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import Filter from "./Filter";

const DrawerMenu = () => {
  const user = useSelector((state) => state.user);

  const [openNew, setOpenNew] = useState(false); //adding new post dialog
  const [open, setOpen] = useState(true); //drawer menu
  
  const handleOpenNew = () => setOpenNew(!openNew);
  
  

  return (
    <div
      className={`max-w-[230px] transition-all md:max-w-[150px] ${
        open ? " w-full" : ""
      } flex flex-col `}
    >
      <div className="grid text-2xl">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="p-1 hover:shadow place-self-end rounded-lg"
        >
          <MdMenu />
        </button>
      </div>
      <div
        className={` flex flex-col  ${
          open ? " w-full" : "hidden"
        }  px-1 gap-2 overflow-y-scroll h-full scrollbar-hide `}
      >
        <DrawerButton
          onClick={handleOpenNew}
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
        <Filter/>
        <NewHelp handleOpen={handleOpenNew} open={openNew} />
      </div>
    </div>
  );
};

export default DrawerMenu;
