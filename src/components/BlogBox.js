import React from "react";
import {Box, Container, makeStyles, Typography } from "@material-ui/core";
import GridContent from "./GridContent";


const useStyle = makeStyles((theme)=>({
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1594691564350-ebcbc4d38767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1039&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
        height: 300,
        fontSize: "3em"
    }
    
    }

})

)

function BlogBox(){

    const classes = useStyle()

    return(
        <div>
            <Box className={classes.hero}>
                <Box>
                    React Blog 
                </Box>
            </Box>
            <Container maxWidth="lg" className={classes.blogContainer}>
                <Typography variant="h4" className={classes.blogTitle}>
                    Articles
                </Typography>
                <GridContent />
            </Container>
        </div>
        
    )
}

export default BlogBox;