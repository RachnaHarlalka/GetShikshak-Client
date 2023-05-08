import { useState } from 'react';
import './style.css'
import {FcManager} from 'react-icons/fc';
import ProfileDetails from './ProfileDetails';
import HomePage from './HomePage';

function DashBoard(){
    
    const [pageId,setPageId]=useState(0);

    function handleClick(id){
        console.log(id);
        switch(id){
            case "0": setPageId(0);break;
            case "1": setPageId(1);break;
            case "2": setPageId(2);break;
            default: console.log("Default of Handle Click");
        }
    }

    function renderPage(id) {
        switch(id) {
            case 0: {console.log("clicked profile"); return <HomePage/>};
            case 1: {console.log("clicked profile"); return <ProfileDetails/>};
            case 2: {console.log("clicked Student"); return <StudentDetails/>};
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
                                <FcManager/>
                            </div>
                        </div>
                        <div id='profile-info-section'>
                            <p id='user-name'>Tutor Name</p>
                            <div id='user-rating-tag'><span className='star'>★</span> 4.5</div>
                            <div>
                                <button className='btn-class' id='profile-edit-btn'>Edit</button>
                            </div>
                        </div>
                    </div>

                    <div id="dashboard-menu-section">
                        <div id='dashboard-menu-top-div'>
                            <button className='dashboard-menu-options' onClick={(e)=>{handleClick(e.target.id)}} id={0}>
                                Home Section
                                {/* <Link to="/">Profile Section</Link> */}
                            </button>
                            <button className='dashboard-menu-options' onClick={(e)=>{handleClick(e.target.id)}} id={1}>
                                Profile Section
                                {/* <Link to="/">Profile Section</Link> */}
                            </button>
                            <button className='dashboard-menu-options' onClick={(e)=>{handleClick(e.target.id)}} id={2}>
                                Students
                            </button>
                            <button className='dashboard-menu-options'>
                                Classes
                            </button>
                            <button className='dashboard-menu-options'>
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

export default DashBoard;