import './AdminhomePage.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import {MdWavingHand,MdZoomOutMap} from 'react-icons/md';
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

function HomePage(props) {
  console.log("Homepage Rendered");
  const studentCount = props?.students?.length;
  const authToken = useRecoilValue(authTokenAtom);
  const tutorCount = props?.tutors?.length;
  const currentUser = props?.fetchedUser;
  console.log(currentUser && currentUser[0]?.name);
  // console.log("currentUser",props.admin);
  // console.log(props.students.length)

    const [displayType, setDisplayType] = useState("none");
    const [currentNotification, setCurrentNotification] = useState(null);
    const [verificationRequests,setVerificationRequest] = useState(null);
    const [activeNotification, setActiveNotification] = useState(null);
    const [open, setOpen] =useState(false);
    const [revertMsg, setRevertMsg] = useState("");
    
    // React.useEffect(()=>{
    //     setOpen(displayState);
    // },[displayState])
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '46%',
        transform: 'translate(-40%, -70%)',
        width: 500,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        // boxShadow: 24,
        p: 4,
      };


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
        // console.log("In Response ",response.data.tutors);
        setVerificationRequest(response.data.tutors);
        // console.log("in class requests ",classRequests);
    }

  // const userData = fetchedData;

    useEffect(()=>{
        fetchData();
    },[])
   
    const handleVerificationRequest=(status)=>{
        if(status === "reverted"){
            // setShowButtons("none");
            console.log("Clicked on revert")
            setOpen(true);
        }
        else{
            sendVerificationUpdate(status);
        }
        
    }

    function handleSendRevertMsg(){
        console.log("Revert Msg ",revertMsg);
        sendVerificationUpdate("reverted");
        setOpen(false);
    }

    function handleClose(){
        setOpen(false);
    }

    const sendVerificationUpdate = async (status) =>{
        try{
            const response = await axios({
                url:"http://localhost:3000/admin/updateverificationrequest",
                method:"PATCH",
                data:status === "reverted"?
                    {
                      updatedStatus:status,
                      revertMsg: revertMsg,
                      reqId:currentNotification._id
                    } 
                    :
                    {
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
  useEffect(() => {
    fetchData();
  }, []);

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

  const handleVerificationRequest = async (status) => {
    try {
      const response = await axios({
        url: "http://localhost:3000/admin/updateverificationrequest",
        method: "PATCH",
        data: {
          updatedStatus: status,
          tutorId: currentNotification._id,
        },
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      if (response.status === 400) {
        enqueueSnackbar(response?.data?.error, { variant: "error" });
      }
      if (response.status === 201) {
        console.log("response", response?.data?.updatedVerificationrequest);
        enqueueSnackbar(`Request ${status} successfully`, {
          variant: "success",
        });
        closeNotificationDetailsPage();
        const updatedVerificationRequest = verificationRequests.filter(
          (req) => {
            return req._id !== currentNotification._id;
          }
        );
        setVerificationRequest(updatedVerificationRequest);
      }
    } catch (err) {
      enqueueSnackbar(response?.data?.error, { variant: "error" });
    }
    console.log("status", status);
    console.log("curren", currentNotification);
  };

  // console.log("currentNotion",currentNotification)

  function notificationList() {
    // console.log("Inside Class Request ",classRequests);
    const notifications = verificationRequests?.map((item, index) => {
      return (
        <div
          className="notification"
          onClick={(e) => {
            handleActiveNotification(e, index);
          }}
          id={index}
        >
          <TiPin />
          <span id="notification-name">{item.name}</span>
          <span id="show-notification-icon">
            <AiOutlineEye />
          </span>
        </div>
      );
    });

    // console.log("notifi ",notifications);
    return (
      <div id="account-notification-div" className="admin-sub-container-div">
        <div className="div-heading">
          {/* NOTIFICATIONS */}
          NEW TUTOR REQUEST
          <span id="notification-icon">
            <MdNotificationsActive />
          </span>
        </div>

                <div id='notification-listing-div'>
                    {notifications?.length>0?notifications:
                        <div style={{ position:"relative" ,top:"200px", textAlign:"center",border:"none",backgroundColor:"transparent"}}>
                            NO NEW REQUESTS
                        </div>
                    }
                </div>
            </div>
        )
    }

    function modalBox(){
        return(
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center",marginBottom:"20px"}}>
                    Verification Request Revert Reason
                    {/* <span style={{fontSize:"small",display:"block"}}>Share your experience regarding this class</span> */}
                </Typography>
                <Box 
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                    >
                    <TextField fullWidth label="Write reason here" id="fullWidth"
                        multiline
                        rows={7} 
                        onChange={(e)=>{
                            setRevertMsg(e.target.value)
                        }}
                    />
                    <div className='flex justify-end py-5'>
                        <Button variant="contained" sx={{ padding:"5px 10px", backgroundColor:"var(--primary-color)", marginRight:"20px"}} onClick={handleClose} >CLOSE</Button>
                        <Button variant="contained" sx={{ padding:"5px 10px", backgroundColor:"var(--primary-color)"}} onClick={(e)=>{handleSendRevertMsg()}}>SEND REVERT REASON</Button>
                    </div>
                </Box>
                </Box>
            </Modal>
        )
    }

    function notificationDetailsPage(){
    
        return(
            <div id="notification-details-div" className='admin-sub-container-div'  style={{display:displayType}}>
                    <div className='row-div margin-buttom-div' id="crosss-div">
                            <RxCrossCircled size="1.4rem" color="red" className="cursor-type-pointer" onClick={()=>{closeNotificationDetailsPage()}}/>
                    </div>
                    <div style={{overflowY:"auto",padding:"0px 5px"}}>
                        <div className='row-div margin-buttom-div' >
                            <div className='display-type-flex width-100' id="request-details-div">
                                <div className='' id="tutor-profile-div">
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
                        
                <div className='row-div' style={{padding:"10px 10px"}} >
                    <div className='width-100 display-type-flex' id='accept-reject-div' style={{display:"flex"}}>
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
                {modalBox()}
                
            </div>
        )
    }

  function activateNotification(notificationDivObj) {
    if (notificationDivObj.className !== "notification") {
      notificationDivObj.closest(".notification").style.backgroundColor =
        "lightgray";
      notificationDivObj.closest(".notification").style.borderLeft =
        "5px solid purple";
      setActiveNotification(notificationDivObj.closest(".notification"));
    } else {
      notificationDivObj.style.backgroundColor = "lightgray";
      notificationDivObj.style.borderLeft = "5px solid purple";
      setActiveNotification(notificationDivObj);
    }
  }

  function deactivateNotification() {
    activeNotification.style.backgroundColor = "rgb(236, 236, 236)";
    activeNotification.style.borderLeft = "1px solid purple";
    setActiveNotification(null);
  }

    function closeNotificationDetailsPage(){
        setDisplayType("none");
        deactivateNotification();
    }

  const handleActiveNotification = (event, index) => {
    // console.log("Called");
    if (activeNotification == null) setDisplayType("flex");

    setCurrentNotification(verificationRequests[index]);

    if (activeNotification) {
      if (
        activeNotification != event.target ||
        activeNotification != event.target.closest("notification")
      ) {
        deactivateNotification();
        activateNotification(event.target);
      }
    } else {
      activateNotification(event.target);
    }
    // console.log('current notification is-> ',currentNotification)
  };
  // console.log("data ",userData);

  //  setAboutClass(userData?.tutorForm?.aboutYou)

  const handleChangeText = (event) => {
    switch (event.target.id) {
      case "about":
        setAboutYou(event.target.value);
        break;
      case "ads":
        setAboutClass(event.target.value);
        break;
      default:
        console.log("default");
    }
  };

  return (
    <div id="admin-home-page-root-div">
      <div id="admin-home-page-details-div">
        <div className="row-div mb-24 justify-between">
          <div id="welcome-greeting-div" className="admin-sub-container-div">
            <span id="welcome-msg">Welcome</span>
            <span id="user-name">
              {currentUser && currentUser?.name}{" "}
              <span id="waving-hand">
                <MdWavingHand />
              </span>
            </span>
          </div>
          <div className="admin-sub-container-div" id="date-time-block-div">
            <DateTime />
          </div>
        </div>
        <div className="row-div flex justify-center">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 w-[50vw] h-[25vh]">
            <div className="flex flex-col justify-center items-center shadow-md bg-green-100 p-4">
              <span className="font-bold text-xl">Tutor Count</span>
              <span className="font-bold text-6xl my-4">{tutorCount}</span>
            </div>
            <div className="flex flex-col justify-center items-center shadow-md bg-green-100">
              <span className="font-bold text-xl">Student Count</span>
              <span className="font-bold text-6xl my-4">{studentCount}</span>
            </div>
            {/* <div className='flex flex-col justify-center items-center shadow-md bg-green-100 w-[50vw]'>
                            <span className='font-bold text-xl'>New Tutor Verification Request</span>
                            <span className='font-bold text-6xl my-4'>{verificationRequests?.length}</span>
                        </div> */}
                    </div>
                </div>
                {currentNotification ?notificationDetailsPage():null}
            </div>
            {notificationList()}
        </div>
    )
}

export default HomePage;
