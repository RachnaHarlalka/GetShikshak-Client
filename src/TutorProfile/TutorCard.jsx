import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function TutorCard({ tutor }) {
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const authToken = JSON.parse(sessionStorage.getItem("token"))
  const userData = JSON.parse(sessionStorage.getItem("user"))
  const handleClick = ()=>{
    const url=`/reserveClass/${tutor._id}`
   if(authToken) navigate(url)
  else {
    enqueueSnackbar("Login to reserve a class",{variant:"warning"})
    navigate('/login')
  }
  }
  return (
    <>
      <div className="bg-white shadow-xl p-8 rounded-xl">
        <div className="flex justify-center p-4">
          <img
            src={`http://localhost:3000/assets/${tutor && tutor.profilePic}`}
            alt=""
            className="rounded-full w-36"
          />
        </div>
        <div className="p-2">
          <h3 className="text-center text-2xl text-gray-900 font-bold leading-8 ">
            {tutor && tutor.name}
          </h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>4.5⭐</p>
          </div>
          <div className="flex justify-center">
            <table className="text-sm my-3 ">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                  <td className="px-2 py-2">{tutor && tutor.tutorForm.city}</td>
                </tr>

                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td className="px-2 py-2">{tutor && tutor.email}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Hourly fee
                  </td>
                  <td className="px-2 py-2">₹{tutor && tutor.tutorForm.rate}/hr</td>
                </tr>
              </tbody>
            </table>
          </div>
          {userData?.role==="student" && (<div className="text-center my-3 text-white bg-primary-color p-4 rounded-lg">
            <button onClick={handleClick}>Reserve a Class</button>
          </div>)}
        </div>
      </div>
    </>
  );
}
