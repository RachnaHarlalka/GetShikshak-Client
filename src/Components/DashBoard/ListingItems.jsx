import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import './listingitems.css';
import { boolean } from 'yup';

export default function ListingItems({pageheading,receivedData}) {
    console.log("List Rendered");
    console.log("receivedData",receivedData);
    console.log("page hedaer",pageheading);

    // const [currentData,setCurrentData] = useState();

    // setCurrentData(receivedData);

    const colHeading = Object.keys(receivedData[0]);
    

    // console.log("List Rendered");
    console.log("Data Received",colHeading);

    function generateColHeading(){
        const tableHeading = colHeading.map((item)=>{
            return(
                <TableCell sx={{bgcolor:'lightGray', textTransform:"uppercase"}} align="center">{item}</TableCell>
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
           if(item=="profilePic"){
                row.push(<TableCell sx={{borderRight:"1px solid black", display:"flex",justifyContent:"center"}} align="center" className=''>
                    <img src={`http://localhost:3000/assets/${itemObj[item]}`} alt="" style={{objectFit:"cover"}} className='w-16 h-16 '/>
                </TableCell>)
                console.log("inside profile pic",itemObj[item])
            }
            else if(Array.isArray(itemObj[item])){
                const newItem=itemObj[item].map((i,index)=>{
                    return (index==0?i:", "+i)
                })
                row.push(<TableCell sx={{borderRight:"1px solid black"}} align="center">{newItem}</TableCell>)
            }
            else if(typeof itemObj[item]==="object"){
                console.log("Inside object item",item);
                continue;
            }
            else if((typeof itemObj[item]) === "boolean"){
                const bool = itemObj[item]?"Active":"In-Active";
                const textColor = itemObj[item]?"green":"red";
                row.push(<TableCell sx={{borderRight:"1px solid black",textTransform:'uppercase',fontWeight:"bold",color:textColor }} align="center">{bool}</TableCell>)
            }
            else
            row.push(<TableCell sx={{borderRight:"1px solid black"}} align="center">{itemObj[item]}</TableCell>)
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
                <h1>{pageheading.split(" ")[0]} Count : {receivedData.length}</h1>
        </div>
        <div id='items-list'>
        <Box sx={{ width: '100%'}} color="black">
        <Paper sx={{ width: '100%'}}>
            <TableContainer component={Paper} style={{ maxHeight: '467px' }}>
                <Table aria-label="simple table" stickyHeader size="small">
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
        </div>
    </div>
  );
}