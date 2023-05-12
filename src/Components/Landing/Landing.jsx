import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";
import TutorCarousal from '../TutorCardSection/TutorCarousal'
import { useEffect, useState } from "react";
import axios from "axios";

function Landing(){
    const [tutors,setTutors]=useState([]);

    const fetchData=async()=>{
        let response = await axios({
            url:"http://localhost:3000/user/gettutors",
            method:"GET"
        })
        console.log("response.data.tutors",response.data.tutors)
        setTutors(response.data.tutors);
    }

    useEffect(()=>{
        fetchData();
    },[])
    

    // console.log("Tutors landing",response.data.tutors)
    return(
        <div>
            <HeroSection/>
            {tutors && (<TutorCarousal tutors={tutors}/>)}
            <About/>

            {/* <TutorCardSection/> */}
            {/* <div> {props.children}</div> */}
        </div>
    )
}

export default Landing;
