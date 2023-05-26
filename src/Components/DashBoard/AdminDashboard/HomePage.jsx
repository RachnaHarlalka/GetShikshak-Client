import '../dashboardDetails.css';
import './AdminhomePage.css';
import {MdWavingHand} from 'react-icons/md';
import DateTime from '../DateTime';
import {MdNotificationsActive} from 'react-icons/md';
import {AiFillStar} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import EditButton from '../EditButton';
import {TiPin} from 'react-icons/ti';
import {AiOutlineEye} from 'react-icons/ai';
import {RxCrossCircled} from 'react-icons/rx';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { authTokenAtom } from '../../../Atom';
// import name from '../../../assets/HeroPic.png'

function HomePage(props){
    console.log("Homepage Rendered");
    const studentCount=props.students.length;
    const authToken = useRecoilValue(authTokenAtom)
    const tutorCount=props.tutors.length;
    const admin=props.admin;
    console.log(admin && admin[0]?.name)
    // console.log("admin",props.admin);
    // console.log(props.students.length)

    const [displayType, setDisplayType] = useState("none");
    const [currentNotification, setCurrentNotification] = useState(null);
    const [verificationRequests,setVerificationRequest] = useState(null);
    const [activeNotification, setActiveNotification] = useState(null);

    const fetchData= async()=>{
        let response = await axios(
            {
                url:"http://localhost:3000/dashboard/verificationrequest",
                method:"GET",
                headers:{
                    "Authorization": `Bearer ${authToken}`
                }
            }
        )
        console.log("In Response ",response.data.tutors);
        setVerificationRequest(response.data.tutors);
        // console.log("in class requests ",classRequests);
    }

    // const userData = fetchedData;

    useEffect(()=>{
        fetchData();
    },[])

    // const verificationRequests = [
    //     {
    //         id:"12345",
    //         name:"New Tutor",
    //         email:"newtutor@gmail.com",
    //         role:"tutor",
    //         tutorForm:{
    //                 subjects:["Eng","Hindi","Maths"],
    //                 mode:["online", "offline","can travel"],
    //                 language:["English","Assamese","Hindi","bengali"],
    //                 aboutClass:"This is about class",
    //                 aboutYou:"This is about You",
    //                 city:"Assam",
    //                 phone:"9872171717",
    //                 rate:"1000",
    //                 title:"This is ad title"
    //         },
    //         profilePic:""
    //     },
    //     {
    //         id:"12345",
    //         name:"New Tutor2",
    //         email:"newtutor2@gmail.com",
    //         role:"tutor",
    //         tutorForm:{
    //                 subjects:["Maths"],
    //                 mode:["can travel"],
    //                 language:["English"],
    //                 aboutClass:"This is about class",
    //                 aboutYou:"This is about You",
    //                 city:"Assam",
    //                 phone:"9872171717",
    //                 rate:"1000",
    //                 title:"This is ad title"
    //         },
    //         profilePic:""
    //     },
    // ]

   
    const handleVerificationRequest=async(status)=>{
        try{
            const response = await axios({
                url:"http://localhost:3000/admin/updateverificationrequest",
                method:"PATCH",
                data:{
                    updatedStatus:status,
                    reqId:currentNotification._id
                },
                headers:{
                    Authorization:`Bearer ${authToken}`
                }
            })
            console.log("response",response.data.updatedVerificationrequest);
            closeNotificationDetailsPage();
            const updatedVerificationRequest=verificationRequests.filter((req)=>{
                return req._id!==currentNotification._id;
            })
            setVerificationRequest(updatedVerificationRequest);
        }
        catch(err){

        }
        console.log("status",status);
        console.log("curren",currentNotification);
    }
    
    // console.log("currentNotion",currentNotification)

    function notificationList(){    
        // console.log("Inside Class Request ",classRequests);
        const notifications = verificationRequests?.map((item,index)=>{
            return (
                <div className="notification" onClick={(e)=>{handleActiveNotification(e,index)}} id={index}>
                        <TiPin/>
                        <span id='notification-name'>{item.name}</span>
                        <span id='show-notification-icon'><AiOutlineEye/></span>
                </div>
            )
        })

        // console.log("notifi ",notifications);
        return(
            <div id="account-notification-div" className='admin-sub-container-div'>
                <div className='div-heading'>
                    {/* NOTIFICATIONS */}
                    NEW TUTOR REQUEST
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
    
        return(
            <div id="notification-details-div" className='admin-sub-container-div'  style={{display:displayType}}>
                    <div className='row-div margin-buttom-div' id="crosss-div">
                            <RxCrossCircled size="1.4rem" color="red" className="cursor-type-pointer" onClick={()=>{closeNotificationDetailsPage()}}/>
                    </div>
                    <div style={{overflowY:"auto"}}>
                        <div className='row-div margin-buttom-div' >
                            <div className='display-type-flex width-100' id="request-details-div">
                                <div className='' id="student-profile-div">
                                    <div id='profile-pic-section'>
                                        <div id='profile-pic' style={{width:"100%"}}>
                                            <img id="profile-image" alt="image" src={`http://localhost:3000/assets/${currentNotification?.profilePic}`}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='admin-sub-container-div' style={{width:"78%"}}>
                                    <div className='div-heading'>
                                        PERSONAL DETAILS
                                    </div>
                                    <div className='content-div justify-center'>
                                        <div className='col-div personal-details-row-div'>
                                            <div className='details-item'>
                                                <span className='label-div'>ID:</span>
                                                <span>{currentNotification?._id}</span>
                                            </div>
                                            <div className='details-item'>
                                                <span className='label-div'>Name:</span>
                                                <span>{currentNotification?.name}</span>
                                            </div>
                                            <div className='details-item'>
                                                <span className='label-div'>Email:</span>
                                                <span>{currentNotification?.email}</span>
                                            </div>
                                        </div>
                                        <div className='col-div personal-details-row-div'>
                                            <div className='details-item'>
                                                <span className='label-div'>City:</span>
                                                <span>{currentNotification?.tutorForm?.city}</span>
                                            </div>
                                            <div className='details-item'>
                                                <span className='label-div'>Phone:</span>
                                                <span>{currentNotification?.phone}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row-div margin-buttom-div justify-center' >
                                <div className='admin-sub-container-div w-1/2'>
                                    <div id='content-heading' className='request-content-sub-div'>
                                        About Tutor                                        
                                    </div>
                                    <div id='request-content' className='request-content-sub-div'>
                                        {currentNotification?.tutorForm?.aboutYou}
                                    </div>
                                </div>
                                <div className='admin-sub-container-div w-1/2'>
                                    <div id='content-heading' className='request-content-sub-div'>
                                        About Class                                        
                                    </div>
                                    <div id='request-content' className='request-content-sub-div'>
                                        {currentNotification?.tutorForm?.aboutClass}
                                    </div>
                                </div>
                                <div className='admin-sub-container-div w-1/2'>
                                    <div id='content-heading' className='request-content-sub-div'>
                                        Ad Title                                        
                                    </div>
                                    <div id='request-content' className='request-content-sub-div'>
                                        {currentNotification?.tutorForm?.title}
                                    </div>
                                </div>
                        </div>
                        <div className='row-div margin-buttom-div justify-center'>
                            <div className='admin-sub-container-div w-1/2'>
                                <div className='div-heading'>
                                    SUBJECTS
                                </div>
                                <div className='content-div display-type-flex' id='requested-subjects'>
                                    {
                                        currentNotification?.tutorForm?.subjects.map((subject)=>{
                                            return <span className='requested-subject-span'>{subject}</span>
                                        })
                                    }
                                </div>
                            </div>
                            <div className='admin-sub-container-div w-1/2'>
                                <div className='div-heading'>
                                    MODE OF LEARNING
                                </div>
                                <div className='content-div' id='requested-modes'>
                                    {
                                        currentNotification?.tutorForm?.mode.map((modeType)=>{
                                            return <span className='requested-subject-span'>{modeType}</span>
                                        })
                                    }
                                </div>
                            </div>
                            <div className='admin-sub-container-div w-1/2'>
                                <div className='div-heading'>
                                    LANGUAGES    
                                </div>
                                <div className='content-div flex-wrap-class'>
                                    {
                                        currentNotification?.tutorForm?.language.map((lang)=>{
                                            return <span className='requested-subject-span'>{lang}</span>
                                        })
                                    }
                                </div>
                            </div>
                            <div className='admin-sub-container-div w-1/2'>
                                <div className='div-heading'>
                                    RATE  
                                </div>
                                <div className='content-div' id='rate-display-div'>
                                    <span style={{fontSize:"large"}}>
                                    ₹<span style={{fontWeight:"bold"}}>{currentNotification?.tutorForm?.rate}</span>/hr
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='admin-sub-container-div'>
                        <div className='' id="document-div">
                            <div className='div-heading'>
                                    DOCUMENTS
                            </div>
                            <div style={{display:"flex",justifyContent:"center"}}>
                                <div className='single-document' id='id-proof-div'>
                                    <div className='div-heading' style={{ border:"none"}}>
                                        ID Proof
                                    </div>
                                    <div className=''>
                                        <div className='tutor-request-document-show-div'>
                                            <img className='w-64 h-[20rem] object-cover' src={`http://localhost:3000/assets/${currentNotification?.tutorForm?.identity}`} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='single-document' id='qualification-proof-div'>
                                    <div className='div-heading' style={{justifyContent:"flex-start", border:"none"}}>
                                        Qualification Document
                                        </div>
                                        <div className=''>
                                            <div className='tutor-request-document-show-div'>
                                            <img className='w-64 h-[20rem] object-cover' src={`http://localhost:3000/assets/${currentNotification?.tutorForm?.lastEducationalCertificate}`} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                        
                    <div className='row-div' style={{padding:"10px 10px"}}>
                        <div className='width-100 display-type-flex' id='accept-reject-div'>
                            <div className='content-div'>
                                    <button className='accept-reject-button' id='accept-button' onClick={()=>{
                                        handleVerificationRequest("accepted")
                                    }}>ACCEPT</button>
                                    <button className='accept-reject-button' id='reject-button' onClick={()=>{
                                        handleVerificationRequest("rejected")
                                    }}>REJECT</button>
                                    <button className='accept-reject-button' id='revert-button' onClick={()=>{
                                        handleVerificationRequest("reverted")
                                    }}>REVERT</button>

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
                
        setCurrentNotification(verificationRequests[index]);

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


    return(
        <div id='admin-home-page-root-div'>
            <div id="admin-home-page-details-div">
                <div className='row-div mb-24 justify-between'>
                    <div id='welcome-greeting-div' className="admin-sub-container-div">
                        <span id='welcome-msg'>Welcome</span>
                        <span id='user-name'>{admin && admin[0]?.name} <span id='waving-hand'><MdWavingHand/></span></span>
                    </div>
                    <div className='admin-sub-container-div' id="date-time-block-div">
                            <DateTime/>
                    </div>
                </div>
                <div className='row-div flex justify-center'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 w-[50vw] h-[25vh]'>
                        <div className='flex flex-col justify-center items-center shadow-md bg-green-100 p-4'>
                            <span className='font-bold text-xl'>Tutor Count</span>
                            <span className='font-bold text-6xl my-4'>{tutorCount}</span>
                        </div>
                        <div className='flex flex-col justify-center items-center shadow-md bg-green-100'>
                            <span className='font-bold text-xl'>Student Count</span>
                            <span className='font-bold text-6xl my-4'>{studentCount}</span>
                        </div>
                        {/* <div className='flex flex-col justify-center items-center shadow-md bg-green-100 w-[50vw]'>
                            <span className='font-bold text-xl'>New Tutor Verification Request</span>
                            <span className='font-bold text-6xl my-4'>{verificationRequests?.length}</span>
                        </div> */}
                    </div>
                </div>
                {currentNotification ?notificationDetailsPage():console.log("nothing")}
            </div>
            {notificationList()}
        </div>
    )
}

export default HomePage;