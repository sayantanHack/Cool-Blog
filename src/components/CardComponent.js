import React from "react";
import { makeStyles, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Box, Typography, Avatar} from "@material-ui/core";

const useStyle = makeStyles((theme)=>({
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

function CardComponent(props){

    const classes = useStyle()
    return (
        <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1554825203-68321ddde262?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=977&q=80"
            title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                     {props.boxtitle}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.boxabout}
                </Typography>
            </CardContent>
        </CardActionArea>

        <CardActions className={classes.CardActions}>
            <Box className={classes.author}>
                <Avatar src="" />
                <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                        {props.username}
                    </Typography>
                    <Typography variant="subtitle2" color="" component="p">
                        {props.userprofession}
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
    )
}

export default CardComponent;