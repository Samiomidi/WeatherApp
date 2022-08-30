import React, { useRef, useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import classes from "./searchBar.module.css";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const SearchBar = React.forwardRef((props, ref) => {
  const [userLocationLink, setUserLocationLink] = useState("/");
  const [enteredValue, setEnteredValue] = useState("");
  const [userLat, setUserLat] = useState();
  const [userLon, setUserLon] = useState();
  const [error, setError] = useState({
    type: false,
    message: "",
  });

  const inputRef = useRef();
  const router = useRouter();
  const enteredValueChangeHandler = () => {
    setEnteredValue(inputRef.current.value);
  };
  const submitHanler = (event) => {
    event.preventDefault();

    const enteredValue = inputRef.current.value;
    if (enteredValue.trim() == "") {
      setError({
        type: true,
        message: "input is empty",
      });
    } else {
      const exploreLink = `/result/${enteredValue}`;
      router.replace(exploreLink);
      setEnteredValue("");
    }
  };

  function getUserCoords() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLat(pos.coords.latitude);
          setUserLon(pos.coords.longitude);
        },
        () => {
          alert(
            "Your location information is not accessible. Please allow access and try again."
          );
        }
      );
    }
  }

  function locationBtnHandler() {
    getUserCoords();
  }

  useEffect(() => {
    getUserCoords();
    if (userLat && userLon) {
      setUserLocationLink(`/result/userlocation/${userLat}/${userLon}`);
    }
  }, [userLat, userLon, userLocationLink]);
  return (
    <Fragment>
      <form
        onSubmit={submitHanler}
        className={`${classes.searchbar} ${props.className}`}
      >
        <button className={classes.btn}>
          <BsSearch className={classes["search-icon"]} />
        </button>
        <input
          ref={inputRef}
          className={classes.input}
          type="search"
          placeholder={props.placeholder}
          value={enteredValue}
          onChange={enteredValueChangeHandler}
        >
          {props.children}
        </input>
        <Link href={userLocationLink} className={classes.location}>
          <a onClick={locationBtnHandler}>
            <MdLocationOn className={classes["location-icon"]} />
            <span className={classes["hover-detail"]}>Use Your Location</span>
          </a>
        </Link>
      </form>
      {error.type && <div className={classes.error}>{error.message}</div>}
    </Fragment>
  );
});

export default SearchBar;
