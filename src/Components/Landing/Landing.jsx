import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";
import TutorCardSection from "../TutorCardSection/TutorCardSection";

function Landing(){
    return(
        <div>
            <HeroSection/>
            <About/>
            <TutorCardSection/>
            {/* <div> {props.children}</div> */}
        </div>
    )
}

export default Landing;
