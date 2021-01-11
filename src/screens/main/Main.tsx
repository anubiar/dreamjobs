import React, {useEffect} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../../redux/reducers";
import {makeStyles} from "@material-ui/core/styles";
import Loader from "react-loader-spinner";
import { onGetPositionsMain } from "../../redux/actions/positionActions";
import { Color } from "../../config/Colors";
import PositionItem from "../../components/vacantPosition/positionItem";
import EditProfile from "../profile/EditProfile";


const Main = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const {PositionsMain,inProgressPositionsMain} = useSelector((state:ApplicationState) => state.positionReducer);
    

    useEffect(() => {
        dispatch(onGetPositionsMain())
    },[])

    return (
        <div>
            {inProgressPositionsMain ?
                <div className={classes.center}>
                    <Loader type={'Puff'} color={Color.secondaryColor}/>
                </div>
                :
                <div>
                    
                    {
                        
                        PositionsMain.map((position : any) => {
                            console.log(position);
                            console.log(PositionsMain);
                            return(
                                <PositionItem
                                key={position.vacantPositionId.toString()}
                                salary={position.salary}
                                positionName = {position.positionName}
                                country = {position.country}
                                tags = {position.tags}

                                />
                            )
                        })
                    }
                   
                    
                    <EditProfile/>
                </div>
                

            }
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    center: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
}));

export default Main;
