import { Grid, TextField } from "@material-ui/core";
import { useField, useFormikContext } from "formik";
import React from "react";
import DatePickerField from "../pickers/datepicker/DatePickerField";



const AddEducation = (props : any) => {
    // const {institutionName,institutionAdress,educationStart,educationEnd,formType} = props
    // const [field,meta,helper] = useField(props);
    // const {touched,error} = meta;
    // const {setValue} = helper;
    // const isError = touched && error && true;
    // const {value} = field;

    const {errors,values,touched,handleBlur,handleChange} = useFormikContext<any>();
    return (
        <Grid container>
            <Grid item>
                <TextField name='institutionName' label='Institution Name'  id='institutionName' value={values.institutionName} onChange={handleChange} onBlur={handleBlur}  helperText={(errors.institutionName && touched.institutionName) && errors.institutionName}/>
            </Grid>
            <Grid item>
                <TextField name='institutionAdress' label='Instittution Adress' id='institutionAdress'value={values.institutionAdress} onChange={handleChange} onBlur={handleBlur}  helperText={(errors.institutionAdress && touched.institutionAdress) && errors.institutionAdress}/>
            </Grid>
            <Grid item>
                <DatePickerField label='Starting Date' name='educationStart' format='yyyy' views={['year']} onChange={handleChange} onBlur={handleBlur}  helperText={(errors.educationStart && touched.educationStart) && errors.educationStart}/>
            </Grid>
            <Grid>
                <DatePickerField label='Ending Date' name='educationEnd' format='yyyy' views={['year']} onChange={handleChange} onBlur={handleBlur}  helperText={(errors.educationEnd && touched.educationEnd) && errors.educationEnd}/>
            </Grid>
        </Grid>
    )
}

export {AddEducation};