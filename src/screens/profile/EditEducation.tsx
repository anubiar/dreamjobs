import { Button, Grid, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup  from 'yup';
import DatePickerField from '../../components/pickers/datepicker/DatePickerField';
import { ApplicationState } from '../../redux/reducers';
import ApiService from '../../services/api';

const validationSchema = yup.object().shape({
    institutionName : yup.string()
    .required('Institution Name required')
    .label('institutionName')
    .max(50,'max 50 characters')
    .min(3,'min 3 characters'),
    institutionAdress : yup.string()
    .required('Institution Adress required')
    .label('institutionAdress')
    .max(50,'max 50 characters')
    .min(3,'min 3 characters'),
    educationStart : yup.date()
    .required('Date required')
    .label('educationStart'),
    educationEnd : yup.date()
    .required('Date required')
    .label('educationEnd')
})

const EditEducation = () => {
    const dispatch = useDispatch();

    const {education} = useSelector((state : ApplicationState) => state.profileEmployeeReducers);

    const initialValues = {
        institutionName: education.institutionName,
        institutionAdress: education.institutionAdress,
        educationStart : education.educationStart,
        educationEnd : education.eduacationEnd
    }

    const onSubmit = async (values : any) => {
        await ApiService.post('/update/education',values);
    }

    return(
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {
                    ({values,errors,touched,handleChange,handleBlur,handleSubmit}) => (
                            <Form>
                                <Grid container>
                                    <Grid item>
                                        <TextField label='Institution Name' value={values.institutionName} id='institutionName' onBlur={handleBlur} onChange={handleChange}/>
                                    </Grid>
                                    <Grid>
                                        <TextField value={values.institutionAdress} label='Institution Adress' id='institutionAdress' onBlur={handleBlur} onChange={handleChange}/>
                                    </Grid>
                                    <Grid item>
                                        <DatePickerField value={values.educationStart}/>
                                    </Grid>
                                    <Grid item>
                                        <Button type='submit'>
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        
                    )
                }
            </Formik>
        </div>
    )
}


export {EditEducation};