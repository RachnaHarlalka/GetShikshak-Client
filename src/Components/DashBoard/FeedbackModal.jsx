import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function FeedbackModal({displayState,handleModal}){
    console.log("display ",displayState);
    const [open, setOpen] =useState(false);
    const [feedback, setFeedback] = useState({
        rating:0,
        review:""
    });
    
    React.useEffect(()=>{
        setOpen(displayState);
    },[displayState])
    console.log("open ",open);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-40%, -70%)',
        width: 500,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        // boxShadow: 24,
        p: 4,
      };


    function handleSendFeedback(event){
        console.log("Current Feedback ",feedback);
        handleModal();
    }

    function handleClose(){
        handleModal();
    }


    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
                Give Class Feedback
                <span style={{fontSize:"small",display:"block"}}>Share your experience regarding this class</span>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 ,textAlign:"center", padding:"10px 0px"}}>
                <Rating
                sx={{marginLeft:"10px"}}
                name="simple-controlled"
                value={feedback.rating}
                onChange={(event, newValue) => {
                    setFeedback((prev)=>{
                        return{
                            ...prev,
                            rating:newValue
                        }
                    })
                }}
                />
            </Typography>
            <Box 
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                >
                <TextField fullWidth label="Share Review" id="fullWidth"
                    multiline
                    rows={7} 
                    onChange={(e)=>{
                        setFeedback((prev)=>{
                            return{
                                ...prev,
                                review:e.target.value
                            }
                        })
                    }}
                />
                <div className='flex justify-end py-5'>
                    <Button variant="contained" sx={{ padding:"5px 10px", backgroundColor:"var(--primary-color)", marginRight:"20px"}} onClick={handleModal} >CLOSE</Button>
                    <Button variant="contained" sx={{ padding:"5px 10px", backgroundColor:"var(--primary-color)"}} onClick={(e)=>{handleSendFeedback(e)}}>SEND FEEDBACK</Button>
                </div>
            </Box>
            </Box>
        </Modal>
    )
}

export default FeedbackModal;