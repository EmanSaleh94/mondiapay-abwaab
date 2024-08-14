import React from "react";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";


const {
    stepperWrapper,
    stepperItem,
    completed,
    active,
    stepCounter,
    stepName,

} = styles;


function Stepper() {

    const location = useLocation();

    // Define the steps and their corresponding routes
    const steps = [
        { path: "/", label: "اختر الصف" },
        { path: "/selectplan", label: "اختر الباقة" },
        { path: "/subscription", label: "اختر الاشتراك" },
        { path: "/payment", label: "الدفع" }
    ];


    const currentStepIndex = steps.findIndex(step => step.path === location.pathname);


    return (
        <>
            <div style={{display: "flex", alignItems: 'center'}}>
                <div className={stepperWrapper}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${stepperItem} ${index === currentStepIndex ? active : ''} ${index < currentStepIndex ? completed : ''}`}
                        >
                            <div className={stepCounter}>{index + 1}</div>
                            <div
                                className={`${stepName} ${index === currentStepIndex ? active : ''} ${index < currentStepIndex ? completed : ''}`}>
                                {step.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default Stepper;
