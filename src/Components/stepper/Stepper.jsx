import React from "react";
import styles from "./styles.module.css";

const {
  stepperWrapper,
  stepperItem,
  completed,
  active,
  stepCounter,
  stepName,
} = styles;

// while working on stepper we will put and remove 2 classes
//the active for both  stepper item and stepName
// also the same when completed
function Stepper() {
  return (
    <>
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
    </>
  );
}

export default Stepper;
