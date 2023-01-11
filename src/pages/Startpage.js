import React, { useState } from "react";
import {Container,InputBase,Typography,Box, AppBar, Toolbar, IconButton,Button,Avatar, MenuItem,Menu, MenuList, CardContent,Card,CardActions, Divider} from "@mui/material";
import styled from "@emotion/styled";
import {Pets,CurrencyExchange,Login, Tune} from "@mui/icons-material";
import Playlist from "./playlist";
import {useNavigate} from "react-router-dom";
import photo1 from "../Images/photo1.jpg";

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


const Startpage =()=>
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
          <ButtonPart sx={{display:{xs:"none",sm:"flex"}}}>
            <Button variant="contained"  startIcon={<Login/>}>Sign in</Button>
            <Button variant="contained"  startIcon={<Login/>}>Sign out</Button>
            <Avatar sx={{cursor:"pointer"}} onClick={(e)=>setOpen(true)}/>
         </ButtonPart>
         <ButtonMobile sx={{display:{xs:"flex",sm:"none"}}}>
            <Avatar sx={{cursor:"pointer"}} onClick={(e)=>setOpen(true)}/>
         </ButtonMobile>
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
     <Container sx={{backgroundImage:`url(${photo1})`,
             backgroundPosition:"center",
             backgroundSize:"cover",
             display:"flex",
             alignItems:"center",
             width:"100%",
             height:"80vh"
}} >
   <Box>
   <Typography variant="h3">Hello , Welcome to Playlist App</Typography>
   <Typography variant="h6" sx={{m:"30px 10px 10px 20px",textAlign:"center"}}>Add your favorite into your playlist and enjoy it at any where and any place in the world</Typography>
    <CardActions>
      <Button variant="contained" onClick={()=>navigate("/playlist")}>Click to Start</Button>
   </CardActions>
   </Box>  
     </Container>
    
    </>
   ) 
}

export default Startpage;