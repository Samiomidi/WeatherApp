import classes from "./layout.module.css";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SearchBar from "../search-result/searchBar";
import useScrollPosition from "../customHooks/useScrollPosition";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
const Layout = (props) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenuHandler() {
    setShowMenu(!showMenu);
  }
  const scrollPosition = useScrollPosition();

  return (
    <div className={classes.layout}>
      <header
        className={`${classes.header}  ${
          scrollPosition > 10 && classes["header-scrolled"]
        } ${router.pathname !== "/" && classes["header-background"]}`}
      >
        <div className={`${classes.logo}`}>
          <Link href="/">
            <Image src={logo} />
          </Link>
        </div>
        {router.pathname !== "/" && (
          <div className={classes.searchbar}>
            <SearchBar placeholder="Search locations" />
          </div>
        )}

        <AiOutlineMenu
          className={classes["menu-icon"]}
          onClick={toggleMenuHandler}
          style={{ visibility: `${showMenu ? "hidden" : "visible"}` }}
        />

        <nav className={classes.nav}>
          {showMenu && (
            <div className={classes.overlay} onClick={toggleMenuHandler}>
              <ul
                className={`${classes["mobile-menu"]} ${
                  scrollPosition > 10 && classes["mobile-menu-scrolled"]
                }`}
              >
                <AiOutlineClose
                  onClick={toggleMenuHandler}
                  className={classes["close-icon"]}
                />
                <li>
                  <Link href="/about-us" className={classes.menuOver}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          )}
          <ul className={classes["desktop-menu"]}>
            <li>
              <Link href="/about-us">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        <div className={classes.copyright}>
          <p className={classes.copyright}>
            &copy; Copyright{" "}
            {new Date().toLocaleDateString("en-US", { year: "numeric" })}
            {" by "}
            <a
              className={classes["mail-link"]}
              target="_blank"
              href="mailto:samiomidi@hotmail.com"
            >
              {" Sami Omidi"}
            </a>
            . Use for learning or your portfolio. Don't claim as your own.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
