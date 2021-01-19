import React, { useEffect, useRef } from 'react';
import * as yup from "yup";
import {Formik} from 'formik';
import { Button, Container, InputAdornment, makeStyles, MenuItem, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { onUpdateEmployerProfile } from '../../redux/actions/profileEmployerActions';
import { useHistory } from 'react-router';
//@ts-ignore
import { Bounce } from 'react-activity';
import { ApplicationState } from '../../redux/reducers';
import { DropzoneArea } from 'material-ui-dropzone';
import { onGetAllCompanyTypes } from '../../redux/actions/generalActions';
import Loader from 'react-loader-spinner';

const initialValues = {
        companyName : '',
        companyAdress : '',
        companyNumber : '',
        fiscalCode : '',
        companyRepresentant: '',
        typeId : '',
        imagePath: []
}
const validationSchema = yup.object().shape({
    companyName: yup.string()
    .label("companyName")
    .required("Please give the name of your company")
    .min(5,"Company name must be at least 5")
    .max(50,"Company name must be maximum 50 characters"),
    companyAdress: yup.string()
    .label("companyAdress")
    .required("Adress of company not provided")
    .min(5,"Min 5 characters")
    .max(50,"Max 50 characters"),
    companyNumber: yup.string()
    .label("companyNumber")
    .required("Provide a phone number")
    .trim()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,"Number should be of format +(123)-456-67-89"),
    fiscalCode : yup.string()
    .label("fiscalCode")
    .min(13,"Must be 13 characters")
    .max(13,"13 character"),
    companyRepresentant: yup.string()
    .label("companyRepresentant"),
    typeId: yup.string()
    .label("typeId")
    .required("Please select company type"),
    imagePath : yup.array()
        .label('imagePath')
        .max(1,'No more than 1 image'),
    
});
const CreateEmployerProfile = () => {
    const formikRef = useRef<any>(null);
    const dispatch = useDispatch();
    const classes = useStyles();
    const navigation = useHistory();
    const onCreateEmployerProfile = async (values : any) => {
        console.log(values);
        await dispatch(onUpdateEmployerProfile(values));
        console.log(values);
        navigation.replace("/");
    } 
   
    const {inProgress} = useSelector((state : ApplicationState) => state.profileEmployerReducers);
    const {isLoadingCompanyTypes,companyTypes} = useSelector((state : ApplicationState) => state.generalReducers);

    useEffect(() => {
        dispatch(onGetAllCompanyTypes());
    },[])

    return(
        <div>
            <Container className={classes.root} maxWidth={'md'}>
                <Formik initialValues={initialValues} innerRef={formikRef} validationSchema={validationSchema} onSubmit={(values) => onCreateEmployerProfile(values)}>
                {
                    ({errors,values,touched,handleBlur,handleChange,handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <DropzoneArea
                                    acceptedFiles={['image/*']}
                                    filesLimit={1}
                                    dropzoneText={"Drag and drop an image here or click"}
                                    onChange={(image) => formikRef?.current?.setFieldValue('imagePath',image)}
                                />
                                {(errors.imagePath&&touched.imagePath) && errors.imagePath ?
                                <p className={classes.helperText} style={{paddingLeft:15,fontSize:12,marginBottom:-15}}>
                                    {(errors.imagePath&&touched.imagePath) && errors.imagePath}
                                </p>
                                : null}
                            <TextField value={values.companyName} variant="outlined" margin="normal" fullWidth name="companyName" id="companyName" label="Company Name" autoFocus onChange={handleChange} onBlur={handleBlur} helperText={(errors.companyName && touched.companyName) && errors.companyName}/>
                            <TextField value={values.companyRepresentant} variant="outlined" margin="normal" fullWidth name="companyRepresentant" id="companyRepresentant" label="Company Representant"  onChange={handleChange} onBlur={handleBlur}/>
                            <TextField value={values.companyAdress} variant="outlined" margin="normal" fullWidth name="companyAdress" id="companyAdress" label="Company Adress"  onChange={handleChange} onBlur={handleBlur} helperText={(errors.companyAdress && touched.companyAdress) && errors.companyAdress}/>
                            <TextField value={values.companyNumber} variant="outlined" margin="normal" fullWidth name="companyNumber" id="companyNumber" label="Company Phone Number"  onChange={handleChange} onBlur={handleBlur} helperText={(errors.companyNumber && touched.companyNumber) && errors.companyNumber}/>
                            <TextField value={values.fiscalCode} variant="outlined" margin="normal" fullWidth name="fiscalCode" id="fiscalCode" label="Company Tax Number"  onChange={handleChange} onBlur={handleBlur} helperText={(errors.fiscalCode && touched.fiscalCode) && errors.fiscalCode}/>
                            <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    name="typeId"
                                    label="Type"
                                    select
                                    id="typeId"
                                    InputLabelProps={{
                                        shrink: !isLoadingCompanyTypes,
                                    }}
                                    InputProps={{
                                        readOnly: isLoadingCompanyTypes,
                                        startAdornment: isLoadingCompanyTypes ? (
                                            <InputAdornment position="start">
                                                <Loader height={15} width={15} type={"Circles"} color={'#a50101'}/>
                                            </InputAdornment>
                                        ) : null,
                                    }}
                                    value={values.typeId}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.typeId&&touched.typeId) && errors.typeId}
                                    FormHelperTextProps={{
                                        className : classes.helperText
                                    }}
                                >
                                    {companyTypes.map((option) => (
                                        <MenuItem key={option.companyTypeId} value={option.companyTypeId}>
                                            {option.typeName}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                
                            <Button type='submit' fullWidth variant="contained">
                                <div style={{minHeight:25}}>
                                    {
                                        inProgress
                                        ?
                                        <div style={{paddingTop:10}}>
                                            <Bounce/>
                                        </div>
                                        
                                        :
                                        "Submit"
                                    }
                                    
                                </div>
                               
                            </Button>
                        </form>
                    )
                }
                </Formik>
            </Container>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: 100,
        marginBottom: 100,
        
    },
    helperText : {
        color : '#a20606'
    }
}));

export default CreateEmployerProfile;
