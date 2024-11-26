"use client";
import { BiMenuAltRight } from "react-icons/bi";
import Image from "next/image";
import logo from "../../../public/logo1.png";
import Link from "next/link";
import "@/components/style/header.css";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
    
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={logo} width={90} height={90} alt="logo" />
      </div>
     
      
     
      <ul className={isMenuOpen ?" navbar-links active" : "navbar-links"}>
        <li className="list">
          <Link href="/"  onClick={toggleMenu} >Home</Link>
        </li>
        <li className="list">
          <Link href="#about"  onClick={toggleMenu} >About</Link>
        </li>
        <li className="list">
          <Link href="#skills"  onClick={toggleMenu} >Skills</Link>
        </li>
        <li className="list">
          <Link href="#projects"  onClick={toggleMenu} >Projects</Link>
        </li>
        <li className="list">
          <Link href="#contact"  onClick={toggleMenu} >Contact</Link>
        </li>
      </ul>
      <div onClick={toggleMenu} className="menu-icon">
        <BiMenuAltRight size={30} />
      </div>

      {/* CTA Button */}
      <Link href="#contact" className="btn">
        Contact Me
      </Link>
    </nav>
  );
};

export default Header;

