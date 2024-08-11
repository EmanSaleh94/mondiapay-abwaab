import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './styles.module.css'

import orangeLogo from "../../assets/images/orange.svg";
import {Link} from "react-router-dom";

const { delStyle, priceStyle, currencyStyle, footerStyle,cardStyle,cardHeaderStyle,cardBodyStyle,cardTitleStyle,priceContainer,cardTextStyle} = styles

function CardSubscription(props) {
    return (
        <>
            <Card className={cardStyle}>
                <Card.Header className={cardHeaderStyle}>فيزياء - الاستاذ علي السوداني -
                    الفصل الدراسي الأول</Card.Header>
                <Card.Body className={cardBodyStyle}>
                    <Card.Title className={cardTitleStyle}>

                        <img src={orangeLogo} alt=""/>
                        <div className={priceContainer}>
                            <del className={delStyle}>1000</del>
                            <span className={priceStyle}>800</span>
                        </div>

                        <p className={currencyStyle}>
                            جنيه مصري
                        </p>
                    </Card.Title>
                </Card.Body>
                <Card.Footer className={footerStyle}>
                    <Card.Text className={cardTextStyle}>
                        <p> صالح لغاية 15/02/2025
                        </p>
                        <p>
                            ادفع لمرة واحدة
                        </p>
                    </Card.Text>
                    <Link to="/payment" className={`w-100 btn btn-outline-primary mt-2`}> اختر الاشتراك</Link>


                </Card.Footer>

            </Card>

        </>
    );
}

export default CardSubscription;