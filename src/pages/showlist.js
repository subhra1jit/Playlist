import { Add, Delete } from "@mui/icons-material";
import { Button, Typography,Box,InputBase,Modal, Divider } from "@mui/material";
import React, { useState } from "react";
import Data from "./Data";

const Showlist=(props)=>
{
    const [open,setOpen] = useState(false);
    const [data,setData] = useState({

        name:"",
        url:"",
        playlist:""
    });

    const handleChange=(e)=>
    {
        const {name,value} = e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    const handleSubmit=(e)=>
    {
        console.log(data);
        return <Data {...data}/>
        
    }
    return(
        <>
        <Box sx = {{m:"20px 0px",background:"#e2e2e2",display:"flex",justifyContent:"space-between",p:"10px",borderRadius:"7px"}}>
           <Typography variant="h5" component="span"> {props.item}</Typography>
           <Box>
           <Button startIcon={<Add/>} variant="contained" sx={{m:"0px 20px"}} onClick={()=>setOpen(true)}>Add</Button>
           <Modal
            open={open}
            onClose={(e)=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"balck",color:"white",height:"50%"}}>
            <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{m:"0px 0px 20px 0px",textAlign:"center"}}>
            ADD YOUR ITEM
            </Typography>
            <InputBase sx={{background:"white",width:"300px",height:"45px",padding:"0px 20px",borderRadius:"7px",m:"9px 10px"}} 
            placeholder="enter your name of item" name="name" value={data.name} onChange={handleChange} />
            <Divider/>
            <InputBase sx={{background:"white",width:"300px",height:"45px",padding:"0px 20px",borderRadius:"7px",m:"9px 10px" }} 
            placeholder="enter the Url of the item" name="url" value={data.url} onChange={handleChange}/>
            <Divider/>
            <InputBase sx={{background:"white",width:"300px",height:"45px",padding:"0px 20px",borderRadius:"7px",m:"9px 10px" }} 
            placeholder="enter the name of the playlist" name="playlist" value={data.playlist} onChange={handleChange}/>
            <Divider/>
            <Button variant="contained" sx={{m:"0px 20px"}} onClick={handleSubmit}>ADD NOW</Button>
            </Box>
        </Box>
    </Modal>
           </Box>
        </Box>
        </>
    )
}

export default Showlist;