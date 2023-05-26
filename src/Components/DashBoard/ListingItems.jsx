import * as React from 'react';
import Box from '@mui/material/Box';
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

export default function ListingItems({pageheading,receivedData}) {
    console.log("List Rendered");
    console.log("receivedData",receivedData);
    console.log("page hedaer",pageheading);
    const [showModal, setShowModal] = useState(false);

    // const [currentData,setCurrentData] = useState();

    // setCurrentData(receivedData);

    const colHeading = Object.keys(receivedData[0]).filter((data)=>{
        return (data !== "tutorId");
    });

    // if(colHeading.includes("tutorId"))
    //     colHeading.shift();

    
      const handleModal = () => setShowModal((prev)=>{
        return !prev;
      });

    

    // console.log("List Rendered");
    console.log("Data Received",colHeading);

    

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
            if(item === "tutorId"){
                continue;
            }
            else if(Array.isArray(itemObj[item])){
                const newItem=itemObj[item].map((i,index)=>{
                    return (index==0?i:", "+i)
                })
                row.push(<TableCell align="center">{newItem}</TableCell>)
            }
            else if(itemObj[item] === "pending"){
                console.log(itemObj[item]," Item");
                row.push(
                    <TableCell align="center">
                        <span className='text-yellow-500 font-bold'>{itemObj[item].toUpperCase()}</span>
                    </TableCell>
                )
            }
            else if(itemObj[item] === "accepted"){
                console.log(itemObj[item]," Item");
                row.push(
                    <TableCell align="center">
                        <span className='text-green-600 font-bold'>{itemObj[item].toUpperCase()}</span>
                    </TableCell>
                )
            }
            else if(itemObj[item] === "rejected"){
                console.log(itemObj[item]," Item");
                row.push(
                    <TableCell align="center">
                        <span className='text-red-600 font-bold'>{itemObj[item].toUpperCase()}</span>
                    </TableCell>
                )
            }
            else if(item === "feedback"){
                row.push(
                    <TableCell sx={{}} align="center">
                        {<Button variant="contained" sx={{fontSize:"10px", textTransform:"none", padding:"2px 5px", backgroundColor:"var(--primary-color)"}} onClick={handleModal}>Share Feedback</Button>}
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
        <div id='list-heading'>
                {pageheading}
        </div>
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
        <FeedbackModal displayState={showModal} handleModal={handleModal}/>
        </div>
    </div>
  );
}