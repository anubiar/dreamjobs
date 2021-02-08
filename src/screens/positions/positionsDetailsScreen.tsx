import { Container, makeStyles, Slide, TextareaAutosize, Theme, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import Config from '../../config/config';
import ApiService from '../../services/api';
import Dialog from "@material-ui/core/Dialog";
import { TransitionProps } from '@material-ui/core/transitions/transition';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {children?: React.ReactElement},
    ref: React.Ref<unknown>,
){
    return <Slide direction="up" ref={ref} {...props}/>
})


export interface vacantPositionPublicType{
    vacantPositionId : number,
    positionName : string,
    positionDescription : string,
    isRemote : boolean,
    salary : number,
    country : string,
    tags : any[],
    employerProfileImage: any,
    employerId : number
}

const PositionDetailsScreen = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigation = useHistory();
    const {pathname} = location;
    const classes = useStyles();
    const [open,setOpen] = useState(false);

    const [isLoading,setIsLoading] = useState<boolean>(true);
    const [position,setPosition] = useState<vacantPositionPublicType | null>(null);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const id = pathname.substring(pathname.lastIndexOf('/') + 1);
                const response = await ApiService.get(`vacantposition/${id}`,{});
                console.log(response);
                setPosition(response.position);
            } catch (e) {
                navigation.replace('/pageNotFound')
            }
            finally{
                setTimeout(() => setIsLoading(false),500);
        }})()
    },[pathname])


    return(
        isLoading
        ?
        <div className={classes.center}>
            <Loader type="Puff"/>
        </div>
        :
        <Container maxWidth="md" className={classes.container}>
            <img src={position?.employerProfileImage ? `${Config.sourceUrl}/Images/${position.employerProfileImage}` : require('../../assets/placeholder.svg')} />
            <Typography>
              Name :  {position?.positionName}
            </Typography>
            <Typography>
              Description :  {position?.positionDescription}
            </Typography>
            {
                position?.salary
                ?
                <Typography>
                Salary :  {position?.salary}
                </Typography>
                :
                null
            }
            
            
            <Typography>
              Country :  {position?.country}
            </Typography>
            
        </Container>
    )
}

const useStyles = makeStyles((theme : Theme) => ({
    center: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    container:{
        marginTop: 100,
        marginBottom: 100
    },
    appbar:{
        position: 'relative',

    },
    title:{
        marginLeft: theme.spacing(2),
        flex:1
    }
}))

export default PositionDetailsScreen;