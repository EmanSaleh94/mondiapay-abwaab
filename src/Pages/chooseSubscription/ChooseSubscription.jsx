import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './styles.module.css'
import orangeLogo from "../../assets/images/orange.svg";
import CardSubscription from "../../Components/cardSub/CardSubscription.jsx";

const {subscribeParentStyle, cardWrapper,subsTitle,subsDescription} = styles

function ChooseSubscription(props) {
    return (
        <>
            <div className={subscribeParentStyle}>
                <p className={subsTitle}> اختر الاشتراك</p>
                <p className={subsDescription}>اختر أحد المواد المتاحة للاشتراك</p>

                <div className={cardWrapper}>
                        <CardSubscription/>
                        <CardSubscription/>
                        <CardSubscription/>
                        <CardSubscription/>
                </div>


            </div>

        </>
    );
}

export default ChooseSubscription;