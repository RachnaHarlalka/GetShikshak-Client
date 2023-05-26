import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TutorCard from "./TutorCard";

function TutorProfile() {
  const [tutor, setTutor] = useState(null);
  const [cardPosition, setCardPosition] = useState(false);

  const { id } = useParams();
  const fetchData = async () => {
    const response = await axios({
      url: `http://localhost:3000/user/${id}`,
      method: "GET",
    });
    console.log("response", response.data.user);
    setTutor(response.data.user);
  };

  // console.log("tutorprofile", tutor.tutorForm.subjects);

  useEffect(() => {
    fetchData();
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const threshold = 100; // Adjust this threshold as needed

      if (scrollTop > threshold) setCardPosition("fixed top-24");
      else setCardPosition("relative");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" w-4/5 container mx-auto flex ">
        <div className="w-3/5 ">
          <div id="left" className="my-24 mx-10">
            <div className="subjects">
              {tutor && tutor.tutorForm.subjects.map((subject, index) => {
                return (
                  <span
                    className="rounded-full px-4 py-2 bg-gray-200 mx-2"
                    key={index}
                  >
                    {subject}
                  </span>
                );
              })}
            </div>
            <div className="title my-6  text-3xl  font-[Quicksand] ">
              {tutor && tutor.tutorForm.title}
            </div>
            <div className="modes my-6">
              <div className="mb-6 text-lg font-bold font-[Quicksand]">Class Location</div>
             <div className="flex flex-wrap">
             {tutor && tutor.tutorForm.mode.map((mode,index)=>{
                return(
                  <span key={index} className="py-2 px-4 border-2 my-2 mr-2 rounded-full">{mode}</span>
                )
              })}
             </div>
            </div>
            <div className="aboutyou my-6 rounded-lg">
              <h1 className="mb-4 text-lg font-bold font-[Quicksand]">About {tutor && tutor.name.split(" ")[0]}</h1>
             <div className="bg-gray-100 rounded-md p-4"> {tutor && tutor.tutorForm.aboutYou}</div>
            </div>
            <div className="flex flex-col gap-4 my-6">
                <h1 className="text-lg font-[Quicksand] font-bold">Languages </h1>
                <div className="flex flex-wrap">
                {tutor && tutor.tutorForm.language.map((language,index)=>{
                  return(
                    <span key={index} className="text-md py-2 px-4 border-2 rounded-full m-2">{language}</span>
                  )
                })}
                </div>
              </div>
            <div className="aboutClass my-6 ">
            
              <h1 className="mb-4 text-lg font-bold font-[Quicksand] ">About The Class</h1>
             
              <div className="bg-gray-100 rounded-md p-4">
              {tutor && tutor.tutorForm.aboutClass}
              </div>
            </div>
          </div>
        </div>

        <div id="right" className=" w-2/5">
          <div class="flex items-center h-screen  justify-center ">
            <div class={`transition duration-500 transform ${cardPosition}`}>
              <TutorCard tutor={tutor && tutor} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TutorProfile;
