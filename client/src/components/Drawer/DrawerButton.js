import React from "react";
import { Link } from "react-router-dom";

const DrawerButton = ({ Icon, text, bgcolor, onClick, txtcolor, link }) => {
  return (
    <Link
      to={link ? link : null}
      onClick={onClick}
      className={`flex items-center rounded ${bgcolor} ${txtcolor} border-b border-transparent hover:border-gradient  justify-center gap-2  py-2  transition-all`}
    >
      <Icon className="text-base" />
      {text}
    </Link>
  );
};

export default DrawerButton;
