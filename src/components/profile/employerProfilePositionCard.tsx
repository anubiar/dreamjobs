import React from 'react';

import {Button, Card, CardContent, IconButton, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, Paper, Typography} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { onDeletePosition } from '../../redux/actions/profileEmployerActions';
import { ApplicationState } from '../../redux/reducers';
import Loader from 'react-loader-spinner';



const EmployerProfileCard = ({position: {positionName,vacantPositionId}} : any) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {inProgressDeleting,deletingPositionId} = useSelector((state : ApplicationState) => state.profileEmployerReducers);

    const handleDeletePosition = () => {
        dispatch(onDeletePosition(vacantPositionId));
    }

    return(
        // <Card className={classes.root}>
        //     <CardContent>
        //         <Typography>
        //             {positionName}
        //         </Typography>

        //         <IconButton>
        //             <DeleteIcon />
        //         </IconButton>
        //     </CardContent>
        // </Card>
        <Paper>
            <ListItem className={classes.listitem}>
            <ListItemText primary={positionName}/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={handleDeletePosition}>
                    {   deletingPositionId === vacantPositionId
                        ?
                        <Loader type="Rings" height={24} width={24}/>
                        :
                        <DeleteIcon />
                    }
                </IconButton>
            </ListItemSecondaryAction>
            </ListItem>
        </Paper>
        
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: 100
    },
    listitem:{
        marginTop: 40
    }
}

))


export default EmployerProfileCard;