import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { ReactChild, ReactElement, ReactNodeArray, ReactPropTypes, useRef, useState } from "react";
import { EmployeeProfileCreate } from "../../initialValues/employeeInitialValues";

// interface ValidProps{
//     children?: React.ReactElement<any>,
//     onSubmit: any,
//     initialValues : EmployeeProfileCreate,
//     progress : string[]
// }

const Wizard = ({ children, onSubmit, initialValues, progress}: any) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapShot, setSnapShot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values: any) => {
    setSnapShot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = (values: any) => {
    setSnapShot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };
 
  const formikRef = useRef(null); 
  const handleSubmit = async (values: any, bag: any) => {
    if (React.isValidElement<{onSubmit: any}>(step) &&  step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <>
      <Typography>Let's make a profile for you</Typography>
      <Stepper activeStep={stepNumber}>
        {progress.map((label: string) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Formik
        innerRef={formikRef}
        initialValues={snapShot}
        onSubmit={handleSubmit}
        validationSchema={React.isValidElement<{validationSchema: any}>(step) ? step.props.validationSchema : null}
      >
        {(formik) => (
          <Form>
            
            { step }
            <div style={{ display: "flex" }}>
              {stepNumber > 0 && (
                <Button onClick={() => previous(formik.values)} type="button">
                  Back
                </Button>
                
              )}
              <div>
                <Button disabled={formik.isSubmitting} type="submit">
                  {isLastStep ? "Submit" : "Next"}
                </Button>
                {formik.isSubmitting && <CircularProgress size={24} />}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

const WizardStep = ({children} : any) => children
export {Wizard,WizardStep};
