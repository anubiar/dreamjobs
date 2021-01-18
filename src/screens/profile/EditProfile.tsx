import React,{useEffect, useRef} from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { ApplicationState } from '../../redux/reducers';
import { onGetEmployeeProfileData, onUpdateProfile } from '../../redux/actions/profileEmployeeActions';

//@ts-ignore
import { Bounce } from 'react-activity';
import { DropzoneArea } from 'material-ui-dropzone';


const validationSchema = yup.object().shape({
    lastName: yup.string()
        .label('lastName')
        .required('Please enter last name ')
        .min(3, 'Last Name must be at least 3 characters')
        .max(20,'Last Name must be at most 20 characters'),
    birthDate: yup.date()
        .label('bithDate')
        .required('Please enter your birth date '),
    adress: yup.string()
        .label('adresss')
        .required('Please enter adress ')
        .min(3, 'adress must be at least 3 characters')
        .max(20,'adress must be at most 20 characters'),
    phone: yup.string()
        .label('phone')
        .required('Please enter your phone')
        .min(7,'Phone number must be at least 7 digits')
        .max(20,'Phone number must be at most 20 digits'),
    name: yup.string()
        .label('userName')
        .required('Please enter your Name')
        .min(3,'Name must be at least 3 characters')
        .max(20,'Name must be at most 20 characters'),
    imagePath : yup.array()
        .label('imagePath')
        .max(1,'No more than 1 image'),
})




const EditProfile = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const navigation = useHistory();
    const formikRef = useRef<any>(null);

    useEffect(() => {
        dispatch(onGetEmployeeProfileData())
    },[])  
    const {name,email,phone,lastName,birthDate,gender,adress,inProgress,imagePath} = useSelector((state:ApplicationState) => state.profileEmployeeReducers);
    
    const initialFormValue = {
        name,
        phone,
        email,
        lastName,
        gender,
        birthDate,
        adress,
        imagePath
    }

    const onUpdateInfo = async (values : any) => {
        await dispatch(onUpdateProfile(values));
        navigation.replace('/profile')
    }
    return(
        <Container component="div" maxWidth="lg">
            <Formik innerRef={formikRef}
            initialValues = {initialFormValue}
            validationSchema = {validationSchema}
            onSubmit = {(values) => onUpdateInfo(values)}
            
            >
                {
                    ({values,touched,errors,handleChange,handleBlur,handleSubmit}) => (

                        <>
                        <CssBaseline/>
                        <div className={classes.paper}>
                            <Typography component='h1' variant='h5'>
                                Edit Profile
                            </Typography>
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <Grid xs={3} sm={4} md={6} lg={12}>
                                    <Grid item xs>
                                    <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label="Your Name"
                                    name="name"
                                    autoFocus
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.name && touched.name) && errors.name}
                                    FormHelperTextProps={{
                                        className : classes.helperText
                                    }}
                                    contentEditable = {false}
                                />
                                    </Grid>
                                <Grid item xs> 
                                    <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="phone"
                                    type="number"
                                    label="Your phone number"
                                    name="phone"
                                    autoFocus
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.phone && touched.phone) && errors.phone}
                                    FormHelperTextProps={{
                                        className : classes.helperText
                                    }}
                                /></Grid>
                               
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="lastName"
                                    label="Your Last Name"
                                    name="lastName"
                                    autoFocus
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.lastName && touched.lastName) && errors.lastName}
                                    FormHelperTextProps={{
                                        className : classes.helperText
                                    }}
                                />
                                <DropzoneArea
                                    acceptedFiles={['image/*']}
                                    filesLimit={1}
                                    dropzoneText={"Drag and drop your new thumbnail here or click"}
                                    onChange={(image) => formikRef?.current?.setFieldValue('imagePath',image)}
                                />
                                {(errors.imagePath&&touched.imagePath) && errors.imagePath ?
                                    <p className={classes.helperText} style={{paddingLeft:15,fontSize:12,marginBottom:-15}}>
                                        {(errors.imagePath&&touched.imagePath) && errors.imagePath}
                                    </p>
                                    : null}
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    <div style={{minHeight:25}}>
                                        {inProgress ?
                                            <div style={{paddingTop:10}}>
                                                <Bounce />
                                            </div>
                                            :
                                            'Edit Profile'
                                        }
                                    </div>
                                </Button>
                                </Grid>
                                
                            </form>
                        </div>
                    </>
                    )
                }
            </Formik>
        </Container>
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

export default EditProfile;
