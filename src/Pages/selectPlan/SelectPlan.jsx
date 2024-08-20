import React, {useContext, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardPlan from "../../Components/cardPlan/CardPlan";

import styles from "./styles.module.css";
import {DataContext} from "../../context/DataContext.jsx";
import {useNavigate} from "react-router-dom";

const {cardWrapper, selectionPlanParentStyle} = styles;


function SelectPlan() {


    const {collectedData} = useContext(DataContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the required context data is missing
        if (!collectedData || !collectedData.program?.Packages ) {
            navigate('/');
        }
    });

    return (
        <>
            <div className={selectionPlanParentStyle}>
                <p> اختر باقتك</p>
                <p>كل باقة لها عدة مزايا لتلبي احتياجاتك</p>
                <div className={cardWrapper}>
                    { collectedData.program?.Packages.map((entry,index)=> (
                          <CardPlan packageDetails={entry} key={index}
                                    backgroundColor={entry.name === 'الباقة المميزة'  ? "--violte" : '--light-blue'}
                                    btnCheckColor={entry.name === 'الباقة المميزة'  ? "--violte-dark" : '--faded-blue'}/>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default SelectPlan;
