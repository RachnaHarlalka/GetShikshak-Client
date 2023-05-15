import './dashboardDetails.css';
import './homePage.css';
import {MdWavingHand} from 'react-icons/md';
import {AiFillStar} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import EditButton from './EditButton';

function WelcomePage(props){
    console.log("Homepage Rendered");

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const newDate= new Date();
    const year = newDate.getFullYear();
    const month = months[newDate.getMonth()];
    const date = newDate.getDate();
    const day = days[newDate.getDay()];
    const hour = Math.ceil(newDate.getHours()/4);
    const minute = newDate.getMinutes();
    const timeTag = newDate.getHours<12? "AM" : "PM";

    const [time, setTime] = useState(new Date());
    const [aboutYou , setAboutYou] = useState("");
    const [aboutClass , setAboutClass] = useState("");

    // setInterval(()=>{
    //     setTime(new Date());
    // },9999);

    
    const userData = props?props.fetchedData.user:null;
    //console.log("data ",userData);

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
        setAboutYou(props.fetchedData?.user?.tutorForm?.aboutYou)
        setAboutClass(props.fetchedData?.user?.tutorForm?.aboutClass)
    },[props])

    return(
        <div id='home-page-root-div'>
            <div id="home-page-details-div">
                <div className='row-div mb-12'>
                    <div id='welcome-greeting-div' className="sub-container-div">
                        <span id='welcome-msg'>Welcome</span>
                        <span id='user-name'>Tutor Name<span id='waving-hand'><MdWavingHand/></span></span>
                    </div>
                    <div className='sub-container-div' id="rating-div">
                        <div id='user-rating-tag'> 4.5
                            <div className='star'><AiFillStar/></div>
                        </div>
                    </div>
                    <div className='sub-container-div' id="date-time-block-div">
                        <div className='date-time'>
                            <span className='date'>{days[time.getDay()]},</span>
                            <span id='date'>{time.getDate()}</span>
                            <span id='date'>{months[time.getMonth()]}</span>
                        </div>
                        <div className='date-time'>
                            <span id='time'>{time.getHours()<=12?(time.getHours()==0)?12:time.getHours()%12: time.getHours()%12}</span>:
                            <span id='time'>{time.getMinutes()}</span>
                            <span id='time'>{time.getHours()<12? "AM" : "PM"}</span>
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
            </div>
            <div id="account-notification-div" className='sub-container-div'>
                <div className='div-heading'>
                    NOTIFICATIONS
                </div>

                <div id='notification-listing-div'>
                    <ul>
                        <li className='notification'>New Notification</li>
                        <li className='notification'>New Notification 2</li>
                        <li className='notification'>New Notification 3</li>
                        <li className='notification'>New Notification 4</li>
                         
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;