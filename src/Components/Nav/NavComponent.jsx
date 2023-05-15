import { Link } from "react-router-dom";
// import { authTokenAtom, currentUserAtom } from "../../Atom";
// import { useRecoilState } from "recoil";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import "./style.css";
function NavComponent() {
  const [showHamburger, setShowHamburger] = useState(false);
  let currentUser = JSON.parse(sessionStorage.getItem("user"));
  let authToken=JSON.parse(sessionStorage.getItem("token"));
  // const [authToken, setAuthToken] = useRecoilState(authTokenAtom);
  // const [currentUser, setcurrentUser] = useRecoilState(currentUserAtom);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();


  function removeToken() {
    console.log("Inside logout");
    sessionStorage.clear();
    enqueueSnackbar("Logout Successfull !", { variant: "success" });
    navigate("/login");
  }

  function handleClick() {
    setShowHamburger((prev) => {
      return !prev;
    });

    console.log("clicked" + showHamburger);
  }
  console.log("currentUser in nav",currentUser)
  console.log("currentUser token",authToken);

  return (
    <>
      <div id="nav-bar">
        <div className="nav-sub-div" id="logo-div">
          <img className="logoImg" src="" alt="" />
          <span className="logoName tracking-wider">
            <Link to="/">GETSHIKSHAK</Link>
            {/* <span className="mx-2">role : {currentUser && currentUser.role}</span> */}
            {/* <span className="mx-2">email : {currentUser && currentUser.email}</span> */}

          </span>
        </div>

        <div className="nav-sub-div" id="mid-nav-sub-div">
          <ul className="flex flex-row justify-around">
            <li>
              <a href="./#about-section">About Us</a>
            </li>
            <li>
              <Link to="">Find Tutor</Link>
            </li>
            {authToken && currentUser && currentUser.role === "tutor" && currentUser.tutorForm.isProfileCompleted===false &&(
              <li>
                <Link to="/tutorCreation">Complete Profile</Link>
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
            {authToken && currentUser && currentUser.role==="tutor" && currentUser.tutorForm.isProfileCompleted===false && (<li>Complete Profile</li>)}
          </ul>
         {!authToken ? (
           <ul className="hamburger-list" id="bottom-list">
           <li>Login</li>
           <li id="active-button">Sign Up</li>
         </ul>
         ):(
          <ul className="hamburger-list" id="bottom-list">
          <li>My Profile</li>
          <li id="active-button">Logout</li>
        </ul>
        )}

        </div>
      </div>
    </>
  );
}

export default NavComponent;
