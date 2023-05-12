    import './dashboardDetails.css'
    import './profileDetails.css'
    import EditButton from './EditButton';

    function ProfileDetails(props){

        //console.log("DashBoard Rendered");

        return(
            <div id="profile-page-root-div">
                <div id="profile-page-details-div">
                    <div className='row-div' id="first-row">
                            <div className='sub-container-div w-1/2' id='personal-details-div'>
                                <div className='div-heading'>
                                    PERSONAL DETAILS
                                    <div className="edit-button-div">
                                        <EditButton inputBoxId=""/>
                                    </div>
                                </div>
                                <div className='content-div'>
                                    <ul className='content-ul'>
                                        <div className='content-col-div'>
                                            <li className='content-li'>
                                                    <span className='label-span'>Name</span>
                                                    <input type="text" className='dashboard-input-box' id="name" placeholder="Tutor Name"/>
                                            </li>
                                            <li className='content-li'>
                                                    <span className='label-span'>Native Language</span>  
                                                    <input type="text" className='dashboard-input-box' id="native-lang" placeholder="English/Assamese/Hindi"/>
                                            </li>
                                            <li className='content-li'>
                                                    <span className='label-span'>Email</span> 
                                                    <input type="text" className='dashboard-input-box' id="email" placeholder="Email"/>
                                            </li>
                                            <li className='content-li'>
                                                    <span className='label-span'>State</span>
                                                    <input type="text" className='dashboard-input-box' id="state" placeholder="Assam"/>
                                            </li>
                                        </div>
                                        <div className='content-col-div'>
                                            <li className='content-li'>
                                                    <span className='label-span'>Gender</span>
                                                    <input type="text" className='dashboard-input-box' id="gender" placeholder="Male/Female/Other"/>
                                            </li>
                                            <li className='content-li'>
                                                    <span className='label-span'>Age</span>
                                                    <input type="text" className='dashboard-input-box' id="age" placeholder="23yrs"/>
                                            </li>
                                            <li className='content-li'>
                                                    <span className='label-span'>Phone No</span>
                                                    <input type="text" className='dashboard-input-box' id="phone-no" placeholder="9872616113"/>
                                            </li>
                                            <li className='content-li'>
                                                    <span className='label-span'>City</span>
                                                    <input type="text" className='dashboard-input-box' id="city" placeholder="Guwahati"/>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className='sub-container-div w-1/2'>
                                <div className='div-heading'>
                                    QUALIFICATIONS
                                    <div className="edit-button-div">
                                        <EditButton inputBoxId=""/>
                                    </div>
                                </div>
                                <div className='content-div'>
                                    <div className='qualification-row'>
                                        Qualification1
                                    </div>
                                </div>

                            </div>
                    </div>
                    <div className='row-div' id="second-row">
                        <div className='sub-container-div' id="document-div">
                            <div className='div-heading'>
                                    ID PROOF
                                    <div className="edit-button-div">
                                        <EditButton inputBoxId=""/>
                                    </div>
                            </div>
                            <div className='content-div'>
                            <div className='sub-container-div'>
                                <div className='div-heading'>
                                    ID PROOF
                                    <div className="edit-button-div">
                                        <EditButton inputBoxId=""/>
                                    </div>
                                </div>
                                <div className='content-div'>
                                    <div className='qualification-row'>
                                        Upload Documents Here
                                    </div>
                                </div>
                            </div>
                            <div className='sub-container-div'>
                                <div className='div-heading'>
                                    Qualification Document
                                    <div className="edit-button-div">
                                        <EditButton inputBoxId=""/>
                                    </div>
                                    </div>
                                    <div className='content-div'>
                                        <div className='qualification-row'>
                                            Upload Qualification Documents Here
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default ProfileDetails;