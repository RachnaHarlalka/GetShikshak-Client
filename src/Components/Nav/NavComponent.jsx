import { Link } from "react-router-dom";
// import { authTokenAtom, currentUserAtom } from "../../Atom";
// import { useRecoilState } from "recoil";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdBook } from "react-icons/io";
import {GiBookCover} from "react-icons/gi";
import { useState,useEffect } from "react";
import "./style.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { authTokenAtom, userDataAtom } from "../../Atom";
function NavComponent({children}) {
  const [showHamburger, setShowHamburger] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const [currentUser, setCurrentUser] = useRecoilState(userDataAtom);
  const [authToken, setAuthToken] = useRecoilState(authTokenAtom);
  const [showDropDown, setShowDropDown] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  function removeToken() {
    console.log("Inside logout");
    sessionStorage.clear();
    enqueueSnackbar("Logout Successfull !", { variant: "success" });
    // window.location.reload(); // Reload the window
    setCurrentUser(null);
    setAuthToken(null);
    navigate("/login");
  }

  function handleClick() {
    setShowHamburger((prev) => {
      return !prev;
    });

    console.log("clicked" + showHamburger);
  }
  // console.log("currentUser in nav",currentUser)
  // console.log("currentUser token",authToken);

  function showDropDownMenu() {
    setShowDropDown((prev) => {
      return !prev;
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldShow = scrollTop > 20;
      setShouldShowShadow(shouldShow);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="nav-bar" className={shouldShowShadow?"shadow-[0px_8px_10px_-15px_#111]":""}>
        <div className="" id="logo-div">
          <img className="logoImg" src="" alt="" />
          <span className="logoName tracking-wider">
            <Link className="flex justify-center items-center" to="/">
              <GiBookCover size="2em" color="var(--primary-color)" />
              <span className="mx-1 text-primary-color font-bold">
                GetShiksha
              </span>
            </Link>
          </span>
        </div>

        <div className=" text-primary-color" id="mid-nav-sub-div">
          <ul className="flex flex-row justify-around">
            {/* <li>
              <a href="./#about-section">About Us</a>
            </li>
            <li>
            <Link to="/studentdashboard">Student Dash</Link>
            </li>
            <li>
            <Link to="/tutordashboard">Tutor Dash</Link>
            </li> */}
            {authToken &&
              currentUser &&
              currentUser.role === "tutor" &&
              currentUser.isProfileCompleted === false && (
                <li className="font-bold">
                  <Link to="/tutorcompleteprofile">Complete Profile</Link>
                </li>
              )}
            {authToken &&
              currentUser &&
              currentUser.role === "student" &&
              currentUser.isProfileCompleted === false && (
                <li className="font-bold">
                  <Link to="/studentcompleteprofile">Complete Profile</Link>
                </li>
              )}
          </ul>
        </div>

        {!authToken && (
          <div className="nav-sub-div" id="right-nav-sub-div">
            <ul id="nav-bar-login-option">
              <li className="nav-button font-bold text-primary-color">
                <Link to="/login">Log In</Link>
              </li>
              <li className="nav-button mx-4 font-bold" id="sign-up-button">
                <Link
                  to="/register"
                  className="font-semibold px-4 py-2 rounded-xl text-white bg-primary-color"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}

        {authToken && (
          <div id="navbar-logedIn-profile-icon" onClick={showDropDownMenu}>
            <div id="navbar-profile-pic" className="text-white">
              {(currentUser?.profilePic)?(
                <div>
                  <img src={`http://localhost:3000/assets/${currentUser?.profilePic}`} alt="" className="rounded-full h-10 w-10 object-cover"/>
                </div>
              ):(
                <div>{currentUser?.name.toString()[0].toUpperCase()}</div>
              )}
              {/* {currentUser && currentUser.name.toString()[0].toUpperCase()} */}
            </div>
          </div>
        )}








        <div
          id="navbar-profile-icon-dropDown"
          style={
            showDropDown ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          <ul className="profile-icon-dropDown-list">
            <li id="dropDown-menu-user-name">
              {currentUser && currentUser.email}
            </li>
            <li onClick={showDropDownMenu} style={{ padding: "0px" }}>
              <Link
                to="/dashboard"
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "8px 0px",
                }}
              >
                Dashboard
              </Link>
            </li>
            <li
              className="active-button"
              onClick={() => {
                removeToken();
                showDropDownMenu();
              }}
            >
              <button>Log Out</button>
            </li>
          </ul>
        </div>

        <div id="hamburger-icon">
          <RxHamburgerMenu onClick={handleClick} />
        </div>

        <div
          id="hamburger-menu"
          style={
            showHamburger ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          <ul className="hamburger-list">
            <li>
              <a href="./#about-section">About Us</a>
            </li>
            <li>
              <Link to="/dashboard">Find Tutor</Link>
            </li>
            {authToken &&
              currentUser &&
              currentUser.role === "tutor" &&
              currentUser.isProfileCompleted === false && (
                <li>Complete Profile</li>
              )}
          </ul>
          {!authToken ? (
            <ul className="hamburger-list" id="bottom-list">
              <li>Login</li>
              <li id="active-button">Sign Up</li>
            </ul>
          ) : (
            <ul className="hamburger-list" id="bottom-list">
              <li>My Profile</li>
              <li id="active-button">Logout</li>
            </ul>
          )}
        </div>
      </div>
      {children}
    </>
  );
}

export default NavComponent;
