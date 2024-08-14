import React, {useContext, useEffect, useState} from 'react';
import {DataContext} from "../../context/DataContext.jsx";
import {Link} from 'react-router-dom';
import VideoLink from "../../Components/videoLink/VideoLink.jsx";
import PhoneNumber from "../../Components/phoneNumber/PhoneNumber.jsx";
import Selection from "../../Components/selection/Selection.jsx";

import styles from './styles.module.css'

const {containerStyle} = styles;

function SelectClass(props) {

    const {sharedData, collectedData, collectData} = useContext(DataContext);
    const [grades, setGrades] = useState([]);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [programs, setPrograms] = useState([]);
    // Fetch data from localStorage on component mount
    useEffect(() => {
        const storedGrade = localStorage.getItem('grade');
        const storedProgram = localStorage.getItem('program');
        const storedPhoneNumber = localStorage.getItem('contactNumber')

        if (storedGrade) {
            const grade = JSON.parse(storedGrade);
            collectData({ grade });
            setPrograms(grade.program.map(program => program.name));
        }

        if (storedProgram) {
            const program = JSON.parse(storedProgram);
            collectData({ program });
        }

        if (storedPhoneNumber) {
            collectData({ contactNumber: storedPhoneNumber });
        }

    }, []);

    const handleGradeSelection = (gradeSelectionData) => {
        const gradeSelection = sharedData.grades.find(entry => entry.name === gradeSelectionData);
        const programs = gradeSelection.program.map(entry => entry.name);
        setPrograms(programs);
        if(collectedData.program) {
            collectedData.program.name = null;
        }
        localStorage.setItem('grade', JSON.stringify(gradeSelection)); // Save grade to localStorage
        collectData({ grade: gradeSelection });
    };

    const handleProgramSelection = (programSelected) => {
        const program = collectedData.grade.program.find(entry => entry.name === programSelected);
        localStorage.setItem('program', JSON.stringify(program)); // Save program to localStorage
        collectData({ program });
    };

    const handlePhoneEntered = (phoneNumber) => {
        localStorage.setItem('contactNumber', phoneNumber); // Save phone number to localStorage
        collectData({ contactNumber: phoneNumber });
    };

    const handleNumberValidation = (isValid) => {
        setIsBtnDisabled(!isValid);
    };

    useEffect(() => {
        const isDataValid = collectedData.grade && collectedData.program && collectedData.contactNumber;
        setIsBtnDisabled(!isDataValid);
    }, [collectedData]);

    useEffect(() => {
        setGrades(sharedData.grades.map(entry => entry.name));
    }, [sharedData.grades]);

    return (
        <>
            <VideoLink btnWidth={'w-25'}/>
            <div className={containerStyle}>
                <p>اختر صفك</p>
                {/*<p>{collectedData.}</p>*/}
                <Selection selectionHeader={"اختر صفك"} options={grades} onSelection={handleGradeSelection} initialValue={collectedData.grade?.name}/>
                <Selection selectionHeader={"اختر برنامج"} options={programs} onSelection={handleProgramSelection} initialValue={collectedData.program?.name}/>
                <PhoneNumber titleInfo={'ادخل رقم للتواصل'} onPhoneEntered={handlePhoneEntered} onNumberValidation={handleNumberValidation} initialValue={collectedData.contactNumber}/>
                <Link aria-disabled="true" style={{color: 'white', textDecoration: 'none', width: "75%", marginTop: "5rem"}}
                      className={`btn btn-primary ${isBtnDisabled ? 'disabled' : ''}`} to="/selectplan">التالي</Link>
            </div>
        </>
    );
}

export default SelectClass;