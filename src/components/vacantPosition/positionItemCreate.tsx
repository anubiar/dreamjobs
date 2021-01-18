import React, { useRef } from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ApplicationState } from '../../redux/reducers';
import { onPostPosition } from '../../redux/actions/positionActions';
import { Button, Container, CssBaseline, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
//@ts-ignore
import { Bounce } from 'react-activity';


const initFormValue={
    positionName: '',
    salary: 0,
    positionDescription: '',
    country: '',

};


const validationSchema = yup.object().shape({
    positionName: yup.string()
    .label('positionName')
    .required("Please give a name for position you are to open")
    .min(5,"Position name needs to at 5 charachers long")
    .max(50,"Position name cannot exceed 50 charachters length"),
    salary: yup.number()
    .label('salary')
    .max(50000,"Salary number cannot exceed 50000"),
    country: yup.string()
    .required("Please select a country for your position")
    .label('country')
});




const PostVacantPositionForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const formikRef = useRef(null);


    const {inProgress} = useSelector((state :ApplicationState) => state.positionReducer);

    const onPostVacantPosition = async (values : any) => {
        await dispatch(onPostPosition(values));
        history.replace('/');
    }

    return (
        <Container component="main">
            <Formik initialValues={initFormValue} innerRef = {formikRef} validationSchema={validationSchema} onSubmit={(values) => onPostVacantPosition(values)}>
                {
                    ({values,errors,touched,handleBlur,handleChange,handleSubmit}) => (
                        <>
                            <CssBaseline>
                                <Paper>
                                    <Typography>
                                        Open position  
                                    </Typography>

                                    <form onSubmit={handleSubmit}>
                                        <TextField value={values.positionName} variant='outlined' margin='normal' fullWidth name="positionName" id="positionName" label="Position Name" autoFocus onChange={handleChange} onBlur={handleBlur} helperText={(errors.positionName && touched.positionName) && errors.positionName}/>
                                        <TextField value={values.salary} variant='outlined' margin='normal' fullWidth type="number" name="salary" id="salary" label="Salary" autoFocus onChange={handleChange} onBlur={handleBlur} helperText={(errors.salary && touched.salary) && errors.salary}/>
                                        <TextField value={values.positionDescription} variant='outlined' margin='normal' fullWidth name="positionDescription" id="positionDescription" label="Position Description" autoFocus onChange={handleChange} onBlur={handleBlur} helperText={(errors.positionDescription && touched.positionDescription) && errors.positionDescription}/>
                                        <TextField variant='outlined' margin='normal' fullWidth name="positionName" id="positionName" label="Position Name" autoFocus onChange={handleChange} onBlur={handleBlur} helperText={(errors.positionName && touched.positionName) && errors.positionName}/>
                                        <TextField variant='outlined' margin='normal' fullWidth name="positionName" id="positionName" label="Position Name" autoFocus onChange={handleChange} onBlur={handleBlur} helperText={(errors.positionName && touched.positionName) && errors.positionName}/>
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
                                            'Add Position'
                                        }
                                    </div>
                                </Button>
                                    </form>
                                </Paper>
                            </CssBaseline>
                        </>
                    )
                }
            </Formik>
        </Container>
    )
}


const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export {PostVacantPositionForm};