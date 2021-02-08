import { Grid, TextField } from "@material-ui/core";
import { useFormikContext } from "formik";
import React from "react";
import  DatePickerField  from "../pickers/datepicker/DatePickerField";


const AddExperience = (props : any) => {
    const {errors,values,touched,handleBlur,handleChange} = useFormikContext<any>();
    return(
        <>
            <Grid container>
                <Grid item>
                    <TextField value={values.lastPost} label="Last Post Name" name='lastPost' onChange={handleChange} onBlur={handleBlur}  helperText={(errors.lastPost && touched.lastPost) && errors.lastPost}/>
                </Grid>
                <Grid item>
                    <TextField value={values.companyName} label="Company Name" name="companyName" onChange={handleChange} onBlur={handleBlur}  helperText={(errors.companyName && touched.companyName) && errors.companyName}/>
                </Grid>
                <Grid item>
                    <TextField value={values.companyAdress} label="Company Adress" name="companyAdress" onChange={handleChange} onBlur={handleBlur}  helperText={(errors.companyAdress && touched.companyAdress) && errors.companyAdress}/>
                </Grid>
                <Grid item>
                    <DatePickerField value={values.startDate} label="Starting Date" name='startDate' onChange={handleChange} onBlur={handleBlur}  />
                </Grid>
                
                <Grid item>
                    <DatePickerField value={values.endDate} label="Ending Date"name='endDate' onChange={handleChange} onBlur={handleBlur} />
                </Grid>
                

            </Grid>
        </>
    )
}


export {AddExperience};