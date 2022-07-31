import { Menu } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { useToggleState } from "../context/StateProvider";

function Header() {
  const [isOpen, setIsOpen] = useToggleState();
  return (
    <header className="px-6 py-3 shadow-sm flex items-center space-x-2 border-b ">
      <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
      <div className="relative h-14 w-28">
        <Image
          layout="fill"
          objectFit="contain"
          src={"https://bit.ly/3vmAOZV"}
          priority
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
