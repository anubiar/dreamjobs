import { AddGeneralInformation } from "./addGeneralInformation";
import PageNotFound from "../../screens/pageNotFound/PageNotFound";
import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import { Form, Formik } from "formik";

import { EmployeeInitialValues } from "../../initialValues/employeeInitialValues";
import createEmployeeValidation from "../../validation/createEmployeeValidation";
import { AddExperience } from "./addExperience";
import { AddEducation } from "./addEducation";

const steps = ["General information", "Education", "Experience", "Skills"];

function _renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddGeneralInformation />;
    case 1:
        return <AddEducation />
    case 2:
        return <AddExperience />
    default:
      return <PageNotFound />;
  }
}

const CreateEmployeeProfile = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const isLastStep = activeStep === steps.length - 1;
  const currentValidationSchema = createEmployeeValidation[activeStep];
  async function submitForms(values: any, actions: any) {
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function handleSubmit(values: any, actions: any) {
    isLastStep ? submitForms(values, actions) : setActiveStep(activeStep + 1);
    actions.setTouched({});
    actions.setSubmitting(false);
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
  }
  return (
    <>
      <Typography>Let's make a profile for you</Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <Typography>All set right</Typography>
        ) : (
          <Formik
            initialValues={EmployeeInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {_renderStepContent(activeStep)}
                <div>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack}>Back</Button>
                  )}
                  <div>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      //   className={classes.button}
                    >
                      {isLastStep ? "Place order" : "Next"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        // className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </>
    </>
  );
};

export default CreateEmployeeProfile;
