
import PageNotFound from "../../screens/pageNotFound/PageNotFound";
import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import { EmployeeInitialValues } from "../../initialValues/employeeInitialValues";
import createEmployeeValidation from "../../validation/createEmployeeValidation";
import { Wizard, WizardStep } from "../forms/FormWizard";
import { useDispatch } from "react-redux";
import { onCreateProfile } from "../../redux/actions/profileEmployeeActions";
import { useHistory } from "react-router";
import { AddGeneralInformation } from "./addGeneralInformation";
import { AddEducation } from "./addEducation";
import { AddExperience } from "./addExperience";
import { onGetAllGenders, onGetAllLanguageLevels, onGetAllLanguages } from "../../redux/actions/generalActions";
import { AddLanguages } from "./addLanguages";


const CreateEmployeeProfileV2 = () => {
    const dispatch = useDispatch();
    const navigation = useHistory();

    const createProfile = async (values : any) => {
        await dispatch(onCreateProfile(values));
        navigation.replace("/");
    }

    const progress = ['General','Education','Experience','Languages']

    useEffect(() => {
        dispatch(onGetAllLanguageLevels())
        dispatch(onGetAllGenders())
        dispatch(onGetAllLanguages())
        
    },[])

    return (
        <Container>
            <Wizard initialValues={EmployeeInitialValues} onSubmit={createProfile} progress={progress}>
                <WizardStep validationSchema={createEmployeeValidation[0]}>
                    {/* <AddGeneralInformation/> */}

                    <AddLanguages/>
                </WizardStep>
                <WizardStep validationSchema={createEmployeeValidation[1]}>
                    <AddEducation/>
                </WizardStep>
                <WizardStep validationSchema={createEmployeeValidation[2]}>
                    <AddExperience/>
                </WizardStep>
                <WizardStep validationSchema={createEmployeeValidation[3]}>
                    <AddLanguages/>
                </WizardStep>
            </Wizard>
        </Container>
    )
}

export default CreateEmployeeProfileV2;