import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';

import PositionItem from './positionItem';



const PositionItemList = ({positionItems} : any) => {
const dispatch = useDispatch();
const classes = useStyles();



    return (
        <Container maxWidth="md" className={classes.container}>
            <Grid container spacing={4} justify="space-around">
                {
                    positionItems.map((card : any) => <PositionItem key={card.vacantPositionId.toString()} card={card}/>)
                }
            </Grid>
        </Container>
    )
}


const useStyles = makeStyles((theme) => ({
    container:{
        marginTop: 100,
        marginBottom: 100
    }
}))

export default PositionItemList;

