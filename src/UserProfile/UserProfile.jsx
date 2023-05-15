import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserProfile() {
    const [user,setUser]=useState(null);
    const [showCard, setShowCard] = useState(false);

  const { id } = useParams();
  const fetchData = async () => {
    const response = await axios({
      url: `http://localhost:3000/user/${id}`,
      method: "GET",
    });
    console.log("response", response.data.user);
    setUser(response.data.user)
  };

  useEffect(() => {
    fetchData();
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const threshold = 100; // Adjust this threshold as needed
  
        setShowCard(scrollTop > threshold);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  },[]);

  return (
    <>
      <div className=" w-4/5 container mx-auto flex">
        <div className="bg-green-500 w-3/5 h-[200vh]">hello</div>

        <div className=" w-2/5">
          <div class="flex items-center h-screen  justify-center ">
           {showCard &&  <div class="fixed">
              <div class="bg-white shadow-xl p-12 rounded-xl">
                <div class="flex justify-center p-2">
                    <img src={`http://localhost:3000/assets/${user && user.profilePic}`} alt=""  className="rounded-full w-32"/>
                </div>
                <div class="p-2">
                  <h3 class="text-center text-2xl text-gray-900 font-bold leading-8 ">
                    {user && user.name}
                  </h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>4.5⭐</p>
                  </div>
                 <div className="flex justify-center">
                 <table class="text-sm my-3 ">
                    <tbody>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Address
                        </td>
                        <td class="px-2 py-2">
                          {user && user.tutorForm.city}
                        </td>
                      </tr>
                      
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Email
                        </td>
                        <td class="px-2 py-2">{user && user.email}</td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Hourly fee
                        </td>
                        <td class="px-2 py-2">₹{user && user.tutorForm.rate}/hr</td>
                      </tr>
                    </tbody>
                  </table>
                 </div>

                  <div class="text-center my-3 text-white bg-primary-color p-4 rounded-lg">
                   <button>Request for a class</button>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </>
  );
}
export default UserProfile;
