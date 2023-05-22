    import './style.css'
    import './profileDetails.css'
    import EditButton from './EditButton';
    import {useState,useEffect } from 'react';

    function ProfileDetails({fetchedData}){

        // console.log("Data recieved ",fetchedData);

        const [userData, setUserData] = useState(null);

        useEffect(()=>{
            setUserData(fetchedData)
        },[]);

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
                                                    <input type="text" className='dashboard-input-box' id="name" placeholder="Tutor Name" disabled value={userData?.name}/>
                                            </li>
                                            <li className='content-li'>
                                                    <span className='label-span'>Email</span> 
                                                    <input type="text" className='dashboard-input-box' id="email" placeholder="Email" disabled value={userData?.email}/>
                                            </li>
                                            <li className='content-li'>
                                                    <span className='label-span'>Phone No</span>
                                                    <input type="text" className='dashboard-input-box' id="phone-no" placeholder="9872616113" value={userData?.tutorForm?.phone}/>
                                            </li>
                                            <li className='content-li'>
                                                    <span className='label-span'>Addess</span>
                                                    <input type="text" className='dashboard-input-box' id="address" placeholder="Guwahati"/>
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
                                                    <span className='label-span'>City</span>
                                                    <input type="text" className='dashboard-input-box' id="city" placeholder="Guwahati" disabled value={userData?.tutorForm?.city}/>
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
                    <div className='row-div' id='profile-section-second-row'>
                        <div className='sub-container-div' id="document-div">
                            <div className='div-heading'>
                                    DOCUMENTS
                            </div>
                            <div className='content-div'>
                                <div className='sub-container-div col-div' id='id-proof-div'>
                                    <div className='div-heading'>
                                        ID Proof
                                    </div>
                                    <div className='content-div document-content-div'>
                                        <div className='document-show-div'>
                                            <img className='document' alt="ID PROOF" src={`http://localhost:3000/assets/${userData?.tutorForm?.identity}`}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='sub-container-div col-div' id='qualification-proof-div'>
                                    <div className='div-heading'>
                                        Qualification Document
                                        </div>
                                        <div className='content-div document-content-div'>
                                            <div className='document-show-div'>
                                                <img className='document' alt="ID PROOF" src={`http://localhost:3000/assets/${userData?.tutorForm?.lastEducationalCertificate}`}/>
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