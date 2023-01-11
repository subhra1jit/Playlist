import { InputBase,Button,Box,Typography,Modal,Container } from "@mui/material";
import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import Showlist from "./showlist";
import { useNavigate } from "react-router";

const Main  = ()=>
{
    const [open,setOpen] = useState(false);
    const [inputList,setInputList] = useState();
    const [items,setItems] = useState([]);
    const navigate = useNavigate();

    const itemEvent=(e)=>
    {
       setInputList(e.target.value);
    }
    const ListOfItem=()=>
    {
      setItems((old)=>
      {
        return [...old,inputList];
      });
      setInputList("");
    }
    return(
        <>  
    <Box sx={{display:"flex",justifyContent:"center"}}> 
    <Button onClick={(e)=>setOpen(true)} variant="contained"  startIcon={<Add/>} sx={{m:"20px auto"}}>Add Playlist</Button>
    <Button variant="contained" sx={{m:"20px auto"}} onClick={()=>navigate("/data")}>Show</Button>
    </Box>
    <Modal
    open={open}
    onClose={(e)=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"balck",color:"white",height:"50%"}}>
            <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{m:"0px 0px 20px 0px",textAlign:"center"}}>
            ADD YOUR PLAYLIST HERE
            </Typography>
            <InputBase sx={{background:"white",width:"300px",height:"45px",padding:"0px 20px",borderRadius:"7px"}} 
            placeholder="enter your name of the playlist"
            onChange={itemEvent}
            value={inputList}
            />
            <Button variant="contained" sx={{m:"0px 20px"}} onClick={ListOfItem}>ADD NOW</Button>
            </Box>
        </Box>
    </Modal>
    <Container>
            <ol>
                {items.map((i)=>{
                    return <Showlist item={i}/>
                })}
            </ol>
    </Container>
        </>
    )
}

export default Main;