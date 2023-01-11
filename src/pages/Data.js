import { Container} from "@mui/system";
import { Grid,Typography,CardActionArea,Card,CardContent,Box } from "@mui/material";
import React from "react";


const Data = ({name,url,playlist}) =>
{
    console.log(name);
    return(
        <>
        <Container sx={{m:"20px"}}>
          <Grid item xs={6} md={4}>
            <Box sx={{width:"100px",height:"10px",background:"e2e2e2"}}>
           <h3>{name}</h3>
           <h3>{playlist}</h3>
           <iframe src={url} width="100%" height="300">click</iframe>
           </Box>
          </Grid>
        </Container>
        </>
    )
}

export default Data;