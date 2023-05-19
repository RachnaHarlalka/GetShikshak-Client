import './dashboardDetails.css';
import './homePage.css';
import {MdWavingHand} from 'react-icons/md';
import {RiShieldStarFill} from  'react-icons/ri'
import {AiFillStar,AiOutlineEye} from 'react-icons/ai';
// import {IoCloseCircleOutline} from 'react-icons/io';
import {HiStar} from 'react-icons/hi';
import {TiPin} from 'react-icons/ti';
import {RxCrossCircled} from 'react-icons/rx';
import {GoPin} from 'react-icons/go';
import {MdNotificationsActive,MdOutlineStar} from 'react-icons/md';
import { useEffect, useState } from 'react';
import EditButton from './EditButton';
import { FcDisplay } from 'react-icons/fc';

function HomePage(props){
    // console.log("Homepage Rendered and the pros passed ",props);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [aboutYou , setAboutYou] = useState("");
    const [aboutClass , setAboutClass] = useState("");
    const [displayType, setDisplayType] = useState("none");
    const [currentNotification, setCurrentNotification] = useState(null);
    const milliseconds = currentDateTime.getSeconds()*1000;
    // console.log("mili ",milliseconds);
    console.log("mili ",currentDateTime.getSeconds());

    // const intervalId = setTimeout(()=>{
    //     setCurrentDateTime(new Date());
    //     console.log("Time Updated");
    // },(60000-milliseconds));
    // console.log("TimeOut ID: ",intervalId);

    const month = months[currentDateTime.getMonth()];
    const date = currentDateTime.getDate();
    const day = days[currentDateTime.getDay()];
    const hour = Math.ceil(currentDateTime.getHours()<=12?(currentDateTime.getHours()==0)?12:currentDateTime.getHours()%12: currentDateTime.getHours()%12);
    const minute = currentDateTime.getMinutes();
    const timeTag = currentDateTime.getHours<12? "AM" : "PM";

    const requestArr = [
        {
            name:"Student Name 1",
            requestMsg: "This is my request msg",
            subjects:["Evs","Social Science","Maths"],
            mode:["online","offline",'Can Travel'],
        },
        {
            name:"Student Name 2",
            requestMsg: "This is my request msg",
            subjects:["Evs","Social Science","Maths"],
            mode:["online","offline",'Can Travel'],
        },
        {
            name:"Student Name 3",
            requestMsg: "This is my request msg",
            subjects:["Evs","Social Science","Maths"],
            mode:["online","offline",'Can Travel'],
        },
        {
            name:"Student Name 4",
            requestMsg: "This is my request msg",
            subjects:["Evs","Social Science","Maths"],
            mode:["online","offline",'Can Travel'],
        },
    ]

    const handleDisplayType = (event,index) =>{
        if(displayType== "none"){
            setDisplayType("flex");
            setCurrentNotification(requestArr[index]);
            if(event.target.className!=="notification"){
                event.target.closest(".notification").style.backgroundColor="lightgray";
                event.target.closest(".notification").style.borderLeft="5px solid purple";
            }
            else{
                event.target.style.backgroundColor="lightgray";
                event.target.style.borderLeft="5px solid purple";
            }
            
        }
        else{
            setDisplayType("none");
            if(event.target.className!=="notification"){
                event.target.closest(".notification").style.backgroundColor="rgb(236, 236, 236)";
                event.target.closest(".notification").style.borderLeft="1px solid purple";
            }
            else{
                event.target.style.backgroundColor="rgb(236, 236, 236)";
                event.target.style.borderLeft="1px solid purple";
            }
        }
    }

    const generateNotificationList=()=>{
        const notifications = requestArr.map((item,index)=>{
            return (
                <div className="notification" onClick={(e)=>{handleDisplayType(e,index)}} id={index}>
                        <TiPin/>
                        <span id='notification-name'>{item.name}</span>
                        <span id='show-notification-icon'><AiOutlineEye/></span>
                </div>
            )
        })

        console.log("notifi ",notifications);
        return notifications;
    }

    console.log("current notification",currentNotification);

    const generateNotificationRequestDetails=()=>{
        console.log("inside generatenotificiondetails");
        return(
            <div id="notification-details-div" className='sub-container-div' style={{display:displayType}}>
                    <div className='row-div margin-buttom-div' id="crosss-div">
                        <RxCrossCircled size="1.4rem" color="red" className="cursor-type-pointer" onClick={(e)=>{handleDisplayType(e)}}/>
                    </div>
                    <div className='row-div margin-buttom-div' >
                        <div className='display-type-flex width-100' id="request-details-div">
                            <div className='sub-container-div' id="student-profile-div">
                                    STUDENT PROFILE PIC
                            </div>
                            <div className='sub-container-div' id='content-of-request-div'>
                                <div id='content-heading' className='request-content-sub-div'>
                                    {currentNotification.name}
                                    
                                </div>
                                <div id='request-content' className='request-content-sub-div'>
                                    {currentNotification.requestMsg}
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
                                    <span className='requested-subject-span'>Subject 1</span>
                                    <span className='requested-subject-span'>Subject 2</span>
                                    <span className='requested-subject-span'>Subject 3</span>
                                    <span className='requested-subject-span'>Subject 4</span>
                                </div>
                            </div>
                            <div className='sub-container-div' id='requested-mode-div'>
                                <div className='div-heading'>
                                    MODE OF LEARNING
                                </div>
                                <div className='content-div'>
                                    <span className='requested-subject-span'>Online</span>
                                    <span className='requested-subject-span'>Offline</span>
                                    <span className='requested-subject-span'>Can Travel</span>
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

    
    const userData = props?props.fetchedData:null;
    // console.log("data ",userData);

    //  setAboutClass(userData?.tutorForm?.aboutYou)

    function getMappedLi(arr){
        const newArr=arr.map((item)=>{
            return (<li>{item}</li>);
        })
        return newArr;
    }

    const handleChangeText =(event)=> {
        switch(event.target.id){
            case "about":   setAboutYou(event.target.value); break;
            case "ads"  :   setAboutClass(event.target.value); break;
            default: console.log("default");
        }
    }

    

    useEffect(()=>{
        setAboutYou(userData?.tutorForm?.aboutYou)
        setAboutClass(userData?.tutorForm?.aboutClass)
    },[props])

    return(
        <div id='home-page-root-div'>
            <div id="home-page-details-div">
                <div className='row-div mb-12'>
                    <div id='welcome-greeting-div' className="sub-container-div">
                        <span id='welcome-msg'>Welcome</span>
                        <span id='user-name'>{userData.name}<span id='waving-hand'><MdWavingHand/></span></span>
                    </div>
                    <div className='sub-container-div' id="rating-div">
                        <div id='rating-outer-div'>
                            <div id='rating-label-div'>
                                Class Rating
                            </div>
                            <div id='user-rating-tag'>
                                <div className='star'><MdOutlineStar/></div>
                                <span id="rating">4.5</span>
                            </div>
                        </div>
                    </div>
                    <div className='sub-container-div' id="date-time-block-div">
                        <div className='date-time'>
                            <span className='date'>{day},</span>
                            <span id='date'>{date}</span>
                            <span id='date'>{month}</span>
                        </div>
                        <div className='date-time'>
                            <span id='time'>{hour}</span>:
                            <span id='time'>{minute}</span>
                            <span id='time'>{timeTag}</span>
                        </div>
                        {/* <div className='date-time'>
                            {time.getTime()}
                        </div> */}
                    </div>
                </div>
                <div className='row-div' id='second-row'>
                    <div className='sub-container-div w-1/2'>
                        <div className='div-heading'>
                            ABOUT YOU
                            <div className='edit-button-div' >
                                {
                                    <EditButton inputBoxId="about" path="updateaboutyou" newData={aboutYou}/>
                                }
                            </div>
                        </div>
                        <div className='content-div medium-content-div'>
                            <textarea 
                            id="about"
                            onChange={handleChangeText}
                            className='textarea-input-box' 
                            placeholder="Type here ....." 
                            disabled 
                            value={aboutYou}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className='sub-container-div w-1/2'>
                        <div className='div-heading'>
                            YOUR ADS
                            <div className='edit-button-div' >
                                <EditButton inputBoxId="ads" path="updateaboutclass" newData={aboutClass}/>
                            </div>
                        </div>
                        <div className='content-div medium-content-div'>
                            <textarea 
                            id="ads" 
                            onChange={handleChangeText}
                            className='textarea-input-box' 
                            placeholder="Type here ....." 
                            disabled 
                            value={aboutClass}>

                            </textarea>
                        </div>
                    </div>
                </div>
                <div className='row-div'>
                        <div className='sub-container-div' id='language-div'>
                            <div className='div-heading'>
                                LANGUAGES    
                                <div className="edit-button-div">
                                    <EditButton/>
                                </div>
                            </div>
                            <div className='content-div'>
                                <ul>
                                    {userData?getMappedLi(userData.tutorForm.language):""}
                                </ul>
                            </div>
                        </div>
                        <div className='sub-container-div' id='subjects-div'>
                            <div className='div-heading'>
                                SUBJECTS 
                                <div className="edit-button-div">
                                    <EditButton/>
                                </div>  
                            </div>
                            <div className='content-div'>
                                <ul>
                                    {/* <li>DSA</li>
                                    <li>C++</li> */}
                                    {userData?getMappedLi(userData.tutorForm.subjects):""}
                                </ul>
                            </div>
                        </div>
                        <div className='sub-container-div' id='subjects-div'>
                            <div className='div-heading'>
                                RATE 
                                <div className="edit-button-div">
                                    <EditButton inputBoxId="rate"/>
                                </div>  
                            </div>
                            <div className='content-div'>
                                <input type="text" className='dashboard-input-box' id="rate" value={userData?userData.tutorForm.rate:""}/>
                            </div>
                        </div>
                        <div className='sub-container-div' id='subjects-div'>
                            <div className='div-heading'>
                                TEACHING MODE
                                <div className="edit-button-div">
                                    <EditButton inputBoxId="mode-of-teach"/>
                                </div>  
                            </div>
                            <div className='content-div'>
                                <input type="text" className='dashboard-input-box' id="mode-of-teach" placeholder="Type here ....."/>
                            </div>
                        </div>
                </div>
                {currentNotification ?generateNotificationRequestDetails():console.log("Clicked in Notification")};
            </div>

            <div id="account-notification-div" className='sub-container-div'>
                <div className='div-heading'>
                    {/* NOTIFICATIONS */}
                    NEW CLASS REQUESTS
                    <span id="notification-icon">
                        <MdNotificationsActive/>
                    </span>
                    
                </div>

                <div id='notification-listing-div'>
                    {generateNotificationList()}
                </div>
            </div>
        </div>
    )
}

export default HomePage;