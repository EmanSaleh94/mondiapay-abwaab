import React, {useContext, useEffect, useState} from 'react';
import {DataContext} from "../../context/DataContext.jsx";
import {Link} from 'react-router-dom';
import VideoLink from "../../Components/videoLink/VideoLink.jsx";
import PhoneNumber from "../../Components/phoneNumber/PhoneNumber.jsx";
import Selection from "../../Components/selection/Selection.jsx";

import styles from './styles.module.css'
import phoneNumber from "../../Components/phoneNumber/PhoneNumber.jsx";

const {containerStyle} = styles;


function SelectClass(props) {

    const {sharedData, collectedData, collectData} = useContext(DataContext);
    const [grades, setGrades] = useState([])
    const [isBtnDisabled,setIsBtnDisabled]=useState(false)
    const [programs, setPrograms]=useState([])


    //Add Each field to the relevant state

    //Create Use Effect which listen to all these states ,
    //          and if all of them are correct , update a new state called "enableNextButton"
    //On Click on NExt button , set all data collected from all states , and send them to function "collectData"

    const handleGradeSelection = (gradeSelectionData) => {
        const gradeSelection = sharedData.grades.filter((entry, index) => entry.name === gradeSelectionData)[0]
        const programs = gradeSelection.program.map((entry) => entry.name) //hold names only
        setPrograms(programs);
        collectData({grade:gradeSelection })
    }

    const handleProgramSelection = (programSelected) => {
        const program = collectedData.grade.program.filter((entry)=>entry.name ===programSelected)[0]
        collectData({ program})
    }

    const handlePhoneEntered = (phoneNumber) => {
        collectData({contactNumber: phoneNumber})
    }

    const handleNumberValidation = (isValid) => {
        setIsBtnDisabled(!isValid)
    }

    useEffect(() => {
     const isDataValid= collectedData.grade &&collectedData.program &&collectedData.contactNumber
        setIsBtnDisabled(!isDataValid)
        console.log(collectedData)
    }, [collectedData]);


    useEffect(() => {
        setGrades(sharedData.grades.map((entry) => entry.name));
    }, []);

    return (
        <>

            <VideoLink btnWidth={'w-25'}/>
            <div className={containerStyle}>
                <p>اختر صفك</p>
                <Selection selectionHeader={"اختر صفك"} options={grades} onSelection={handleGradeSelection}/>
                <Selection selectionHeader={"اختر برنامج"} options={programs} onSelection={handleProgramSelection}/>
                <PhoneNumber titleInfo={'ادخل رقم للتواصل'} onPhoneEntered={handlePhoneEntered} onNumberValidation={handleNumberValidation}/>
                <Link aria-disabled="true" style={{color: 'white', textDecoration: 'none', width: "75%", marginTop: "5rem",}}
                      className={`btn btn-primary ${isBtnDisabled? 'disabled':''}`} to="/selectplan">التالي</Link>

            </div>

        </>
    );
}

export default SelectClass;