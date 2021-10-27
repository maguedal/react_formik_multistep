import React, { useState, useContext } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
//import { FormContext } from './context/FormContext';
import './style.css';

export default function Layout() {
  const ApiRequest = (formData) => {
    alert(formData);
  };
  const stepsLength = 3; // @ToDo FormContext

  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const handleNextStep = (newData, stepsLength, currentStep) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (stepsLength === currentStep++) {
      ApiRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne
      stepsLength={stepsLength}
      data={data}
      currentStep={currentStep}
      next={handleNextStep}
      prev={handlePrevStep}
    />,
    <StepTwo
      stepsLength={stepsLength}
      data={data}
      currentStep={currentStep}
      next={handleNextStep}
      prev={handlePrevStep}
    />,
    <StepThree
      stepsLength={stepsLength}
      data={data}
      currentStep={currentStep}
      next={handleNextStep}
      prev={handlePrevStep}
    />,
  ];
  return steps[currentStep];
}
