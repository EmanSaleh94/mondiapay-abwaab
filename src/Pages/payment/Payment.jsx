import React, {useContext, useEffect, useState} from 'react';
import PhoneNumber from "../../Components/phoneNumber/PhoneNumber.jsx";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";

import orangeCash from '../../assets/images/orangeCashBig.svg'
import exMark from '../../assets/images/exMark.svg'
import mondiaLogo from '../../assets/images/mondiaLogo.svg'

import styles from './styles.module.css'
import InstructionModal from "../../Components/instructionModal/InstructionModal.jsx";
import SendRequestModal from "../../Components/sendRequestModal/SendRequestModal.jsx";
import {DataContext} from "../../context/DataContext.jsx";

const {
    parentContainer,
    orangeCashLogo,
    subscribeButton,
    informationSteps,
    informationStepsPara,
    mondiaPayLogoContainer,
    priceInformation,

} = styles


function Payment(props) {

    const [modalShow, setModalShow] = useState(false);
    const[showRequestedModal, setShowRequestedModal]=useState(false)
    const {collectedData, collectData} = useContext(DataContext);
    const[price,setPrice]=useState([])
    const[discountPrice, setDiscountPrice]=useState()

    useEffect(() => {
        setPrice(collectedData.planDetails.Price)
        setDiscountPrice(collectedData.planDetails.Discounted)
    });


    return (
        <>
            <Container>

                <div className={parentContainer}>
                    < img src={orangeCash} alt={'orange cash logo'} className={orangeCashLogo}/>
                    <PhoneNumber titleInfo={'رقم المحفظة'}/>
                    <p className={priceInformation}>
                        <span>المبلغ </span>
                        <span style={{color: `var(--faded-blue)`}}>{discountPrice} جنيه مصري بدل من </span>
                        <del style={{color: `red`}}> {price}</del>
                        <span style={{color: `var(--faded-blue)`}}> فقط على اورنچ كاش </span>
                    </p>

                    <Button variant='primary' className={subscribeButton}
                    onClick={()=>setShowRequestedModal(true)}
                    > اشترك</Button>

                    <div className={informationSteps}>
                        <img src={exMark} alt={'ⓘ'}/>
                        <p className={informationStepsPara} onClick={() => setModalShow(true)}> ليس لديك محفظة؟ خطوات
                            كيفية فتح محفظة اورنچ كاش</p>
                    </div>

                </div>
                <div className={mondiaPayLogoContainer}>
                    <img src={mondiaLogo} alt={'MondiaPay Logo'} style={{width: '120px'}}/>

                </div>
            </Container>
            <SendRequestModal show={showRequestedModal} onHide={()=>setShowRequestedModal(false)} />

            <InstructionModal show={modalShow} onHide={() => setModalShow(false)}/>

        </>
    );
}

export default Payment;