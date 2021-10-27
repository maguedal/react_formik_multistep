import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stepTwoValidationSchema = Yup.object({
  password: Yup.string().required().label('Password'),
  email: Yup.string().email().required().label('email'),
});

const StepTwo = ({ data, prev, next, stepsLength, currentStep }) => {
  const handleSubmit = (values) => {
    next(values, stepsLength, currentStep);
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <p>Email</p>
          <Field name="email" />
          <ErrorMessage name="email" />

          <p>Password</p>
          <Field name="password" />
          <ErrorMessage name="password" />
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

export default StepTwo;
