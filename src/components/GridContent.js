import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import CardComponent from "./CardComponent";

const useStyle = makeStyles((theme) => ({
    blogContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 700,
        paddingBottom: theme.spacing(3)
    }
    
}));

function GridContent(){

const classes = useStyle();
    return(
        <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardComponent boxtitle="Benefits of Avocado" boxabout="This fruit is prized 
                        for its high nutrient value and is added to various dishes due to its 
                        good flavor and rich texture. It is the main ingredient in guacamole." 
                        username="Rohan Roy" userprofession ="Food bloger"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        
                    </Grid>
                </Grid>
    )
}

export default GridContent;