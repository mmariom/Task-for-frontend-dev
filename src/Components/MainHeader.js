import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {  Link } from "react-router-dom";
import  '../styles/dateForm.css'



function MainHeader(props) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'center' }}>

                    <Typography variant="h6" component="div" >
                        Weather in London
                    </Typography>

                    <Box sx={{ ml: 5 }}>
                        <Link to="/">
                            <button  className="button-55" role="button"> Home</button>
                        </Link>

                        <Link to="/convertor">
                            <button  className="button-55" role="button"> Convertor</button>
                        </Link>
                    </Box>


                </Toolbar>
            </AppBar>
        </Box>
    );

}

export default MainHeader;



