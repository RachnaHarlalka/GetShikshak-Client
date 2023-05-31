import { useEffect, useState } from "react";
import EditButton from "../EditButton";
import HomePage from "./HomePage";
import axios from "axios";
import ListingItems from "../ListingItems";
import { useRecoilValue } from "recoil";
import { authTokenAtom } from "../../../Atom";


function AdminDashboard() {
  const [pageId, setPageId] = useState(0);
  const[students,setStudents]=useState([]);
  const[tutors,setTutors]=useState([]);
  const[admin,setAdmin]=useState(null);
  // const authToken = JSON.parse(sessionStorage.getItem("token"));
  const authToken = useRecoilValue(authTokenAtom);
  // console.log(authToken);

  const fetchStudent=async()=>{
    const response = await axios({
        url:"http://localhost:3000/user/getstudents",
        method:"GET"
    })
    // console.log("student",response.data.filteredStudents);
    const fetchedStudent=response.data.filteredStudents;
    setStudents(fetchedStudent);

  }

  const fetchTutor=async()=>{
    const response = await axios({
        url:"http://localhost:3000/user/gettutors",
        method:"GET"
    })
    // console.log("tutor",response.data.filteredTutors);
    const fetchedTutors=response.data.filteredTutors;
    setTutors(fetchedTutors);
  }

  const fetchAdmin=async()=>{
    const response = await axios({
        url:"http://localhost:3000/dashboard/getadmin",
        method:"GET",
        headers:{
            "Authorization":`Bearer ${authToken}`
        }
    })

    // headers:{
    //     "Content-Type":"application/json",
    //     "Authorization":`Bearer ${authToken}`
    //   }
    // console.log("admin",response.data.admin);
    const fetchedAdmin=response.data.admin;
    setAdmin(fetchedAdmin);
  }

  useEffect(()=>{
    fetchStudent();
    fetchTutor();
    fetchAdmin();
  },[])
  function handleClick(id) {
    switch (id) {
      case "0":
        setPageId(0);
        break;
      case "1":
        setPageId(1);
        break;
      case "2":
        setPageId(2);
        break;
      case "3":
        setPageId(3);
        break;
      default:
        console.log("Default of Handle Click");
    }
  }

  const sidebarOptions = ["Home","Tutors", "Students", "AdvertiseInfo"];

  function renderPage(id) {
    switch (id) {
      case 0:
        return (<HomePage students={students} tutors={tutors} admin={admin}/>);
      case 1:
        return (<ListingItems pageheading={"Tutors List"} receivedData={tutors}/>);
      case 2:
        return (<ListingItems pageheading={"Students List"} receivedData={students}/>);
      case 3:
        return (<><h1>AdvertiseInfo</h1></>);
      default:
        console.log("Default");
    }
  }
  return (
    <div id="dashboard-div">
      <div className="dashboard-sub-div" id="dashboard-left-sub-div">
        <div id="dashboard-left-sub-container-div">
          <div id="logo">GETSHIKSHAK</div>

          <div id="dashboard-profile-section">
            <div id="profile-pic-section">
              <div id="profile-pic" >
                {/* <FcManager/> */}
                <img
                  id="profile-image"
                  alt="image"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <div id="edit-profile-button">
                  <EditButton bgcolor="lightgray" />
                </div>
              </div>
            </div>
          </div>
          <div id="dashboard-menu-section">
            <div id="dashboard-menu-top-div">
              {sidebarOptions.map((option,index) => {
                return (
                  <>
                    <button
                      className="dashboard-menu-options"
                      onClick={(e) => {
                        handleClick(e.target.id);
                      }}
                      key={index}
                      id={index}
                    >
                      {option}
                    </button>
                  </>
                );
              })}
             
            </div>
            <div id="dashboard-menu-bottom-div">
              <button className="btn-class" id="log-out-btn">
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-sub-div" id="dashboard-right-sub-div">
        <div id="dashboard-details-container-div">{renderPage(pageId)}</div>
      </div>
    </div>
  );
}
export default AdminDashboard;
