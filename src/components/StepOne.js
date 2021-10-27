import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stepOneValidationSchema = Yup.object({
  first_name: Yup.string().required().label('First name'),
  last_name: Yup.string().required().label('Last name'),
});

const StepOne = ({ data, prev, stepsLength, next, currentStep }) => {
  const handleSubmit = (values) => {
    next(values, stepsLength, currentStep);
  };

  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <p>First Name</p>
          <Field name="first_name" />
          <ErrorMessage name="first_name" />

          <p>Last Name</p>
          <Field name="last_name" />
          <ErrorMessage name="last_name" />
          {stepsLength > 1 && currentStep !== 0 ? (
            <button type="button" onClick={() => prev(values)}>
              Back{' '}
            </button>
          ) : (
            ''
          )}
          <button type="submit">
            {currentStep + 1 === stepsLength ? 'Submit' : 'Next'}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default StepOne;
