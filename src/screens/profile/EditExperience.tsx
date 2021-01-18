import React,{useRef} from 'react';
import * as yup from 'yup';

import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Container, CssBaseline, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { ApplicationState } from '../../redux/reducers';
import { onUpdateProfile } from '../../redux/actions/profileEmployeeActions';


//@ts-ignore
import { Bounce } from 'react-activity';

const validationSchema = yup.object().shape({
    lastPost : yup.string().
    label("lastPost")
    .required("Please enter your last post")
    .min(5,"Post name must be at least 3 characters")
    .max(20,"Post name must be max 20 charachters lentgh"),
    companyName: yup.string().label("companyName").required("Enter name of company you worked")
    .min(3,"Company name must be at least 3 characters length")
    .max(20,"Company name must be maximum 20 characters length"),
    companyAdress:yup.string().label("companyAdress").required("Enter adress of company you worked")
    .min(3,"Company adress must be at least 3 characters length")
    .max(20,"Company adress must be maximum 20 characters length"),

})


const EditExperience = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const navigation = useHistory();
    const formikRef = useRef(null);

    const {experience} = useSelector((state : ApplicationState) => state.profileEmployeeReducers);

    const onUpdateInfo = async (values : any) => {
        await dispatch(onUpdateProfile(values));
        navigation.replace('/profile')
    }

    const initialValues = {
        experience
    }

    return(
        // <Container component="main" maxWidth={'lg'}>
        <div>
            <Formik initialValues={initialValues} onSubmit= {(values) => onUpdateInfo(values)} innerRef={formikRef} validationSchema={validationSchema}>
                {
                    ({values,touched,handleBlur,handleChange,handleSubmit,errors}) => (
                        <form>
                                        <TextField variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label="Your Name"
                                    name="name"
                                    autoFocus
                                    value={values.experience.companyName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.experience && touched.experience) && errors.experience}
                                    FormHelperTextProps={{
                                        className : classes.helperText
                                    }} />
                                </form>
                    )
                            
                                
                                
                                
                               
                            
                
                }
                
            </Formik>
        </div>
            
        // </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    helperText : {
        color : '#a20606'
    },
}));
export default EditExperience;