import { Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { Formik, useField, useFormikContext } from "formik";
import { DropzoneArea } from "material-ui-dropzone";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from 'yup';
import { ApplicationState } from "../../redux/reducers";
import DatePickerField from "../pickers/datepicker/DatePickerField";


const AddGeneralInformation = (props : any) => {
    // const {name,lastName,adress,genderId,birthDate} = props
    // const dispatch = useDispatch();
    // const [field,meta,helper] = useField(props);
    // const {touched,error} = meta;
    
    // const isError = touched && error && true;
    // const {value} = field;

    const {errors,values,touched,handleBlur,handleChange} = useFormikContext<any>();
    const {genders} = useSelector((state : ApplicationState) => state.generalReducers);
    return(
        <Grid container >
            <Grid item lg={12}>
                <DropzoneArea/>
            </Grid>
            <Grid item lg={6}>
                <TextField  value={values.name} label='name' name='name'  onChange={handleChange} onBlur={handleBlur}  helperText={(errors.name && touched.name) && errors.name}/>
            </Grid>
            <Grid item lg={6}>
                <TextField value={values.lastName} label='lastName' name="lastName" onChange={handleChange} onBlur={handleBlur}  helperText={(errors.lastName && touched.lastName) && errors.lastName}/>
            </Grid>
            <Grid item lg={6}>
                <TextField value={values.adress} label='adress' name="adress" onChange={handleChange} onBlur={handleBlur}  helperText={(errors.adress && touched.adress) && errors.adress}/>
            </Grid>
            <Grid item>
                <DatePickerField name="birthDate" label='Birth Date' format='yyyy' views={['year']}/>
            </Grid>
            <Grid item>
                <FormControl>
                    <InputLabel id='genderId-label'>Gender</InputLabel>
                    <Select  labelId='genderId-label' onChange={handleChange} onBlur={handleBlur} name="genderId" value={values.genderId}>
                        {
                            genders.map((option) => (
                                <MenuItem key={option.genderId} value={option.genderId}>
                                    {option.genderName}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}


export {AddGeneralInformation};