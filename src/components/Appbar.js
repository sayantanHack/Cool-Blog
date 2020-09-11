import React from "react";
import {AppBar,Toolbar,Typography,Button, makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    appbar: {
        backgroundColor: "#fff"
    }
    
}));

function Appbar(){

    const classes = useStyle();

    return(
    <div>
     <AppBar className={classes.appbar} position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                News
            </Typography>
            <Button color="primary">Login</Button>
        </Toolbar>
     </AppBar>
    </div>
    )    
}

export default Appbar;