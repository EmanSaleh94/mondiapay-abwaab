import React, {useContext, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardPlan from "../../Components/cardPlan/CardPlan";

import styles from "./styles.module.css";
import {DataContext} from "../../context/DataContext.jsx";

const {cardWrapper, selectionPlanParentStyle} = styles;


function SelectPlan() {


    const {collectedData} = useContext(DataContext);

    return (
        <>
            <div className={selectionPlanParentStyle}>
                <p> اختر باقتك</p>
                <p>كل باقة لها عدة مزايا لتلبي احتياجاتك</p>
                <div className={cardWrapper}>
                    { collectedData.program.Packages.map((entry,index)=> (
                          <CardPlan packageDetails={entry} key={index} backgroundColor={"--light-blue"}
                                  btnCheckColor={"--faded-blue"}/>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default SelectPlan;
