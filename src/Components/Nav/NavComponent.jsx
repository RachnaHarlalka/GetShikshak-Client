import { Link } from "react-router-dom";
// import { authTokenAtom, currentUserAtom } from "../../Atom";
// import { useRecoilState } from "recoil";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {IoMdBook} from "react-icons/io";
import { useState } from "react";
// import logo from '../../../public/images/logo'
import "./style.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { authTokenAtom, userDataAtom } from "../../Atom";
import * as React from 'react';
// import { Box,Avatar,Menu,MenuItem,ListItemIcon,Divider,IconButton,Typography,Tooltip,PersonAdd,Settings,Logout} from "@mui/material";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function NavComponent() {
  const [showHamburger, setShowHamburger] = useState(false);
  const [currentUser, setCurrentUser] = useRecoilState(userDataAtom);
  const [authToken, setAuthToken]=useRecoilState(authTokenAtom);

  // let currentUser = JSON.parse(sessionStorage.getItem("user"));
  // let authToken=JSON.parse(sessionStorage.getItem("token"));
  const [showDropDown , setShowDropDown] =useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
    const handleClose = () => {
      setAnchorEl(null);
    };

  // console.log("Having role ",currentUser?.role);
  // console.log("Auth value ",authToken);
  // console.log("isProfileComplete ",currentUser);

  function removeToken() {
    console.log("Inside logout");
    sessionStorage.clear();
    enqueueSnackbar("Logout Successfull !", { variant: "success" });
        // window.location.reload(); // Reload the window
    setCurrentUser(null);
    setAuthToken(null);
    navigate("/login");
  }

  // function handleClick() {
  //   setShowHamburger((prev) => {
  //     return !prev;
  //   });
  //   console.log("clicked" + showHamburger);
  // }
  // console.log("currentUser in nav",currentUser)
  // console.log("currentUser token",authToken);

  function showDropDownMenu(){
    setShowDropDown((prev) => {
      return !prev;
    });
  }

  console.log("userdata in nav",currentUser)

  return (
    <>
      <div id="nav-bar">
        <div className="nav-sub-div" id="logo-div">
          <img className="logoImg" src="" alt="" />
          <span className="logoName tracking-wider">
            <Link className="flex justify-center items-center" to="/"><IoMdBook size="2em"/><span className="mx-1">GetShiksha</span></Link>

          </span>
        </div>

        <div className="nav-sub-div" id="mid-nav-sub-div">
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
            {authToken && currentUser && currentUser.role === "tutor" && currentUser.isProfileCompleted===false &&(
              <li>
                <Link to="/tutorcompleteprofile">Complete Profile</Link>
              </li>
            )}
             {authToken && currentUser && currentUser.role === "student" && currentUser.isProfileCompleted===false &&(
              <li>
                <Link to="/studentcompleteprofile">Complete Profile</Link>
              </li>
            )}
          </ul>
        </div>

        {!authToken && (<div className="nav-sub-div" id="right-nav-sub-div">
          <ul id="nav-bar-login-option">
            <li className="nav-button">
              <Link to="/login">Log In</Link>
            </li>
            <li className="nav-button mx-4" id="sign-up-button">
              <Link
                to="/register"
                className="font-semibold px-4 py-2 rounded-xl"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>)}

        {/* {authToken && (
          <div id='navbar-logedIn-profile-icon' onClick={showDropDownMenu}>
            <div id='navbar-profile-pic'>
                {currentUser &&  currentUser.name.toString()[0].toUpperCase()}
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
            <li id='dropDown-menu-user-name'>
              {currentUser && currentUser.email}
            </li>
            <li onClick={showDropDownMenu} style={{padding:"0px"}}>
              <Link to="/dashboard" style={{width:"100%",textAlign:"center",padding:"8px 0px"}}>Dashboard</Link>
            </li>
            <li className="active-button" onClick={()=>{removeToken();showDropDownMenu()}}>
                <button>
                  Log Out
                </button>
            </li>
          </ul>
        </div> */}

        {authToken && (
            <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>{currentUser.name.toString()[0].toUpperCase()}</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar />
                <Link to="/dashboard">My account</Link>
              </MenuItem>
              <Divider />
              <MenuItem onClick={()=>{removeToken();handleClose()}}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}

        {/* <div id="hamburger-icon">
          <RxHamburgerMenu onClick={handleClick} />
        </div> */}

        {/* <div
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
            {authToken && currentUser && currentUser.role==="tutor" && currentUser.isProfileCompleted===false && (<li>Complete Profile</li>)}
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

        </div> */}
      </div>
    </>
  );
}

export default NavComponent;
