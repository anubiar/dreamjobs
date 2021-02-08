import { Container, Grid, List, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import EmployerProfileCard from './employerProfilePositionCard';


const EmployerPositionProfileList = () => {

    const classes = useStyles();
    const {positions} = useSelector((state : ApplicationState) => state.profileEmployerReducers)
    return(
        <Container className={classes.root}>
            <List dense={false}>
                {
                    positions.map((position : any) => <EmployerProfileCard position={position}/>)
                }
            </List>
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: 100,
        marginBottom: 100
    }
}))

export default EmployerPositionProfileList;