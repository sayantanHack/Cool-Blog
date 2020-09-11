import React from "react";
import {Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Box, makeStyles, Typography, Avatar} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    blogContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 700,
        paddingBottom: theme.spacing(3)
    }, 
    card: {
        maxWidth: "100%"
    },
    media: {
        height: 240
    },
    CardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"  
    },
    author: {
        display: "flex"
    }
}));

function GridContent(){

const classes = useStyle();
    return(
        <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://images.unsplash.com/photo-1554825203-68321ddde262?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=977&q=80"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                         Benefits of Avocado
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.CardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            GUYS Name
                                        </Typography>
                                        <Typography variant="subtitle2" color="" component="p">
                                            GUYS Name
                                        </Typography>
                                    </Box>
                                </Box>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                More
                                </Button>
                            </CardActions>
                        </Card>
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