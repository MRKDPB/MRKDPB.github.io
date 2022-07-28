import React, { useContext } from 'react'
import './App.css'
import { multiStepContext } from './StepContext'

function Step2() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div className='parent'>

            <h2>Let's set up a home for all your work</h2>
            <p>You can always create another workspace later.</p>
            <div className='container'>
                <form>
                    <h5>Workspace Name</h5>
                    <input type='text' placeholder='Eden' />


                    <div style={{ display: "flex", marginBottom: 5 }} >
                        <h5>Workspace URL</h5>

                        <h5 style={{ color: "Gray", marginLeft: 5 }}> (Optional)</h5>
                    </div>
                    <div id='url'>
                        <input style={{ width: '30%' }} type='text' placeholder="www.eden.com/" disabled />
                        <input style={{ width: '70%' }} type='url' placeholder='Example' />
                    </div>
                    <button onClick={() => setStep(3)} className='Button'>Create Workspace</button>
                </form>

            </div>
        </div>
    )
}

export default Step2