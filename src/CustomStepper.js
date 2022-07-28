import * as React from "react";
import { useContext } from 'react';
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { stepLabelClasses } from "@mui/material/StepLabel";
import { Stepper, StepLabel, Step } from '@material-ui/core';
import { multiStepContext } from './StepContext'

const DummyConnector = () => {
    return (
        <div style={{
            width: 60,
            height: 2
        }}>
            <div className="progressBar" style={{ width: 30, height: 2 }}>

            </div>
        </div>
    );
}

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 3,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",

    alignItems: "center",

    ...(ownerState.active && {
        backgroundColor: "#4424D6",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
    }),
    ...(ownerState.completed && {
        backgroundColor: "#4424D6"
    })
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: '1',
        2: '2',
        3: '3',
        4: '4'
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node
};

const CustomStepper = () => {
    const { currentStep, finalData } = useContext(multiStepContext);
    return (
        <Stepper style={{ padding: '10px', margin: '10px' }}
            activeStep={currentStep - 1}
        >
            <Step>
                <StepLabel StepIconComponent={ColorlibStepIcon}><DummyConnector /></StepLabel>
            </Step>
            <Step>
                <StepLabel StepIconComponent={ColorlibStepIcon}><DummyConnector /></StepLabel>
            </Step>
            <Step>
                <StepLabel StepIconComponent={ColorlibStepIcon}><DummyConnector /></StepLabel>
            </Step>
            <Step>
                <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
            </Step>
        </Stepper>
    );

}

export default CustomStepper
