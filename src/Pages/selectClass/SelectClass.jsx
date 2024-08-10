import React from 'react';
import VideoLink from "../../Components/videoLink/VideoLink.jsx";
import Button from "react-bootstrap/Button";
import PhoneNumber from "../../Components/phoneNumber/PhoneNumber.jsx";
import Selection from "../../Components/selection/Selection.jsx";

import styles from './styles.module.css'

const {containerStyle}=styles;

function SelectClass(props) {
    return (
        <>
            <VideoLink/>
            <div className={containerStyle}>
                <p>اختر صفك</p>
                <Selection selectionHeader={"اختر صفك"}/>
                <Selection selectionHeader={"اختر برنامج"}/>
                <PhoneNumber/>
                <Button style={{width: "75%", marginTop: "5rem"}}>التالي</Button>
            </div>

        </>
    );
}

export default SelectClass;