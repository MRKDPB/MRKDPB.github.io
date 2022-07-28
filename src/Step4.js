import React, { useContext } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { multiStepContext } from './StepContext'
import './App.css';

function Step4() {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
    return (
        <div className='parent'>
            <CheckCircleIcon style={{ fontSize: '50px', color: "#4424D6", marginTop: '20px' }} />

            <h2>Congratulations, Eren!</h2>
            <p>You have completed onboarding, you can start using Eden!</p>


            <div className='container'>
                <form>

                    <button onClick={() => submitData} className='Button'>Launch Eden</button>

                </form>
            </div>
        </div>
    )
}

export default Step4