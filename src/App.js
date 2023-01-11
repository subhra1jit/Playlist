import React from "react";
import Startpage from  "./pages/Startpage";
import Playlist from "./pages/playlist";
import Data from "./pages/Data";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App = ()=>
{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Startpage/>}/>
                <Route path="/playlist" element={<Playlist/>}/>
                <Route path="/data" element={<Data/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default  App;