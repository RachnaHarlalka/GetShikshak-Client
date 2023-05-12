import {Routes,Route} from 'react-router-dom';
import Register from './Components/Register/Register'
import Login from "./Components/Login/Login"
import Landing from "./Components/Landing/Landing"
import DashBoard from "./Components/DashBoard/DashBoard"
import SearchPage from "./Components/SearchPage/SearchPage"
import { RecoilRoot, useRecoilState } from "recoil";
import { authTokenAtom,userDataAtom } from "./Atom";
import TutorRegistrationForm from './Components/TutorRegistrationForm/TutorRegistrationForm';
import SearchResult from './Components/SearchResult';

// import TutorRegistrationForm from "../Components/TutorRegistrationForm/TutorRegistrationForm";


function AllRoutes(){
    const[authToken,setAuthToken]=useRecoilState(authTokenAtom);
    const[userData,setUserData]=useRecoilState(userDataAtom);
    return(
        <Routes>
            {
          authToken ?
          <Route path="/login" element={<Landing/>}/>
          :
          <Route path="/login" element={<Login/>}/>
          }
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Landing/>}/>
            <Route path='/dashboard' element={<DashBoard/>}/>
            {/* <Route path='/searchPage' element={<SearchPage/>}/> */}
            <Route path='/search' element={<SearchResult/>}/>
            {
                userData.role!=="student" ?
                <Route path='/tutorCreation' element={<TutorRegistrationForm/>}/>
                :
                <Route path='/tutorCreation' element={<Landing/>}/>
            }
        </Routes>
    )
}

export default AllRoutes;