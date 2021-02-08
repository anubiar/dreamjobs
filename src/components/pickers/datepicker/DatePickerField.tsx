import React,{useEffect, useState} from 'react';

import { useField } from 'formik';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import LuxonUtils from '@date-io/luxon';


const DatePickerField = (props : any) => {
    const [field,meta,helper] = useField(props);
    const {date} = props;
    const {touched,error} = meta;
    const {setValue} = helper;
    const isError = touched && error && true;
    const {value} = field;
    const [selectedDate,setSelectedDate] = useState<Date | null>(date);

    useEffect(() => {
        if(value){
            const date = new Date(value);
            setSelectedDate(date);
        }
    },[value]);

    function _onChange(date : Date) {
        if (date) {
          setSelectedDate(date);
          try {
            const ISODateString = date.toISOString();
            setValue(ISODateString);
          } catch (error) {
            setValue(date);
          }
        } else {
          setValue(date);
        }
      }
    
      return (
        <Grid container>
          <MuiPickersUtilsProvider utils={LuxonUtils}>
            <KeyboardDatePicker
              {...field}
              {...props}
              value={selectedDate}
              onChange={_onChange}
              error={isError}
              invalidDateMessage={isError && error}
              // helperText={isError && !!error}
              
            />
          </MuiPickersUtilsProvider>
        </Grid>
      );

}



export default DatePickerField;