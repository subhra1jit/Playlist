import React, { useState } from "react";
import {Container,InputBase,Typography,Box, AppBar, Toolbar, IconButton,Button,Avatar, MenuItem,Menu, MenuList, CardContent,Card,CardActions, Divider} from "@mui/material";
import styled from "@emotion/styled";
import {CurrencyExchange,Add} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import Main from "./Main";

const ButtonPart = styled(Box)(({theme})=>({
   display:"flex",
   justifyContent:"space-between",
   alignItems:"center",
   gap:"10px",
}))

const ButtonMobile = styled(Box)(({theme})=>({
   display:"flex",
   justifyContent:"space-between",
   alignItems:"center"
   
}))

const Playlist =()=>
{
   const [open,setOpen] = useState(false);
   const navigate = useNavigate();
   return(
    <>
     <AppBar sx={{background:"#6082B6",color:"white"}} position="sticky">
      <Toolbar sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <Typography variant="h6" sx={{display:{xs:"none",sm:"block"},cursor:"pointer"}}>Playlist</Typography>
          <IconButton sx={{display:{xs:"block",sm:"none"},color:"white"}}>
            <CurrencyExchange/>
          </IconButton>
          <ButtonPart>
            <Avatar sx={{cursor:"pointer"}} onClick={(e)=>setOpen(true)}/>
         </ButtonPart>
         </Toolbar> 
         <Menu id="demo-positioned-menu" 
         aria-labelledby="demo-positioned-button"
         open={open} 
         onClose={(e)=>setOpen(false)} 
         anchorOrigin={{
            vertical:"top",
            horizontal:"right"
         }}>
            <MenuItem onClick={()=>navigate("/")}>Profile</MenuItem>
            <MenuItem onClick={()=>navigate("/playlist")}>Playlist Playground</MenuItem>
         </Menu>
     </AppBar>
     <Divider/>
     <Main/>
        </>
    )
}

export default Playlist;