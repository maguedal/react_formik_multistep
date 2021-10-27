import React, { createContext, useState } from 'react';
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [stepsLength, setStepsLength] = useState(2);

  return (
    <FormContext.Provider value={(stepsLength, setStepsLength)}>
      {children}
    </FormContext.Provider>
  );
};
