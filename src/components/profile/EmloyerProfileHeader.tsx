import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Config from '../../config/config';
import useWindowDimensions from '../../hooks/useWindowDimenstions';
import { ApplicationState } from '../../redux/reducers';



const EmployerProfileHeader = () => {
    const navigation = useHistory();
    const {height,width} = useWindowDimensions();
    const classes = useStyles({width,height})();
    const dispatch = useDispatch();

    const {positions,imagePath,fiscalCode,companyAdress,companyPhone,nameCompany} = useSelector((state : ApplicationState) => state.profileEmployerReducers);

    return(
        <div className={classes.mainDiv}>
            <div className={classes.line}>
                <div className={classes.flexDiv}>
                    <div>
                        <img className={classes.thumbnail} src={imagePath ? `${Config.sourceUrl}/Images/${imagePath}` : require('../../assets/placeholder.svg')}/>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.userName}>
                            <Typography >{nameCompany}</Typography>

                        </div>
                        <h3>{companyAdress}</h3>
                        <h5>{companyPhone}</h5>
                        <h5>{fiscalCode}</h5>
                        <h6>{positions.length} Positions</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = ({width = 0, height = 0} : any)  => makeStyles(() => ({
    mainDiv:{
        marginTop:65,
        maxWidth:650,
        margin:'0px auto',
        backgroundColor:'#eeeeee',
    },
    flexDiv:{
        display:'flex',
        justifyContent:'space-around',
    },
    info : {
        marginLeft:-150
    },
    thumbnail:{
        marginTop:10,
        width:220,
        height:220,
        borderRadius:220
    },
    line : {
        margin:'18px 0px',
        borderBottom:'1px solid grey',
    },
    postsInfo : {
        display:'flex',
        justifyContent:'space-between',
        width:'108%'
    },
    userName: {
        display:'flex',
        justifyContent:'space-between',
        width:'108%'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textModal:{
        color:'white'
    }
}));

export default EmployerProfileHeader;