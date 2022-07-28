import React, { useContext } from 'react'
import './App.css'
import { multiStepContext } from './StepContext'

function Step1() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div className='parent'>
           
            <h2>Welcome! First things first...</h2>
            <p>You can always change them later.</p>

            <div className='container'>
                <form>
                    <h5>Full Name</h5>
                    <input type='text' placeholder='Steve Jobs' />

                    <h5>Display Name</h5>
                    <input type='text' placeholder='Steve' />

                    <button onClick={() => setStep(2)} className='Button'>Create Workspace</button>
                </form>

            </div>




        </div>
    )
}

export default Step1