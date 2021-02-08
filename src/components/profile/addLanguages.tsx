

import { Fab, Grid } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { uniqueId } from 'lodash';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import {LanguageSelect} from '../pickers/select/LanguageSelect';
import { LanguageList } from './languageList';

const AddLanguages = () => {

    const [languagesList,setLanguagesList] = useState([0]);

    const {languages,languageLeveles} = useSelector((state : ApplicationState) => state.generalReducers);

    const addLanguageItem = () => {
        const id = uniqueId();
        if (languagesList.length < 5) {
            setLanguagesList((items : any) => [...items,id]);
        }
    }

    const removeLanguageItem = (id : any) => {
        languagesList.filter((item : any) => item.id !== id)
    }

    return (
        <Grid container>
            <LanguageList list={languagesList} handleRemove={removeLanguageItem} languages={languages} levels={languageLeveles}/>
            <Fab aria-label='add' onClick={addLanguageItem}>
                <Add/>
            </Fab>
        </Grid>
    )
}

export {AddLanguages};