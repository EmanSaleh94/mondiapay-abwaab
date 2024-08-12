import React from 'react';
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router-dom';
import orangeCash from "../../assets/images/orangeCashBig.svg";

import styles from './styles.module.css'
import Button from "react-bootstrap/Button";
import VideoLink from "../videoLink/VideoLink.jsx";

const {modalTitle, orangeCashLogoSize, modalFooterStyle, modalBodyStyle, firstPara, secondPara, btnStyle} = styles


function SendRequestModal(props) {

    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/selectclass');

    };


    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop={"static"}
                onHide={handleClose}
            >
                <Modal.Header closeButton style={{border: "none"}}>
                    <Modal.Title id="contained-modal-title-vcenter" className={modalTitle}>
                        <img src={orangeCash} alt={'Orange Cash Logo'} className={orangeCashLogoSize}/>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={modalBodyStyle}>
                    <p className={firstPara}>تم إرسال طلب الدفع إلى محفظتك</p>
                    <p className={secondPara}> يرجى التحقق من محفظة أورانج لإتمام عملية الشراء<br/>
                        برجاء العلم عند إتمام عملية الدفع سوف تصلك رسالة نصية <br/>
                        تحتوي علي اسم المستخدم وكلمة المرور</p>
                    <Button variant='primary' className={btnStyle} onClick={()=>{window.location.href='https://abwaab.com/'}}>عودة لأبواب</Button>
                </Modal.Body>
                <Modal.Footer className={modalFooterStyle}>
                    <VideoLink btnWidth={'w-100'} isCenter={true}/>
                </Modal.Footer>


            </Modal>

        </>
    );
}

export default SendRequestModal;