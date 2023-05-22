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
            if(Array.isArray(itemObj[item])){
                const newItem=itemObj[item].map((i,index)=>{
                    return (index==0?i:", "+i)
                })
                row.push(<TableCell sx={{borderRight:"1px solid black"}} align="center">{newItem}</TableCell>)
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
        <div id='list-heading'>
                {pageheading}
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