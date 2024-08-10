import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardPlan from "../../Components/cardPlan/CardPlan";

import styles from "./styles.module.css";

const {cardWrapper, selectionPlanParentStyle} = styles;


function SelectPlan() {
    return (
        <>
            <div className={selectionPlanParentStyle}>
                <p> اختر باقتك</p>
                <p>كل باقة لها عدة مزايا لتلبي احتياجاتك</p>
                <div className={cardWrapper}>
                    <CardPlan cardHeader={"جميع المواد + مرشد أكاديمي"} height={80} backgroundColor={"--light-blue"}
                              btnCheckColor={"--faded-blue"}/>
                    <CardPlan
                        cardHeader={"جميع المواد + مرشد أكاديمي"}
                        height={86}
                        backgroundColor={"--violte"}
                        btnCheckColor={"--violte-dark"}

                    />
                    <CardPlan cardHeader={"مادة واحدة"} height={80} backgroundColor={"--light-green"}
                              btnCheckColor={"--teal"}/>
                </div>

            </div>
        </>
    );
}

export default SelectPlan;
