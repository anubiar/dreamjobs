import React,{useState} from 'react';

import {Card,CardContent,CardActions,CardMedia,Collapse,Grid,IconButton,Link,Typography} from '@material-ui/core';
import clsx from 'clsx';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Config from "../../config/config";
import Button from "@material-ui/core/Button";

import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../../redux/reducers";
import {Color} from "../../config/Colors";
import Loader from "react-loader-spinner";
import {useHistory} from "react-router";


const PositionItem = ({salary,positionName} : any) =>{
    const classes = useStyles();
    const theme = useTheme();
    const navigation = useHistory();
    const dispatch = useDispatch();

    return (
        <div className={classes.mainDiv}>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>

                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant='h5' component='h2'>
                            Position:{positionName}
                        </Typography>
                        <Typography>
                            Salary:{salary}
                        </Typography>
                        
                    </CardContent>
                </Card>
                
            </Grid>
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    mainDiv:{
        marginTop:100,
        marginBottom:100,
        margin:'0px auto',
    },
    cardHeader: {
        display : 'flex',
        flexDirection: 'row',
        justifyContent : 'space-between'
    },
    detailDiv: {
        display : 'flex',
        flexDirection: 'row',
    },
    card: {
        // height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    thumbnail: {
        width: 25,
        height:25,
        borderRadius:35,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));


export default PositionItem;