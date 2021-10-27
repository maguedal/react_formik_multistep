import React from 'react';
import Layout from './Layout';
import { FormProvider } from './context/FormContext';

import './style.css';

export default function App() {
  return (
    <FormProvider>
      <div className="App">
        <Layout />
      </div>
    </FormProvider>
  );
}
