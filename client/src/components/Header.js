import React from "react";
import { LogoOrganization } from "../media/images";

import { CgProfile, CgLogOut } from "react-icons/cg";
import { FcSettings } from "react-icons/fc";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { logout } from "../stores/User";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const handleExit = () => {
    dispatch(logout());
  };
  return (
    <div className=" w-full py-2 md:px-4 px-8 flex items-center justify-between bg-redPrimary">
      <div className="flex items-center gap-2">
        <div className="p-1 bg-gray-100 rounded-full">
          <img className="w-9 h-9" src={LogoOrganization} alt="logo" />
        </div>
        <label className="text-lg md:text-base tracking-wide font-semibold text-white font-serif">
          AFET KOORDİNASYON
        </label>
      </div>
      <div>
        <Menu placement="bottom-end">
          <MenuHandler>
            <Button className="bg-grey hover:bg-gray-200 p-1 transition-all shadow-none hover:shadow rounded-full">
              <CgProfile className="text-3xl text-gradient" />
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem className="p-0">
              <Link to={"profile"} className="w-full h-full px-1 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-grey">
                <FcSettings />
                Profilim
              </Link>
            </MenuItem>
            <MenuItem className="p-0">
              <button
                onClick={handleExit}
                className="w-full h-full px-1 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-grey"
              >
                <CgLogOut />
                Çıkış
              </button>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
