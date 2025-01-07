import Link from "next/link";
import React from "react";

import Logo from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import Image from "next/image";
import HeaderBackground from "./Header-Background";
import NavLink from "./NavLink";
function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            width={50}
            height={50}
            src={Logo.src}
            alt="A Plate with"
            priority
          />
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">All Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
