import './studentHomePage.css';
import {MdWavingHand} from 'react-icons/md';
// import {IoCloseCircleOutline} from 'react-icons/io';
import {MdOutlineStar} from 'react-icons/md';
import { useEffect, useState } from 'react';
import EditButton from '../EditButton';
import {TiPin} from 'react-icons/ti';
import {AiOutlineEye} from 'react-icons/ai';
import {MdNotificationsActive,MdVerified} from 'react-icons/md';
import {VscVerifiedFilled} from 'react-icons/vsc';
import {RxCrossCircled} from 'react-icons/rx';
import {GoUnverified} from 'react-icons/go';
import DateTime from '../DateTime';
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';
import ListingItems from '../ListingItems';

function HomePage({fetchedData}){
    console.log("Homepage Rendered and the pros passed ");

    const [displayType, setDisplayType] = useState("none");
    const [currentNotification, setCurrentNotification] = useState(null);
    const [aboutYou , setAboutYou] = useState("");
    const [aboutClass , setAboutClass] = useState("");   
    const [classRequests,setClassRequests] = useState(null);
    const [activeNotification, setActiveNotification] = useState(null);

    const authToken = JSON.parse(sessionStorage.getItem('token'));

    // console.log("Current ",currentNotification);

    const fetchData= async()=>{
        let response = await axios(
            {
                url:"http://localhost:3000/dashboard/classrequest",
                method:"GET",
                headers:{
                    "Authorization": `Bearer ${authToken}`
                }
            }
        )
        // console.log("In Response ",response.data);
        setClassRequests(response.data);
        // console.log("in class requests ",classRequests);
    }

    const userData = fetchedData;

    useEffect(()=>{
        fetchData();
        setAboutYou(userData?.tutorForm?.aboutYou)
        setAboutClass(userData?.tutorForm?.aboutClass)
    },[])



    // console.log("class requests ",classRequests);
    function notificationList(){    
            // console.log("Inside Class Request ",classRequests);
            let notifications = classRequests?.map((item,index)=>{
                return (
                    <div className="notification" onClick={(e)=>{handleActiveNotification(e,index)}} id={index}>
                            <TiPin/>
                            <span id='notification-name'>{item.studentId.name}</span>
                            <span id='show-notification-icon'><AiOutlineEye/></span>
                    </div>
                )
            })
            // console.log("notifi ",notifications);
            return(
                <div id="account-notification-div" className='sub-container-div'>
                    <div className='div-heading'>
                        NEW CLASS REQUESTS
                        <span id="notification-icon">
                            <MdNotificationsActive/>
                        </span>
                    </div>
                    
                    <div id='notification-listing-div'>
                        {notifications?.length>0?notifications:
                        <div style={{ position:"relative" ,top:"200px", textAlign:"center"}}>
                            NO NEW REQUESTS
                        </div>
                        }
                    </div>
                </div>
            )
    }

    function notificationDetailsPage(){
        console.log(currentNotification);
        return(
            <div id="notification-details-div" className='sub-container-div' style={{display:displayType}}>
                        <div className='row-div margin-buttom-div' id="crosss-div">
                            <RxCrossCircled size="1.4rem" color="red" className="cursor-type-pointer" onClick={()=>{closeNotificationDetailsPage()}}/>
                        </div>
                        <div className='row-div margin-buttom-div' >
                            <div className='display-type-flex width-100' id="request-details-div">
                                <div className='sub-container-div' id="student-profile-div">
                                        STUDENT PROFILE PIC
                                </div>
                                <div className='sub-container-div' id='content-of-request-div'>
                                    <div id='content-heading' className='request-content-sub-div'>
                                        {currentNotification?.studentId.name}
                                        <span style={{textTransform:"none"}}>Email: <span style={{fontWeight:"normal"}}>{currentNotification?.studentId?.email}</span></span>
                                    </div>
                                    <div id='request-content' className='request-content-sub-div'>
                                        {currentNotification?.intro}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row-div margin-buttom-div' id='class-options'>
                            <div className='display-type-flex' >
                                <div className='sub-container-div' id='requested-subjects-div'>
                                    <div className='div-heading'>
                                        SUBJECTS
                                    </div>
                                    <div className='content-div display-type-flex' id='requested-subjects'>
                                        {
                                            currentNotification?.subjects.map((subject)=>{
                                                return <span className='requested-subject-span'>{subject}</span>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='sub-container-div' id='requested-mode-div'>
                                    <div className='div-heading'>
                                        MODE OF LEARNING
                                    </div>
                                    <div className='content-div' id='requested-modes'>
                                        {
                                            currentNotification?.mode.map((modeType)=>{
                                                return <span className='requested-subject-span'>{modeType}</span>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row-div margin-buttom-div'>
                            <div className='width-100 display-type-flex' id='accept-reject-div'>
                                <div className='content-div'>
                                        <button className='accept-reject-button' id='accept-button'>ACCEPT</button>
                                        <button className='accept-reject-button' id='reject-button'>REJECT</button>
                                </div>  
                        </div>
                </div>
            </div>
        )
    }

    function activateNotification(notificationDivObj){
        if(notificationDivObj.className!=="notification"){
            notificationDivObj.closest(".notification").style.backgroundColor="lightgray";
            notificationDivObj.closest(".notification").style.borderLeft="5px solid purple";
            setActiveNotification(notificationDivObj.closest('.notification'));
        }
        else{
            notificationDivObj.style.backgroundColor="lightgray";
            notificationDivObj.style.borderLeft="5px solid purple";
            setActiveNotification(notificationDivObj);
        }
    }

    function deactivateNotification(){
        activeNotification.style.backgroundColor="rgb(236, 236, 236)";
        activeNotification.style.borderLeft="1px solid purple";
        setActiveNotification(null);
    }

    function closeNotificationDetailsPage(){
        console.log('clicked on cross');
        setDisplayType("none");
        deactivateNotification();
    }

    const handleActiveNotification = (event,index) =>{
        // console.log("Called");
        if(activeNotification == null)
            setDisplayType('flex');
                
        setCurrentNotification(classRequests[index]);

        if(activeNotification){
            if(activeNotification != event.target || activeNotification != event.target.closest('notification') ){
                deactivateNotification();
                activateNotification(event.target);
            }
        }
        else{
            activateNotification(event.target);
        }
            // console.log('current notification is-> ',currentNotification)
    }
    // console.log("data ",userData);

    //  setAboutClass(userData?.tutorForm?.aboutYou)

    const handleChangeText =(event)=> {
        switch(event.target.id){
            case "about":   setAboutYou(event.target.value); break;
            case "ads"  :   setAboutClass(event.target.value); break;
            default: console.log("default");
        }
    }

    const classRequest = [
        {
            tutorId:"",
            tutor:"Tutor Name",
            subjects:["GK","EVS","Maths"],
            language:["Assamse","Hindi"],
            mode:["Online"],
            fee:"200",
            status:"pending",
            // feedback:"",
        },
        {
            tutorId:"",
            tutor:"Tutor Name",
            subjects:["GK","EVS","Maths"],
            language:["Assamse","Hindi"],
            mode:["Offline"],
            fee:"200",
            status:"accepted",
            // feedback:"",
        },
        {
            tutorId:"",
            tutor:"Tutor Name",
            subjects:["GK","EVS","Maths"],
            language:["Assamse","Hindi"],
            mode:["Offline"],
            fee:"200",
            status:"rejected",
            // feedback:"",
        },
        {
            tutorId:"",
            tutor:"Tutor Name",
            subjects:["GK","EVS","Maths"],
            language:["Assamse","Hindi"],
            mode:["Offline"],
            fee:"200",
            status:"accepted",
            // feedback:"",
        },

    ]

    console.log("class request ",classRequest)
    return(
        <div id='home-page-root-div'>
            <div id="student-home-page-details-div">
                <div className='row-div' id="student-home-page-first-row-home-page">
                    <div id='welcome-greeting-div' className="sub-container-div">
                        <span id='welcome-msg'>Welcome</span>
                        <span id='user-name'>{userData.name.split(" ")[0]}
                            <span id='tutor-home-page-waving-hand'><MdWavingHand/></span>
                        </span>
                        
                    </div>
                    <div className='sub-container-div' id="date-time-block-div">
                        <DateTime/>
                    </div>
                </div>
                <div className='row-div' id='second-row'>
                    <div className='' id="class-request-listing-div">
                        <div id='student-page-class-request-div-heading'>
                            Class Requests
                        </div>
                        <ListingItems pageheading={""} receivedData={classRequest}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;