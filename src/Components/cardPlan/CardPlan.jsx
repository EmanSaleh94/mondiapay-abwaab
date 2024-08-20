import React, {useContext, useEffect, useState} from "react";import Card from "react-bootstrap/Card";
import {CheckCircleFill} from "react-bootstrap-icons";

import styles from './styles.module.css';
import orangeLogo from "../../assets/images/orange.svg";
import {Link} from "react-router-dom";
import {DataContext} from "../../context/DataContext.jsx";

const {
    cardStyle,
    fontStyle,
    priceStyle,
    cardTitle,
    descriptionStyle,
    currencyStyle,
    cardTextStyle,
    CheckCircleFillStyle,
    cardBodyStyle,
    cardHeaderStyle,
    delStyle,
    footerStyle,
    recommendedTag,
    cardTitlePrice,
    cardTitlePriceContainer
} = styles


function CardPlan({backgroundColor, btnCheckColor, packageDetails}) {

    const [recommendTag, setRecommendTag] = useState(false)

    const getPlanWithSmallestPrice = (plansData) => {
        let smallestPlan = null;
        let smallestPrice = Infinity;

        plansData.forEach(plan => {
            if (plan.Discounted < smallestPrice) {
                smallestPrice = plan.Discounted;
                smallestPlan = plan;
            }
        });

        return smallestPlan;
    }
    const planWithSmallestPrice = getPlanWithSmallestPrice(packageDetails.plans)

    const {collectedData, collectData} = useContext(DataContext);


    const handlePlanSelection = () => {
        collectData({packageDetails})
    }


    return (
        <>
            <Card className={cardStyle} style={{backgroundColor: `var(${backgroundColor})`}}>
                <Card.Header className={cardHeaderStyle}>{packageDetails.name}</Card.Header>
                <Card.Body className={cardBodyStyle}>
                    <span className={fontStyle}>ابتداء من</span>

                    <Card.Title className={cardTitle}>
                        <img src={orangeLogo} alt=""/>
                        <div className={cardTitlePrice}>
                            <div className={cardTitlePriceContainer}>
                                <del className={delStyle}>{planWithSmallestPrice.Price}</del>
                                <span className={priceStyle}>{planWithSmallestPrice.Discounted}</span>

                                <p className={currencyStyle}>
                                    جنيه مصري
                                </p>
                            </div>
                            {packageDetails.name === 'الباقة المميزة' ? <div className={recommendedTag}>
                                الباقة الأفضل
                            </div> : ''}
                        </div>

                    </Card.Title>

                    {/*TODO to be changed to state*/}
                    {packageDetails.Benefits.map((entry, index) => (
                        <Card.Text className={cardTextStyle} key={index}>
                            <CheckCircleFill color={`var(${btnCheckColor})`} className={CheckCircleFillStyle}/>
                            {entry}
                        </Card.Text>

                    ))}

                </Card.Body>
                <Card.Footer className={footerStyle}>
                    <Link onClick={handlePlanSelection} style={{
                        color: 'white',
                        textDecoration: 'none',
                        backgroundColor: `var(${btnCheckColor} )`,
                        borderColor: `var(${btnCheckColor} )`
                    }} to="/subscription" className="btn btn-primary w-100"> اختر الباقة
                    </Link>

                </Card.Footer>
            </Card>
        </>
    )
        ;
}

export default CardPlan;
