import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Turkish from "../assets/turkish.svg";
import English from "../assets/english.svg";
import { motion, AnimateSharedLayout } from "framer-motion";

const links = [
  { name: "Home", href: "/", scroll: true },
  { name: "About", href: "/#about", scroll: false },
  { name: "Projects", href: "/#projects", scroll: false },
  { name: "Skills", href: "/#skills", scroll: false },
  { name: "Contact", href: "/#contact", scroll: false },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [flag, setFlag] = useState(true);
  const [style, setStyle] = useState("transparent");
  const [textStyle, setTextStyle] = useState("white");
  const [selected, setSelected] = useState(0);

  const MenuItem = ({ text, selected, onClick, href, scroll }) => (
    <Link href={href} scroll={scroll}>
      <motion.div
        style={{ color: `${textStyle}` }}
        className="menu-item"
        onClick={onClick}
        animate={{ opacity: selected ? 1 : 0.5 }}
      >
        {text}

        {selected && (
          <motion.div
            className={`underline bg-${textStyle}`}
            layoutId="underline"
          />
        )}
      </motion.div>
    </Link>
  );
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

  const onLangClick = () => {
    setFlag(!flag);
  };

  return (
    <div
      style={{ backgroundColor: `${style}` }}
      className="fixed top-0 left-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textStyle}` }} className="font-bold text-4xl">
            O.A.Asar{" "}
            {/* <span className="text-sm font-light">(in progress)</span> */}
          </h1>
        </Link>
        <ul className="hidden sm:flex " style={{ color: `${textStyle}` }}>
          <div className="underlined-menu">
            <div className="wrapper">
              <AnimateSharedLayout>
                {links.map((link, index) => (
                  <MenuItem
                    key={index}
                    scroll={link.scroll}
                    href={link.href}
                    text={link.name}
                    selected={selected === index}
                    onClick={() => {
                      setSelected(index);
                    }}
                  />
                ))}
              </AnimateSharedLayout>
            </div>
          </div>

          <li className="mx-4 mt-3 cursor-pointer px-[5px]">
            <button onClick={onLangClick}>
              {flag ? (
                <Turkish width="30px" height="30px" />
              ) : (
                <English width="30px" height="30px" />
              )}
            </button>
          </li>
        </ul>

        {/* Responsive Menu */}
        <div
          onClick={handleOpenMenu}
          className="block sm:hidden z-10 cursor-pointer"
        >
          {menu ? (
            <AiOutlineClose
              size={30}
              style={{ color: `${textStyle}`, marginRight: "10px" }}
            />
          ) : (
            <AiOutlineMenu
              size={30}
              style={{ color: `${textStyle}`, marginRight: "10px" }}
            />
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
