import { useState,useEffect } from 'react';
import '../style.css';
import ProfileDetails from './ProfileDetails';
import HomePage from './HomePage';
import EditButton from '../EditButton';
import axios from 'axios';
import {useRecoilValue} from 'recoil';
import {authTokenAtom} from '../../../Atom'
import AccountSettings from '../AccountSettings';
import ListingItems from '../ListingItems';
import {useLottie} from 'lottie-react';
import LoadingLottie from '../../../../src/assets/lf30_ykdoon9j.json';

function TutorDashboard(){
    console.log("DashBoard Rendered");
    
    const [pageId,setPageId]=useState(0);
    const [students,setStudents]=useState([]);
    const [classes,setClasses]=useState([]);
    // const [authToken,setAuthToken] = useRecoilState(authTokenAtom);
    // const authToken = JSON.parse(sessionStorage.getItem("token"));
    const token = useRecoilValue(authTokenAtom);
    console.log("token inside dasg",token);
    // const authToken = useRecoilValue(authTokenAtom);
    // console.log("token inside dashboard",token);

    const [userData,setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const options = {
        animationData: LoadingLottie,
        loop: true,
    }

    const {view} = useLottie(options);

    const fetchStudents=async()=>{
        const response = await axios({
            url:"http://localhost:3000/tutor/getmystudents",
            method:"GET",
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        console.log("clases",response.data.filtered);
        const fetchedStudent=response.data.filteredStudents;
        const fetchedClass= response.data.filteredClasses;
        setStudents(fetchedStudent);
        setClasses(fetchedClass);
      }


    const fetchData= async()=>{
        let response = await axios(
            {
                url:"http://localhost:3000/dashboard/userdata",
                method:"GET",
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            }
        )
        setUserData(response.data.user);
        setIsLoading(false);
        // console.log("In Home ",userData);
        //JSON.parse(JSON.stringify(
        //console.log(userData);
    }

    useEffect(()=>{
        fetchData();
        fetchStudents();
    },[])


    function handleClick(id){
        console.log(id);
        switch(id){
            case "0": setPageId(0);break;
            case "1": setPageId(1);break;
            case "2": setPageId(2);break;
            case "3": setPageId(3);break;
            case "4": setPageId(4);break;
            default: console.log("Default of Handle Click");
        }
    }    

    function renderPage(id) {
        // console.log("inside renderpage");   
        switch(id) {
            case 0: return <HomePage fetchedData={userData}/>;
            case 1: return <ProfileDetails fetchedData={userData}/>;
            case 2: return <ListingItems pageheading={"Students List"} receivedData={students}/>;
            case 3: return <ListingItems pageheading={"Class List"} receivedData={classes}/>;
            case 4: return <AccountSettings status={userData.isAccountActive}/>;
            default: console.log("Default");
        }
    }


    return(
        <div id='dashboard-div'>
            {isLoading?(
            <div>
                {view}
            </div>
            ):(
                <>
                <div className='dashboard-sub-div' id='dashboard-left-sub-div'>
                    <div id="dashboard-left-sub-container-div">

                        <div id="logo">GETSHIKSHAK</div>

                        <div id='dashboard-profile-section'>
                            <div id='profile-pic-section'>
                                <div id='profile-pic'>
                                    {/* <FcManager/> */}
                                    <img id="profile-image" alt="image" src={`http://localhost:3000/assets/${userData?.profilePic}`}/>
                                    <div id="edit-profile-button">
                                        <EditButton bgcolor="lightgray"/>
                                    </div>
                                </div>
                                
                            </div>
                            <div id='profile-info-section'>
                                {/* <p id='user-name'>{newTutorData.name}</p> */}
                                {/*  */}
                            </div>
                        </div>

                        <div id="dashboard-menu-section">
                            <div id='dashboard-menu-top-div'>
                                <button className='dashboard-menu-options' onClick={(e)=>{handleClick(e.target.id)}} id={0}>
                                    {/* <d className='menu-option-label-outer-div'>
                                        <div className='menu-option-label-icon'>
                                            <AiOutlineHome/>
                                        </div> */}
                                        Home
                                        {/* {userData || "Showed"} */}
                                    {/* <Link to="/">Profile Section</Link> */}
                                </button>
                                <button className='dashboard-menu-options' onClick={(e)=>{handleClick(e.target.id)}} id={1}>
                                    {/* <div className='menu-option-label-outer-div'>
                                        <div className='menu-option-label-icon'>
                                            <AiOutlineProfile/>
                                        </div> */}
                                        Profile
                                    {/* <Link to="/">Profile Section</Link> */}
                                </button>
                                <button className='dashboard-menu-options' onClick={(e)=>{handleClick(e.target.id)}} id={2}>
                                    {/* <div className='menu-option-label-icon'>

                                    </div> */}
                                    Students
                                </button>
                                <button className='dashboard-menu-options' onClick={(e)=>{handleClick(e.target.id)}} id={3}>
                                    {/* <div className='menu-option-label-icon'>

                                    </div> */}
                                    Classes
                                </button>
                                <button className='dashboard-menu-options' onClick={(e)=>{handleClick(e.target.id)}} id={4}>
                                    {/* <div className='menu-option-label-icon'>

                                    </div> */}
                                    Settings
                                </button>
                            </div>
                            <div id="dashboard-menu-bottom-div">
                                <button className='btn-class' id='log-out-btn'>Log out</button>
                            </div>
                        </div>

                    </div>
                    </div>
                    <div className='dashboard-sub-div' id='dashboard-right-sub-div'>
                    <div id="dashboard-details-container-div">
                        {renderPage(pageId)}
                    </div>
                    </div>
                </>

            )}
        </div>
    )
}

export default TutorDashboard;