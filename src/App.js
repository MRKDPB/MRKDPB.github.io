import React, { useContext } from 'react'
import './App.css';
import { Slider } from '@material-ui/core'
import Step1 from './Step1'
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import CustomStepper from './CustomStepper';
import { multiStepContext } from './StepContext'
import logo from './logo.png';
// import { ColorlibConnector, ColorlibStepIcon } from './CustomStepper'

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
      case 3:
        return <Step3 />
      case 4:
        return <Step4 />
    }

  }

  return (

    <div className="parent">

      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" />
        <h1>Eden</h1>
      </div>
      <div>
        <CustomStepper />
      </div>


      <div className='outerContainer'>
        {showStep(currentStep)}
      </div>



    </div>

  );
}

export default App;
