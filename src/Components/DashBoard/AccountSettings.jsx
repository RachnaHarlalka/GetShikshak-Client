import './accountSettings.css'
import './style.css'
import {AiOutlineWarning} from 'react-icons/ai'

function AccountSettings(){
    return(
        <div id="settings-page-root-div">
            <div id="settings-page-details-div">
    
                    <div className='sub-container-div' id='personal-details-div'>
                        <div className='div-heading'>
                            ACCOUNT SETTINGS
                        </div>
                        <div className='account-content-div'>
                            <div className='sub-container-div' id='deactivate-account-div'>
                                <div className='div-heading left-align-heading'>
                                    Deactivate Account
                                </div>
                                <div className='account-content-div'>
                                        <div className='msg-div'>
                                            If You Want to disable your account for some amount of time
                                        </div>
                                        <div id="current-status-of-account">
                                            <span id='status-heading'>CURRENT ACCOUNT STATUS:</span>
                                            <span id='current-status-span'>ACTIVE</span>
                                        </div>
                                        <div className='button-div'>
                                            <button className='account-settings-button'>DEACTIVATE</button>
                                        </div>
                                </div>
                            </div>
                            <div className='sub-container-div'>
                                <div className='div-heading left-align-heading'>
                                    Delete Account
                                </div>
                                <div className='account-content-div'>
                                        <div className='msg-div'>
                                            <AiOutlineWarning color="red" size="1rem"/>
                                            It will permanently delete your account
                                        </div>
                                        <div className='button-div'>
                                            <button className='account-settings-button'>DELETE</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default AccountSettings;