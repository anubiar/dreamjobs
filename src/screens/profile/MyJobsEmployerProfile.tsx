import { Container, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import EmployerProfileHeader from "../../components/profile/EmloyerProfileHeader";
import EmployerPositionProfileList from "../../components/profile/employerProfilePositionList";
import { Color } from "../../config/Colors";
import { onGetEmployerProfileData } from "../../redux/actions/profileEmployerActions";
import { ApplicationState } from "../../redux/reducers";



const MyJobsEmployerProfileScreen = () => {
    const dispatch = useDispatch();
    const {inProgress} = useSelector((state : ApplicationState) => state.profileEmployerReducers);
    const classes = useStyles();
    useEffect(() => {
        dispatch(onGetEmployerProfileData());
    },[]);
    return(
        <>
            {
            inProgress
            ?
            <div className={classes.center}>
                    <Loader type={'Puff'} color={Color.secondaryColor}/>
            </div>
            :
            <>
            <EmployerProfileHeader />
            <EmployerPositionProfileList />
            </>
        }
        </>
        
        
    )
}
const useStyles = makeStyles((theme) => ({
    center : {
        position: "absolute",
        left: '50%',
        right: '50%',
        transform: 'translate(-50%,-50%)'
    }
}))
export default MyJobsEmployerProfileScreen;