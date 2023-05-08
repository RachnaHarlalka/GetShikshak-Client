import { Link } from "react-router-dom";
import { authTokenAtom, formDataAtom } from "../../Atom";
import { useRecoilState } from "recoil";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import "./style.css";
function NavComponent() {
  const [showHamburger, setShowHamburger] = useState(false);

  const [authToken, setAuthToken] = useRecoilState(authTokenAtom);
  const [formData, setFormData] = useRecoilState(formDataAtom);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  function removeToken() {
    console.log("Inside logout");
    setAuthToken("");
    localStorage.clear();
    enqueueSnackbar("Logout Successfull !", { variant: "success" });
    navigate("/login");
  }

  function handleClick() {
    setShowHamburger((prev) => {
      return !prev;
    });

    console.log("clicked" + showHamburger);
  }

  return (
    <>
      <div id="nav-bar">
        <div className="nav-sub-div" id="logo-div">
          <img className="logoImg" src="" alt="" />
          <span className="logoName tracking-wider">
            <Link to="/">GETSHIKSHAK</Link>
          </span>
        </div>

        <div className="nav-sub-div" id="mid-nav-sub-div">
          <ul className="flex flex-row justify-around">
            <li>
              <a href="./#about-section">About Us</a>
            </li>
            <li>
              <Link to="/dashboard">Find Tutor</Link>
            </li>
            {authToken && formData.role !== "tutor" && (
              <li>
                <Link to="/tutorCreation">Become a Tutor</Link>
              </li>
            )}
          </ul>
        </div>

        {!authToken && (<div className="nav-sub-div" id="right-nav-sub-div">
          <ul id="nav-bar-login-option">
            <li className="nav-button">
              <Link to="/login">Log In</Link>
            </li>
            <li className="nav-button" id="sign-up-button">
              <Link
                to="/register"
                className="font-semibold px-4 py-2 rounded-xl"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>)}

        {authToken && (
          <div className=" w-[16rem]">
            <ul className="flex flex-row justify-around">
              <li>
                <Link
                  to="/register"
                  className="font-semibold px-4 py-2 bg-white text-[#009193] rounded-md"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <button className="font-bold" onClick={removeToken}>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}

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
            <li>Become a Tutor</li>
          </ul>
          <ul className="hamburger-list" id="bottom-list">
            <li>Login</li>
            <li id="active-button">Sign Up</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavComponent;
