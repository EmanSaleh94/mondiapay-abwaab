import React, {useContext, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './styles.module.css'
import orangeLogo from "../../assets/images/orange.svg";
import CardSubscription from "../../Components/cardSub/CardSubscription.jsx";
import {DataContext} from "../../context/DataContext.jsx";
import {useNavigate} from "react-router-dom";

const {subscribeParentStyle, cardWrapper,subsTitle,subsDescription} = styles

function ChooseSubscription(props) {

    const {collectedData, collectData} = useContext(DataContext);
    const[plan , setPlan]=useState([])
    const navigate = useNavigate();

    useEffect(() => {
        if(collectedData.packageDetails?.plans)
            setPlan(collectedData.packageDetails.plans)
    }, [collectedData]);

    useEffect(() => {
        // Check if the required context data is missing
        if (!collectedData || !collectedData.packageDetails?.plans) {
            navigate('/');
        }
    });

    return (
        <>
            <div className={subscribeParentStyle}>
                <p className={subsTitle}> اختر الاشتراك</p>
                <p className={subsDescription}>اختر أحد المواد المتاحة للاشتراك</p>

                <div className={cardWrapper}>
                    {plan.map((entry,index)=>( <CardSubscription planDetails={entry} key={index}/>))  }
                </div>


            </div>

        </>
    );
}

export default ChooseSubscription;
