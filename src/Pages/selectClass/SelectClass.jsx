import React from 'react';
import {Link} from 'react-router-dom';
import VideoLink from "../../Components/videoLink/VideoLink.jsx";
import PhoneNumber from "../../Components/phoneNumber/PhoneNumber.jsx";
import Selection from "../../Components/selection/Selection.jsx";

import styles from './styles.module.css'

const {containerStyle} = styles;

function SelectClass(props) {
    return (
        <>
            <VideoLink btnWidth={'w-25'}/>
            <div className={containerStyle}>
                <p>اختر صفك</p>
                <Selection selectionHeader={"اختر صفك"}/>
                <Selection selectionHeader={"اختر برنامج"}/>
                <PhoneNumber titleInfo={'ادخل رقم للتواصل'}/>
                <Link style={{color: 'white', textDecoration: 'none', width: "75%", marginTop: "5rem",}}
                      className="btn btn-primary" to="/selectplan">التالي</Link>
            </div>

        </>
    );
}

export default SelectClass;