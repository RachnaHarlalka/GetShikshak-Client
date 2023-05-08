import './dashboardDetails.css'
import './homePage.css'
import {MdWavingHand} from 'react-icons/md'

function WelcomePage(){
    return(
        <div id='home-page-root-div'>
            <div id="home-page-details-div">
                <div id='welcome-greeting-div' className="sub-container-div">
                    <span id='welcome-msg'>Welcome</span>
                    <span id='user-name'>Tutor Name<span id='waving-hand'><MdWavingHand/></span></span>
                </div>
                <div className='sub-container-div'>
                    Another sub container Div
                </div>
            </div>
            <div id="account-notification-div" className='sub-container-div'>
                <span className='heading-div'>NOTIFICATIONS</span>
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