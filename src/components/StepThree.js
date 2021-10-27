import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stepThreeValidationSchema = Yup.object({
  facebook: Yup.string().required(),
  twitter: Yup.string().required()
});

const StepThree = ({ data, prev, stepsLength, next, currentStep }) => {
  const handleSubmit = (values) => {
    next(values, stepsLength, currentStep);
  };

  return (
    <Formik
      validationSchema={stepThreeValidationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <p>ffacebook</p>
          <Field name="ffacebook" />
          <ErrorMessage name="ffacebook" />

          <p>twitter</p>
          <Field name="twitter" />
          <ErrorMessage name="twitter" />
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
export default StepThree;
