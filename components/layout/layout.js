import classes from "./layout.module.css";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBar from "../search-result/searchBar";
const Layout = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenuHandler() {
    setShowMenu(!showMenu);
  }
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href="/">Easy Weather</Link>
        </div>
        <SearchBar placeholder="Search your goal location" />
        <AiOutlineMenu className={classes.menu} onClick={toggleMenuHandler} />
        <nav className={classes.nav}>
          {showMenu && (
            <div className={classes.overlay} onClick={toggleMenuHandler}>
              <ul className={classes["mobile-menu"]}>
                <li>
                  <Link href="/about-us" className={classes.menuOver}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/about-us">Contact</Link>
                </li>
              </ul>
            </div>
          )}
          <ul className={classes["desktop-menu"]}>
            <li>
              <Link href="/about-us">About</Link>
            </li>
            <li>
              <Link href="/about-us">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}></footer>
    </div>
  );
};

export default Layout;
