import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import styles from "./styles.module.css";
import backButton from '../../assets/images/backButton.svg'

const {
    stepperWrapper,
    stepperItem,
    completed,
    active,
    stepCounter,
    stepName,
    backButtonWrapper
} = styles;

// while working on stepper we will put and remove 2 classes
//the active for both  stepper item and stepName
// also the same when completed
function Stepper() {
    const navigate = useNavigate();

    const handleBackBtnNavigate= ()=>{
        navigate(-1)
    }

    const location = useLocation();
    const [showBackBtn , setShowBackBtn]=useState(true)

    useEffect(() => {
        (location.pathname ==='/selectclass' || location.pathname ==='/')
            ? setShowBackBtn(false)
            : setShowBackBtn(true)
        console.log("rerender")
    });


    return (
        <>
            <div style={{display: "flex", alignItems: 'center'}}>
                <div className={`${stepperWrapper}`}>
                    <div className={`${stepperItem} ${active}`}>
                        <div className={`${stepCounter}`}>1</div>
                        <div className={`${stepName} ${active}`}>اختر الصف</div>
                    </div>
                    <div className={`${stepperItem} ${completed} `}>
                        <div className={`${stepCounter}  `}>2</div>
                        <div className={`${stepName} ${completed}`}> اختر الباقة</div>
                    </div>
                    <div className={`${stepperItem}  `}>
                        <div className={`${stepCounter} `}>3</div>
                        <div className={`${stepName}`}>اختر الاشتراك</div>
                    </div>
                    <div className={`${stepperItem}`}>
                        <div className={`${stepCounter}`}>4</div>
                        <div className={`${stepName} `}>الدفع</div>
                    </div>
                </div>
                {showBackBtn? (<div className={backButtonWrapper} onClick={handleBackBtnNavigate}>
                </div>): ''}
            </div>

        </>
    );
}

export default Stepper;
