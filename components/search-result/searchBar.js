import React, { useRef, useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import classes from "./searchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const SearchBar = (props) => {
  const [userLocationAllow, setUserLocationAllow] = useState(null);
  const [enteredValue, setEnteredValue] = useState("");
  const [userLat, setUserLat] = useState();
  const [userLon, setUserLon] = useState();
  const [error, setError] = useState({
    type: false,
    message: "",
  });

  const inputRef = useRef();
  const locationIconRef = useRef();
  const router = useRouter();
  const enteredValueChangeHandler = () => {
    setEnteredValue(inputRef.current.value);
    const enteredValue = inputRef.current.value;
    if (enteredValue.trim() != "") {
      setError({
        type: false,
        message: "",
      });
    }
  };
  const submitHanler = (event) => {
    event.preventDefault();
    const enteredValue = inputRef.current.value;

    if (enteredValue.trim() == "") {
      setError({
        type: true,
        message: "Input is empty !!!",
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
          setUserLocationAllow(true);
          localStorage.setItem("locationAllowance", true);
          localStorage.setItem("userLat", pos.coords.latitude);
          localStorage.setItem("userLon", pos.coords.longitude);
        },
        () => {
          alert(
            "Your location information is not accessible. Please allow access and try again."
          );
          setUserLocationAllow(false);
          localStorage.setItem("locationAllowance", false);
          localStorage.setItem("userLat", "");
          localStorage.setItem("userLon", "");
        }
      );
    }
  }

  function locationBtnHandler() {
    getUserCoords();

    if (localStorage.getItem("locationAllowance") === "true") {
      router.replace(
        `/result/userlocation/${localStorage.getItem(
          "userLat"
        )}/${localStorage.getItem("userLon")}`
      );
    }
    if (userLat && userLon) {
      router.replace(`/result/userlocation/${userLat}/${userLon}`);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("locationAllowance") === "true") {
      setUserLocationAllow(true);
    }
  }, [userLocationAllow]);
  return (
    <Fragment>
      <div className={classes.container}>
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
        </form>
        <div className={classes.location}>
          <MdLocationOn
            onClick={locationBtnHandler}
            className={classes["location-icon"]}
            ref={locationIconRef}
            style={userLocationAllow && { color: "var(--primary-color)" }}
          />
          <span className={classes["hover-detail"]}>Use Your Location</span>
        </div>
        {error.type && <div className={classes.error}>{error.message}</div>}
      </div>
    </Fragment>
  );
};

export default SearchBar;
