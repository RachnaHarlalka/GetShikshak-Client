import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import './style.css'

function TutorCardSection(){
    return(
        <div className='w-[85vw] mx-auto'>
            <div id='tutor-card'>
                <div id='heading'>
                    <p >Meet Our Tutors</p>
                </div>

                <div id='cards-div'>

                    <div id='card-listing-div'>
                        <button className='btn-class carousel-control-btn' id='left-btn'><AiOutlineLeft/></button>
                        <div className='card mx-6'>
                            <div className='profile-pic-section'>
                                    <div className='profile-pic'>
                                    </div>
                            </div>
                            <div className='tutor-details'>
                                <p className='tutor-name'>Tutor Name</p>
                                <div className='ratings'>
                                    
                                    <span className='star'>★★★★★</span>
                                </div>
                                <div className='skills-tag-div'>
                                    <span class='skills-tag'>JS</span>
                                    <span class='skills-tag'>DBMS</span>
                                    <span class='skills-tag'>Data Structure</span>
                                    <span class='skills-tag'>Web Development</span>
                                    <span class='skills-tag'>PHP</span>
                                </div>
                                <div className='card-btn-div'>
                                    <button className='btn-class'>View Profile</button>
                                </div>
                            </div>
                        </div>

                        {/* <div className='card'>
                            <div className='profile-pic-section'>
                                    <div className='profile-pic'>
                                    </div>
                            </div>
                            <div className='tutor-details'>
                                <p className='tutor-name'>Tutor Name</p>
                                <div className='ratings'>
                                    
                                    <span className='star'>★★★★★</span>
                                </div>
                                <div className='skills-tag-div'>
                                    <span class='skills-tag'>English</span>
                                    <span class='skills-tag'>Spanish</span>
                                    <span class='skills-tag'>Hindi</span>
                                    <span class='skills-tag'>Bengali</span>
                                    <span class='skills-tag'>Urdu</span>
                                </div>
                                <div className='card-btn-div'>
                                    <button className='btn-class'>View Profile</button>
                                </div>
                            </div>
                        </div> */}

                        <div className='card mx-6'>
                            <div className='profile-pic-section'>
                                    <div className='profile-pic'>
                                    </div>
                            </div>
                            <div className='tutor-details'>
                                <p className='tutor-name'>Tutor Name</p>
                                <div className='ratings'>
                                    
                                    <span className='star'>★★★★★</span>
                                </div>
                                <div className='skills-tag-div'>
                                    <span class='skills-tag'>AI</span>
                                    <span class='skills-tag'>Machine Learning</span>
                                    <span class='skills-tag'>Deep Learning</span>
                                    <span class='skills-tag'>Statistics</span>
                                </div>
                                <div className='card-btn-div'>
                                    <button className='btn-class'>View Profile</button>
                                </div>
                            </div>
                        </div>
                        <div className='card mx-6'>
                            <div className='profile-pic-section'>
                                    <div className='profile-pic'>
                                    </div>
                            </div>
                            <div className='tutor-details'>
                                <p className='tutor-name'>Tutor Name</p>
                                <div className='ratings'>
                                    
                                    <span className='star'>★★★★★</span>
                                </div>
                                <div className='skills-tag-div'>
                                    <span class='skills-tag'>JS</span>
                                    <span class='skills-tag'>C++</span>
                                    <span class='skills-tag'>Data Structure</span>
                                    <span class='skills-tag'>OS</span>
                                    <span class='skills-tag'>PHP</span>
                                    <span class='skills-tag'>Networking</span>
                                </div>
                                <div className='card-btn-div'>
                                    <button className='btn-class'>View Profile</button>
                                </div>
                            </div>
                        </div>
                        <div className='card mx-6'>
                            <div className='profile-pic-section'>
                                    <div className='profile-pic'>
                                    </div>
                            </div>
                            <div className='tutor-details'>
                                <p className='tutor-name'>Tutor Name</p>
                                <div className='ratings'>
                                    
                                    <span className='star'>★★★★★</span>
                                </div>
                                <div className='skills-tag-div'>
                                    <span class='skills-tag'>Maths</span>
                                    <span class='skills-tag'>Trigonometry</span>
                                    <span class='skills-tag'>Calculas</span>
                                    <span class='skills-tag'>Geometry</span>
                                    <span class='skills-tag'>Algebra</span>
                                </div>
                                <div className='card-btn-div'>
                                    <button className='btn-class'>View Profile</button>
                                </div>
                            </div>
                        </div>
                        <button className='btn-class carousel-control-btn' id='right-btn'><AiOutlineRight/></button>
                    </div>
                    
                    <div id='card-carousel-controller-div'>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TutorCardSection;