// import {MdSave} from 'react-icons/md';
import {IoMdCheckmarkCircle} from 'react-icons/io';
import {RxCrossCircled} from 'react-icons/rx';
import {BiEdit} from 'react-icons/bi';
import { useState } from 'react';
import axios from 'axios';
import {useRecoilState} from 'recoil';
import {authTokenAtom} from '../../Atom'
import './style.css';

function EditButton({inputBoxId,path,newData}){
    console.log("DashBoard Rendered");

    const [showSave,setShowSave]=useState(false);
    const [authToken,setAuthToken] = useRecoilState(authTokenAtom);


    const textbox = document.getElementById(inputBoxId);

    const sendData= async()=>{
        console.log("Updated value ter clicking sve btn",newData);
        let response = await axios(
            {
                url:`http://localhost:3000/dashboard/${path}`,
                method:"PATCH",
                data : {
                    newData
                },
                headers:{
                    "Authorization": `Bearer ${authToken}`
                },
                
            }
        )
        // setFetchedResponse(response.data);
        console.log("response",response);
        console.log("sendData is called")
        handleClick();
    }

    //console.log("before update",);
    function cancelEdit(event){
        //console.log("clicked on cancel");
        event.stopPropagation();
        handleClick();
    }

    function CancelAndSaveButton(){
        //console.log("clicked on show save");
        return(
            <div style={{display:"flex", width:"40px",justifyContent:"space-between", marginRight:"10px"}}>
                 <div className='control-button'>
                    <div onClick={cancelEdit}>
                        <RxCrossCircled size="1em" color="red"/>
                    </div>
                </div>
                <div className='control-button'>
                    <div onClick={sendData}>
                        <IoMdCheckmarkCircle size="1em" color="green"/>
                    </div>
                </div>
            </div>
        )
    }

    function showEditButton(){
        return(
            <div className='control-button' onClick={handleClick}>
                <BiEdit/>
            </div>
        )
    }

    function handleClick(){

        if(textbox){
            if(textbox.disabled){
                textbox.disabled=false;
                setShowSave(true);
                textbox.focus();  
            }
            else{
                textbox.disabled=true;
                setShowSave(false);
                textbox.style.border="none"; 
                //console.log("updated value",data)
            }
        }
    }

    return(
        <div>
            {showSave?CancelAndSaveButton():showEditButton()}
        </div>
    )
}

export default EditButton;