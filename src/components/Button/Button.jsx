import React from "react";
import { FaDownload } from "react-icons/fa";

const Button = ({ text }) => {
  return (
    <button className="flex items-center gap-2 rounded-md bg-green-600 px-6 py-2 text-white ">
      {text}
      <FaDownload />
    </button>
  );
};

export default Button;
