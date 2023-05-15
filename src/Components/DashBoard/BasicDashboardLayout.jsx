import { useState,useEffect } from 'react';
import './style.css';
import {FcManager} from 'react-icons/fc';
import ProfileDetails from './ProfileDetails';
import HomePage from './HomePage';
import EditButton from './EditButton';
import {AiOutlineHome,AiOutlineProfile} from 'react-icons/ai';
import axios from 'axios';
import {useRecoilState} from 'recoil';
import {authTokenAtom} from '../../Atom'
import AccountSettings from './AccountSettings';

function BasicDashboardLayout(){
    console.log("DashBoard Rendered");
    
    const [pageId,setPageId]=useState(0);
    const [authToken,setAuthToken] = useRecoilState(authTokenAtom);
    // const [fetchedResponse,setResponse] = useState({})
    const [fetchedResponse,setFetchedResponse] = useState([]);


    const fetchData= async()=>{
        let response = await axios(
            {
                url:"http://localhost:3000/dashboard/userdata",
                method:"GET",
                headers:{
                    "Authorization": `Bearer ${authToken}`
                }
            }
        )
        //console.log(response);
        setFetchedResponse(response.data);
        //JSON.parse(JSON.stringify(
        //console.log(fetchedResponse);
    }

    useEffect(()=>{
        fetchData();
    },[])


    function handleClick(id){
        console.log(id);
        switch(id){
            case "0": setPageId(0);break;
            case "1": setPageId(1);break;
            case "2": setPageId(2);break;
            case "4": setPageId(4);break;
            default: console.log("Default of Handle Click");
        }
    }

    function renderPage(id) {
        switch(id) {
            case 0: return <HomePage fetchedData={fetchedResponse}/>;
            case 1: return <ProfileDetails fetchedData={fetchedResponse}/>;
            case 2: return <StudentDetails/>;
            case 4: return <AccountSettings/>;
            default: console.log("Default");
        }
    }


    return(
        <div id='dashboard-div'>
            <div className='dashboard-sub-div' id='dashboard-left-sub-div'>

                <div id="dashboard-left-sub-container-div">

                    <div id="logo">GETSHIKSHAK</div>

                    <div id='dashboard-profile-section'>
                        <div id='profile-pic-section'>
                            <div id='profile-pic'>
                                {/* <FcManager/> */}
                                <img id="profile-image" alt="image" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                                <div id="edit-profile-button">
                                    <EditButton bgcolor="lightgray"/>
                                </div>
                            </div>
                            
                        </div>
                        <div id='profile-info-section'>
                            <p id='user-name'>Tutor Name</p>
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
                                    {/* {fetchedResponse || "Showed"} */}
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
                            <button className='dashboard-menu-options'>
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
        </div>
    )
}

export default BasicDashboardLayout;