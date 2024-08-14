import React, {useContext, useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import styles from './styles.module.css'

import orangeLogo from "../../assets/images/orange.svg";
import {Link} from "react-router-dom";
import {DataContext} from "../../context/DataContext.jsx";

const { delStyle, priceStyle, currencyStyle, footerStyle,cardStyle,cardHeaderStyle,cardBodyStyle,cardTitleStyle,priceContainer,cardTextStyle} = styles

function CardSubscription({planDetails}) {

    const {collectedData, collectData} = useContext(DataContext);



    const handleCollectedData = ()=>{
        collectData({planDetails})
    }


    return (
        <>
            <Card className={cardStyle}>
                <Card.Header className={cardHeaderStyle}>{planDetails.Plan}</Card.Header>
                <Card.Body className={cardBodyStyle}>
                    <Card.Title className={cardTitleStyle}>

                        <img src={orangeLogo} alt=""/>
                        <div className={priceContainer}>
                            <del className={delStyle}>{planDetails.Price}</del>
                            <span className={priceStyle}>{planDetails.Discounted}</span>
                        </div>

                        <p className={currencyStyle}>
                            جنيه مصري
                        </p>
                    </Card.Title>
                </Card.Body>
                <Card.Footer className={footerStyle}>
                    <Card.Text className={cardTextStyle}>
                        <span> صالح لغاية 15/02/2025
                        </span>
                        <span>
                            ادفع لمرة واحدة
                        </span>
                    </Card.Text>
                    <Link onClick={handleCollectedData} to="/payment" className={`w-100 btn btn-outline-primary mt-2`}> اختر الاشتراك</Link>


                </Card.Footer>

            </Card>

        </>
    );
}

export default CardSubscription;