import * as React from 'react';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './listingitems.css';
import FeedbackModal from './FeedbackModal';

export default function ListingItems({pageheading,receivedData,listName}) {
    // console.log("List Rendered");
    console.log("receivedData",receivedData);
    // console.log("page hedaer",pageheading);
    const [showModal, setShowModal] = useState(false);
    const [showAd, setShowAd] = useState(false);
    const [includeFeedback,setIncludeFeedback] = useState(false);
    const [includeAdDiv, setIncludeAdDiv] = useState(false);
    const [currentClassId, setCurrentClassId] = useState(null);
    const [currentAd, setCurrentAd] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    // const [currentData,setCurrentData] = useState();

    // setCurrentData(receivedData);
    const style = {
        position: 'absolute',
        top: '450px',
        left: '48%',
        transform: 'translate(-40%, -70%)',
        width: 800,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        // boxShadow: 24,
        p: 4,
      };

    const colHeading = receivedData?.length>0 ?(
        Object.keys(receivedData[0])?.filter((data)=>{
            return (data !== "tutorId" && data !== "about you" && data !== "about class" && data !== "title" && data !=="ad_subjects" && data !== "ad_rate");
        })
    ):[];

    // console.log(receivedData[0]?.['account-status']);

    // if(colHeading.includes("tutorId"))
    //     colHeading.shift();

    
      const handleModal = (classId) =>{
        if(currentClassId === null)
            setCurrentClassId(classId); 
        else
            setCurrentClassId(null); 
        setShowModal((prev)=>{
            return !prev;
        })
      } 

      const handleShowAd = ()=>{
        setShowAd((prev)=>{
            return !prev;
        })
      }

      const handleSetCurrentAd = (user,adDetails) =>{
            setCurrentAd(adDetails);
            setCurrentUser(user);
      }
      

    // console.log("List Rendered");
    // console.log("Data Received",colHeading);

    

    function generateColHeading(){
        const tableHeading = colHeading.map((item)=>{
            return(
                <TableCell sx={{bgcolor:'lightGray', textTransform:"uppercase",border:"1px solid gray"}} align="center">{item}</TableCell>
            )
        })

        return(
            <TableRow>
                {tableHeading}
            </TableRow>
        )
    }

    function generateTableRow(itemObj){
        let row=[];
        for(let item in itemObj){
           if(item==="profile Pic"){
                row.push(<TableCell sx={{display:"flex",justifyContent:"center",alignItems:"center"}} align="center" className=''>
                    <img src={`http://localhost:3000/assets/${itemObj[item]}`} alt="" style={{objectFit:"cover"}} className='w-16 h-26 '/>
                </TableCell>)
            }
            // else if(Array.isArray(itemObj[item])){
            else if(item === "tutorId" || item === "about you" || item === "about class" || item === "title" || item ==="ad_subjects" || item === "ad_rate"){
                continue;
            }
            else if(Array.isArray(itemObj[item])){
                const newItem=itemObj[item].map((i,index)=>{
                    return (index==0?i:", "+i)
                })
                row.push(<TableCell align="center">{newItem}</TableCell>)
            }
            else if(itemObj[item] === "pending"){
                row.push(
                    <TableCell align="center">
                        <span className='text-yellow-500 font-bold'>{itemObj[item].toUpperCase()}</span>
                    </TableCell>
                )
            }
            else if(itemObj[item] === "accepted"){
                row.push(
                    <TableCell align="center">
                        <span className='text-green-600 font-bold'>{itemObj[item].toUpperCase()}</span>
                    </TableCell>
                )
            }
            else if(itemObj[item] === "rejected"){
                row.push(
                    <TableCell align="center">
                        <span className='text-red-600 font-bold'>{itemObj[item].toUpperCase()}</span>
                    </TableCell>
                )
            }
            else if(item === "feedback"){
                row.push(
                    <TableCell sx={{}} align="center">
                        {<Button variant="contained" sx={{fontSize:"10px", textTransform:"none", padding:"2px 5px", backgroundColor:"var(--primary-color)"}} onClick={()=>{handleModal(itemObj["class id"])}}>Share Feedback</Button>}
                        {includeFeedback === false?setIncludeFeedback(true):null}
                    </TableCell>)
            }
            else if(typeof itemObj[item]==="object"){
                console.log("Inside object item",item);
                continue;
            }
            else if(typeof itemObj[item] === "boolean"){
                const bool = itemObj[item]?"Active":"In-Active";
                const textColor = itemObj[item]?"green":"red";
                row.push(<TableCell sx={{textTransform:'uppercase',fontWeight:"bold",color:textColor }} align="center">{bool}</TableCell>)
            }
            else if(itemObj[item] === "ad"){
                const user = {
                    id: itemObj.id,
                    name: itemObj.name
                }
                const adDetails ={
                    title: itemObj.title,
                    aboutYou: itemObj["about you"],
                    aboutClass: itemObj["about class"],
                    subjects: itemObj["ad_subjects"],
                    rate:itemObj["ad_rate"]
                }
                row.push(
                    <TableCell sx={{}} align="center">
                        {<Button variant="contained" sx={{fontSize:"10px", textTransform:"none", padding:"2px 5px", backgroundColor:"var(--primary-color)"}} onClick={()=>{handleShowAd();handleSetCurrentAd(user,adDetails)}}>View Ad</Button>}
                        {includeAdDiv === false?setIncludeAdDiv(true):null}
                    </TableCell>)
            }
            else
            row.push(<TableCell align="center">{itemObj[item]}</TableCell>)
        }
        return row;
    }

    function generateTableBody(){
        const tableBody= receivedData.map((item,index)=>{
            return(
                <TableRow
                    key={index}
                >
                    
                    {generateTableRow(item)}
                </TableRow>
            )
        });
        return tableBody;
    }

    return (
    <div id='listing-items-root-div'>
        <div id='list-heading' className='flex justify-between'>
                {pageheading}
                <h1>{pageheading.split(" ")[0]} Count : {receivedData?.length}</h1>
        </div>
        {(receivedData?.length>0 )?(
            <div id='items-list'>
                <Box sx={{ width: '100%'}} color="black">
                    <Paper sx={{ width: '100%'}}>
                        <TableContainer component={Paper} style={{ maxHeight: '467px'}}>
                            <Table aria-label="simple table" stickyHeader size="small" sx={{borderRadius:"none"}}>
                                <TableHead>
                                    {generateColHeading()}
                                </TableHead>
                                <TableBody>
                                    {generateTableBody()}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
                {includeFeedback && <FeedbackModal displayState={showModal} handleModal={handleModal} classId={currentClassId}/>}
                {includeAdDiv && 
                    <Modal
                    open={showAd}
                    onClose={handleShowAd}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
                            Tutor's Ad Details
                        </Typography>
                        <Typography sx={{display:"flex",padding:"30px 0px",fontWeight:"bold", justifyContent:"space-between"}}>
                            <span style={{fontSize:"medium"}}>
                                Tutor Name: 
                                <span style={{fontWeight:'normal',marginLeft:"5px"}}>{currentUser?.name}</span>
                            </span>
                            <span style={{fontSize:"medium"}}>
                                ID: 
                                <span style={{fontWeight:'normal',marginLeft:"5px"}}>{currentUser?.id}</span>
                            </span>
                        </Typography>
                        <Typography sx={{padding:"10px 0px"}}>
                            <span className='ad-detials'>
                                <span className='ad-span-heading'>Ad Title</span>
                                    {currentAd?.title}
                            </span>
                        </Typography>
                        <Typography sx={{padding:"10px 0px"}}>
                            <span className='ad-detials'>
                                <span className='ad-span-heading'>About Tutor</span>
                                {currentAd?.aboutYou}
                            </span>
                        </Typography>
                        <Typography sx={{padding:"10px 0px"}}>
                            <span className='ad-detials'>
                                <span className='ad-span-heading'>About Class</span>
                                {currentAd?.aboutClass}
                            </span>
                        </Typography>
                        <div style={{display:"flex"}}>
                            <Typography sx={{padding:"10px 0px", width:"80%", marginRight:"20px"}}>
                                <span className='ad-detials'>
                                    <span className='ad-span-heading'>Subjects</span>
                                    {
                                        currentAd?.subjects?.map((subject,index)=>{
                                            return (index==0?subject:", "+subject)
                                        })
                                    }
                                </span>
                            </Typography>
                            <Typography sx={{padding:"10px 0px", width:"20%"}}>
                                <span className='ad-detials'>
                                    <span className='ad-span-heading'>Rate</span>
                                    ₹ {currentAd?.rate}/hr
                                </span>
                            </Typography>
                        </div>
                        <div className='flex justify-end py-5'>
                                <Button variant="contained" sx={{ padding:"5px 10px", backgroundColor:"var(--primary-color)", marginRight:"20px"}} onClick={handleShowAd} >CLOSE</Button>
                        </div>
                        </Box>
                    </Modal>
                }
            </div>
        ):(
            <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:"300px"}}>
                <h1 style={{fontSize:"x-large",textAlign:"center",backgroundColor:"lightcyan",padding:"20px",borderRadius:"5px"}}>
                    <span>No {listName} Yet</span>
                </h1>
            </div>
        )}
    </div>
  );
}