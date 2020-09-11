import React from "react";
import {Box, makeStyles} from "@material-ui/core";
//import useStyle from "./Appbar";


const useStyle = makeStyles((theme)=>({
    hero: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5) 
        url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJ
        hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80')
        )`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
    }

})

)

function BlogBox(){

    const classes = useStyle()

    return(
        <Box className={classes.hero}>
            <Box>
                React Blog 
            </Box>
    </Box>
    )
}

export default BlogBox;