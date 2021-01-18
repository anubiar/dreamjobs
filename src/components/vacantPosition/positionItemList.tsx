import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';

import PositionItem from './positionItem';



const PositionItemList = ({positionItems} : any) => {
const dispatch = useDispatch();
const classes = useStyles();



    return (
        <Container maxWidth="md" style={{marginTop: 100}}>
            <Grid container spacing={4} justify="space-around">
                {
                    positionItems.map((card : any) => <PositionItem card={card}/>)
                }
            </Grid>
        </Container>
    )
}


const useStyles = makeStyles((theme) => ({

}))

export default PositionItemList;

