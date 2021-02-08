import { Fab, FormControl, FormHelperText, Grid, IconButton, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useField } from "formik";
import RemoveIcon from '@material-ui/icons/Remove';
import React from "react";
import {at} from 'lodash';


const LanguageSelect = (props : any) => {
    const [field,meta] = useField(props);
    const {id,item,handleRemove,languages,levels, ...otherProps} = props;
    const { value: selectedValue } = field;
    const [touched, error] = at(meta, 'touched', 'error');
    const isError = touched && error && true;
    function _renderHelperText() {
        if (isError) {
        return <FormHelperText>{error}</FormHelperText>;
        }
    }
  
    return(
            <FormControl {...otherProps}>
                <Select  {...field} value={selectedValue ? selectedValue : ''}>
                    {
                        languages.map(({index,item} : any) => (
                            <MenuItem key={index} value={index}>{item}</MenuItem>
                        ))
                    }
                </Select>
                <Select  {...field} value={selectedValue ? selectedValue : ''}>
                {
                        levels.map(({index,item} : any) => (
                            <MenuItem key={index} value={index}>{item}</MenuItem>
                        ))
                    }
                </Select>
                <Fab  aria-label='remove' onClick={() => handleRemove(item.id)}>
                    <RemoveIcon/>
                </Fab>
                {_renderHelperText()}
            </FormControl>
    )
}

export {LanguageSelect};