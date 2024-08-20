import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import orangeCash from '../../assets/images/orangeCashBig.svg'
import styles from './styles.module.css'

const{modalTitle, orangeCashLogoSize,paraStyle, informationList,modalBodyStyle}= styles

function InstructionModal(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header closeButton style={{ border: "none" }}>
                    <Modal.Title id="contained-modal-title-vcenter" className={modalTitle}>
                        <img src={orangeCash} alt={'Orange Cash Logo'} className={orangeCashLogoSize}/>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body  className={modalBodyStyle}>
                    <p className={paraStyle}> ازاي افتح محفظة اورنچ كاش؟</p>
                    <ul className={informationList}>
                        <li>قم بزيارة أي فرع من فروع اورنچ ومعك بطاقة الرقم القومي والخط.</li>
                        <li>املأ طلب الاشتراك في الخدمة.</li>
                        <li>بمجرد الاشتراك ستصلك رسالة تحتوي على رقم سري.</li>
                        <li>يجب تغيير هذا الرقم قبل البدء في استخدام الخدمة.</li>
                    </ul>
                    <p>ازاي اغير الرقم السري للمحفظة قبل بدء استخدام اورنچ كاش؟</p>
                    <ul className={informationList}>

                        <li>اتصل بـ#7115# ثم اتبع الخطوات التالية:</li>
                        <li>اختار 4: لإدارة الحساب</li>
                        <li>اختار 3: الضبط</li>
                        <li>اختار 2: تغيير الرقم السري</li>
                        <li>ادخل الرقم السري الحالي</li>
                        <li>ادخل الرقم السري الجديد</li>
                        <li>(الرقم السري يجب أن يحتوي علي 6 ارقام و لا يحتوي على اي أرقام متكررة مثل:2222)</li>
                        <li>قم بتأكيد الرقم السري الجديد</li>
                    </ul>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default InstructionModal;
