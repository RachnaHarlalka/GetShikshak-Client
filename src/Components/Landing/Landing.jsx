import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";
import TutorCarousal from '../TutorCardSection/TutorCarousal'
import { useEffect, useState } from "react";
import axios from "axios";
import NoResultPage from "../NoResultPage";

function Landing(){
    const [tutors,setTutors]=useState([]);

    const fetchData=async()=>{
        let response = await axios({
            url:"http://localhost:3000/user/gettutors",
            method:"GET"
        })
        console.log("response.data.tutors",response.data.filteredTutors)
        setTutors(response.data.filteredTutors);
    }

    useEffect(()=>{
        fetchData();
    },[])
    

    // console.log("Tutors landing",response.data.tutors)
    return(
        <div>
            <HeroSection/>
            {tutors ? (<TutorCarousal tutors={tutors}/>):(<NoResultPage/>)}
            <About/>

            {/* <TutorCardSection/> */}
            {/* <div> {props.children}</div> */}
        </div>
    )
}

export default Landing;
