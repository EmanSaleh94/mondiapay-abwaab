import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {CheckCircleFill} from "react-bootstrap-icons";

import styles from './styles.module.css';
import orangeLogo from "../../assets/images/orange.svg";

const {
    cardStyle,
    fontStyle,
    priceStyle,
    cardTitle,
    descriptionStyle,
    currencyStyle,
    cardTextStyle,
    buttonStyle,
    CheckCircleFillStyle,
    cardBodyStyle,
    cardHeaderStyle,
    delStyle,
    footerStyle
} = styles


function CardPlan({cardHeader, height, backgroundColor, btnCheckColor}) {
    return (
        <>
            <Card className={cardStyle} style={{height: `${height}%`, backgroundColor: `var(${backgroundColor})`}}>
                <Card.Header className={cardHeaderStyle}>{cardHeader}</Card.Header>
                <Card.Body className={cardBodyStyle}>
                    <span className={fontStyle}>ابتداء من</span>

                    <Card.Title className={cardTitle}>
                        <img src={orangeLogo} alt=""/>
                        <div>
                            <del className={delStyle}>40.0</del>
                            <span className={priceStyle}>35.0</span>

                            <p className={currencyStyle}>
                                جنيه مصري
                            </p>

                        </div>

                    </Card.Title>


                    <Card.Text className={cardTextStyle}>
                        <CheckCircleFill color={`var(${btnCheckColor})`} className={CheckCircleFillStyle}/>
                        شاهد جميع الدروس لجميع مواد منهاجك
                    </Card.Text>


                    <Card.Text className={cardTextStyle}>
                        <CheckCircleFill color={`var(${btnCheckColor})`} className={CheckCircleFillStyle}/>
                        جاوب أسئلة و إختبارات جميع المواد{" "}
                    </Card.Text>


                    <Card.Text className={cardTextStyle}>
                        <CheckCircleFill color={`var(${btnCheckColor})`} className={CheckCircleFillStyle}/>
                        جاوب أسئلة و إختبارات جميع المواد{" "}
                    </Card.Text>



                </Card.Body>
                <Card.Footer className={footerStyle}>
                    <Button
                        className={buttonStyle}
                        style={{backgroundColor: `var(${btnCheckColor} )`, borderColor: `var(${btnCheckColor} )`}}
                    >
                        اختر الباقة
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
}

export default CardPlan;
