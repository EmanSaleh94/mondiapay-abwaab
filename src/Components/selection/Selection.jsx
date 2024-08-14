import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import upArrow from "../../assets/images/upArrow.svg";
import downArrow from "../../assets/images/downArrow.svg";
import styles from "./styles.module.css";

const {selectionFieldParent, selectionGroup, expanded} = styles;

function Selection({selectionHeader, options, onSelection, initialValue}) {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(initialValue || '');

    useEffect(() => {
        setInputValue(initialValue || selectionHeader);
    }, [initialValue, selectionHeader]);

    const handleInputText = (event) => {
        const value = event.target.textContent;
        setInputValue(value);
        setOpen(!open);
        if (onSelection) {
            onSelection(value);
        }
    };

    const btnStyle = {
        backgroundColor: "#e9f3ff",
        border: "none",
        color: "black",
        display: "flex",
        justifyContent: "space-between",
    };

    return (
        <>
            <div className={selectionGroup}>
                <div className={selectionFieldParent}>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        style={btnStyle}
                    >
                        <p className={open ? expanded : ""}>
                            {inputValue || selectionHeader}
                        </p>
                        <img src={open ? upArrow : downArrow} alt="" width={20}/>
                    </Button>
                    <Collapse in={open}>
                        <ul className="selectionList" id="example-collapse-text">
                            {options.map((entry, index) => (
                                <li key={index} onClick={handleInputText}>
                                    {entry}
                                </li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </>
    );
}

export default Selection;