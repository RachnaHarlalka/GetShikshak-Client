import "./card.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { productData, responsive } from "./data";

export default function TutorCarousal({tutors}) {
  // console.log("tutop",tutors[0].profilePic);
  const AllTutors = tutors.map((tutor,index) => {
    return  (<>
    <Card
      key={index}
      email={tutor.email}
      subjects={tutor.tutorForm.subjects}
      url= {`http://localhost:3000/assets/${tutor.profilePic}`}
      // price={item.price}
      rate={tutor.rate}
    />
    {console.log("profile",`http://localhost:3000/assets/${tutor.profilePic}`)}
    </>
  )
  
  });

  // const CustomDot = ({ onClick, ...rest }) => {
  //   const dotStyle = {
  //     position: 'relative',
  //     top: '10px', // Adjust the top value to position the dots slightly below
  //     backgroundColor: active ? 'red' : 'gray',
  //     width: '8px',
  //     height: '8px',
  //     margin: '0 5px',
  //     borderRadius: '50%',
  //     cursor: 'pointer',
  //   };
  
  //   return <span style={dotStyle} onClick={onClick} />;
  // };

  return (
    <div className="carousal">
      <Carousel showDots  responsive={responsive}>
        {AllTutors}
      </Carousel>
    </div>
  );
}