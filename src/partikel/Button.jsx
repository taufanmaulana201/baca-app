import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <Link
      to={link}
      className=" bg-yellow-400 my-6 hover:bg-yellow-500 rounded-sm max-w-max px-4 py-2 shadow-sm font-semibold text-[13px]"
    >
      {text}
    </Link>
  );
};

export default Button;
