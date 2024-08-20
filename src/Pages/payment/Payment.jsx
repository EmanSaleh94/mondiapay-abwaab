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


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";


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

    const navigate = useNavigate();


    const [modalShow, setModalShow] = useState(false);
    const [showRequestedModal, setShowRequestedModal] = useState(false)
    const [price, setPrice] = useState([])
    const [discountPrice, setDiscountPrice] = useState()
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);

    const {collectedData, collectData} = useContext(DataContext);

    const handleNumberValidation = (isValid) => {
        setIsBtnDisabled(!isValid);
    };

    const handlePhoneEntered = (value) => {
        collectData({ chargeNumber: value });
    }


    useEffect(() => {
        // Check if the required context data is missing
        if (!collectedData || !collectedData.planDetails?.Discounted || !collectedData.contactNumber) {
            navigate('/');
        } else {
            setPrice(collectedData.planDetails.Price)
            setDiscountPrice(collectedData.planDetails.Discounted)
        }
    });


    const initiatePayment = async () => {
        if(collectedData && collectedData.planDetails.Discounted && collectedData.contactNumber){
            setIsBtnDisabled(true)
            const response = await fetch("/abwaab/api/payment", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chargeAmount: collectedData.planDetails.Discounted,
                    planName: collectedData.planDetails.Plan,
                    userContactMsisdn: collectedData.contactNumber,
                    userChargeMsisdn: collectedData.chargeNumber

                })
            })
            setIsBtnDisabled(false)
            if(response.status < 300){
                setShowRequestedModal(true)
                return;
            } else {
                toast.error("فشل عمليه الدفع !");
            }
        } else {
            toast.error("Please Check entered data and try again");
        }

    }


    return (
        <>
            <Container>

                <div className={parentContainer}>
                    < img src={orangeCash} alt={'orange cash logo'} className={orangeCashLogo}/>
                    <PhoneNumber titleInfo={'رقم المحفظة'} onPhoneEntered={handlePhoneEntered}
                                 onNumberValidation={handleNumberValidation}/>
                    <p className={priceInformation}>
                        <span>المبلغ </span>
                        <span style={{color: `var(--faded-blue)`}}>{discountPrice} جنيه مصري بدل من </span>
                        <del style={{color: `red`}}> {price}</del>
                        <span style={{color: `var(--faded-blue)`}}> فقط على اورنچ كاش </span>
                    </p>

                    <Button variant='primary' className={`${subscribeButton} ${isBtnDisabled ? 'disabled' : ''}`}
                            onClick={() => initiatePayment()}
                    > اشترك</Button>

                    <div className={informationSteps}>
                        <img src={exMark} alt={'ⓘ'}/>
                        <p className={informationStepsPara} onClick={() => setModalShow(true)}> ليس لديك محفظة؟ خطوات
                            كيفية فتح محفظة اورنچ كاش</p>
                    </div>
                    <p style={{textAlign: 'center'}}>لمعرفة المزيد عن شروط و احكام اورنج كاش برجاء زيارة تطبيق اورنج
                        كاش</p>


                </div>
                <div className={mondiaPayLogoContainer}>
                    <img src={mondiaLogo} alt={'MondiaPay Logo'} style={{width: '120px'}}/>

                </div>
            </Container>
            <SendRequestModal show={showRequestedModal} onHide={()=>setShowRequestedModal(false)} />

            <InstructionModal show={modalShow} onHide={() => setModalShow(false)}/>
            <ToastContainer />
        </>
    );
}

export default Payment;
