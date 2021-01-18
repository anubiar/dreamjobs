import React,{useState} from 'react';

import {Card,CardContent,CardActions,CardMedia,Collapse,Grid,IconButton,Link,Typography, Paper, CardActionArea} from '@material-ui/core';
import clsx from 'clsx';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Config from "../../config/config";
import Button from "@material-ui/core/Button";

import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../../redux/reducers";
import {Color} from "../../config/Colors";
import Loader from "react-loader-spinner";
import {useHistory} from "react-router";


const PositionItem = ({card: {positionName,salary,country}} : any) =>{
    const classes = useStyles();
    const theme = useTheme();
    const navigation = useHistory();
    const dispatch = useDispatch();

    return (
      <div>
          <Grid item>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1610559145677-d4a640a1a6c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80s" />
                    <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h6" component="p">
                        Position:{positionName}
                    </Typography>
                    <Typography>Salary:{salary}</Typography>
                    <Typography>Country:{country}</Typography>

                    </CardContent>
                
                </CardActionArea>
            </Card> 

        </Grid>
      </div>
        
        
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    content: {
        maxWidth: 455
    },
    media: {
        height: 200
    }
}));


export default PositionItem;