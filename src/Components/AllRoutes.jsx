import {Routes,Route} from 'react-router-dom';
import Register from './Register/Register'
import Login from "./Login/Login"
import Landing from "./Landing/Landing"
import DashBoard from "./DashBoard/Dashboard"
import SearchPage from "./SearchPage/SearchPage"
import { RecoilRoot, useRecoilState } from "recoil";
import { authTokenAtom } from "../Atom";
import TutorRegistrationForm from './TutorRegistrationForm/TutorRegistrationForm';

// import TutorRegistrationForm from "../Components/TutorRegistrationForm/TutorRegistrationForm";


function AllRoutes(){
    const[authToken,setAuthToken]=useRecoilState(authTokenAtom);
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
            <Route path='/searchPage' element={<SearchPage/>}/>
            <Route path='/tutorCreation' element={<TutorRegistrationForm/>}/>
        </Routes>
    )
}

export default AllRoutes;