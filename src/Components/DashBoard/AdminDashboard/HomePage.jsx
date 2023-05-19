import '../dashboardDetails.css';
import '../homePage.css';
import {MdWavingHand} from 'react-icons/md';
import {AiFillStar} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import EditButton from '../EditButton';

function HomePage(props){
    console.log("Homepage Rendered");
    const studentCount=props.students.length;
    const tutorCount=props.tutors.length;
    const admin=props.admin;
    console.log(admin && admin[0]?.name)
    // console.log("admin",props.admin);
    // console.log(props.students.length)

    return(
        <div id='home-page-root-div'>
            <div id="home-page-details-div">
                <div className='row-div mb-12'>
                    <div id='welcome-greeting-div' className="sub-container-div">
                        <span id='welcome-msg'>Welcome</span>
                        <span id='user-name'>{admin && admin[0]?.name}<span id='waving-hand'><MdWavingHand/></span></span>
                    </div>
                </div>
                <div className='row-div flex justify-center'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 w-[50vw] h-[25vh]'>
                        <div className='flex flex-col justify-center items-center shadow-md bg-green-100'>
                            <span className='font-bold text-xl'>Tutor Count</span>
                            <span className='font-bold text-6xl my-4'>{tutorCount}</span>
                        </div>
                        <div className='flex flex-col justify-center items-center shadow-md bg-green-100'>
                        <span className='font-bold text-xl'>Student Count</span>
                            <span className='font-bold text-6xl my-4'>{studentCount}</span>
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

export default HomePage;