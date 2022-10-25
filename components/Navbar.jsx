import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const [style, setStyle] = useState("transparent");
  const [textStyle, setTextStyle] = useState("white");

  const handleOpenMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleStyle = () => {
      if (window.scrollY >= 90) {
        setStyle("white");
        setTextStyle("black");
      } else {
        setStyle("transparent");
        setTextStyle("white");
      }
    };
    window.addEventListener("scroll", handleStyle);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${style}` }}
      className="fixed top-0 left-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textStyle}` }} className="font-bold text-4xl">
            O.A.Asar
          </h1>
        </Link>

        <ul className="hidden sm:flex" style={{ color: `${textStyle}` }}>
          <li className="m-4 border-b-white hover:border-b pb-[3px] px-[5px] ">
            <Link href="/">Home </Link>
          </li>
          <li className="m-4 border-b-white hover:border-b pb-[3px] px-[5px] ">
            <Link href="/#about">About</Link>
          </li>
          <li className="m-4 border-b-white hover:border-b pb-[3px] px-[5px] ">
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="m-4 border-b-white hover:border-b pb-[3px] px-[5px] ">
            <Link href="/#skills">Skills</Link>
          </li>
          <li className="m-4 border-b-white hover:border-b pb-[3px] px-[5px] ">
            <Link href="/#links">Links</Link>
          </li>
        </ul>

        {/* Responsive Menu */}
        <div
          onClick={handleOpenMenu}
          className="block sm:hidden z-10 cursor-pointer"
        >
          {menu ? (
            <AiOutlineClose size={30} style={{ color: `${textStyle}` }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `${textStyle}` }} />
          )}
        </div>
        <div
          className={
            menu
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 text-center flex justify-center items-center h-screen w-full ease-in duration-300 bg-black"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 text-center flex justify-center items-center h-screen w-full ease-in duration-300 bg-black"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="/">
                <a onClick={handleOpenMenu}>Home</a>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="/#about">
                <a onClick={handleOpenMenu}>About</a>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="/#projects">
                <a onClick={handleOpenMenu}>Projects</a>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="/#skills">
                <a onClick={handleOpenMenu}>Skills</a>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="/#links">
                <a onClick={handleOpenMenu}>Links</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
