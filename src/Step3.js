import React, { useContext } from 'react'
import './App.css'
import { multiStepContext } from './StepContext'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';


function Step3() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);

    return (
        <div className='parent'>

            <h2>Welcome! First things first...</h2>
            <p>You can always change them later.</p>
            <div className='container'>

                <form>
                    <div id="column">
                        <div>
                            <PersonRoundedIcon style={{ marginBottom: "5px", color: '#4424D6' }} />

                            <p style={{ textAlign: 'left' }}><b>For myself</b></p>
                            <p style={{ textAlign: 'left' }}>Write better. Think more clearely. Stay organised.</p>

                        </div>
                        <div>
                            <GroupsRoundedIcon style={{ marginBottom: "5px", color: '#4424D6' }} />
                            <p style={{ textAlign: 'left' }}><b>With my team</b></p>
                            <p style={{ textAlign: 'left' }}>Wikis, docs, tasks &amp; projects, all in one place .</p>
                        </div>

                    </div>
                    <button onClick={() => setStep(4)} className='Button'>Create Workspace</button>
                </form>


            </div>
        </div >
    )
}

export default Step3