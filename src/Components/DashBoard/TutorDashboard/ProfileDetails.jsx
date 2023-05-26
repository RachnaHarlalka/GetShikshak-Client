    import '../style.css'
    import './profileDetails.css'
    import EditButton from '../EditButton';
    import {useState,useEffect } from 'react';

    function ProfileDetails({fetchedData}){

        console.log("Data recieved ",fetchedData);

        const [userData, setUserData] = useState(null);

        useEffect(()=>{
            setUserData(fetchedData)
        },[]);

        return(
            <div id="profile-page-root-div">
                <div id="profile-page-details-div">
                    <div className='col-div' id="first-col">
                            <div className='sub-container-div'>
                                <div className='div-heading'>
                                    PERSONAL DETAILS
                                    <div className="edit-button-div">
                                        <EditButton inputBoxId=""/>
                                    </div>
                                </div>
                                <div className='content-div justify-center'>
                                        <div className='col-div personal-details-row-div'>
                                            <div className='details-item'>
                                                <span className='label-div'>ID:</span>
                                                <span>{userData?._id}</span>
                                            </div>
                                            <div className='details-item'>
                                                <span className='label-div'>Name:</span>
                                                <span>{userData?.name}</span>
                                            </div>
                                            <div className='details-item'>
                                                <span className='label-div'>Email:</span>
                                                <span>{userData?.email}</span>
                                            </div>
                                        </div>
                                        <div className='col-div personal-details-row-div'>
                                            <div className='details-item'>
                                                <span className='label-div'>City:</span>
                                                <span>{userData?.tutorForm?.city}</span>
                                            </div>
                                            <div className='details-item'>
                                                <span className='label-div'>Phone:</span>
                                                <span>{userData?.phone}</span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className='sub-container-div' id="qualification-div">
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
                    <div className='sub-container-div col-div' id='profile-section-second-col'>
                        <div className='' id="document-div">
                            <div className='div-heading'>
                                    DOCUMENTS
                            </div>
                            <div id='document-content-div'>
                                <div className='single-document' id='id-proof-div'>
                                    <div className='div-heading' style={{justifyContent:"flex-start", border:"none"}}>
                                        ID Proof
                                    </div>
                                    <div className=''>
                                        <div className='document-show-div'>
                                            <img className='document' alt="ID PROOF" src={`http://localhost:3000/assets/${userData?.tutorForm?.identity}`}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='single-document' id='qualification-proof-div'>
                                    <div className='div-heading' style={{justifyContent:"flex-start", border:"none"}}>
                                        Qualification Document
                                        </div>
                                        <div className=''>
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