import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import upArrow from "../../assets/images/upArrow.svg";
import downArrow from "../../assets/images/downArrow.svg";
import styles from "./styles.module.css";

const { selectionFieldParent, selectionGroup, expanded } = styles;

function Selection({ selectionHeader }) {
  const [open, setOpen] = useState(false);


  const [inputValue, setInputValue] = useState('');

  const handleInputText = (event) => {
    setInputValue(event.target.textContent);
    setOpen(!open)
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
            <p className={open ? expanded : ""}>{inputValue===''? selectionHeader:inputValue }</p>
            <img src={open ? upArrow : downArrow} alt="" width={20} />
          </Button>
          <Collapse in={open}>
            <ul className="selectionList" id="example-collapse-text">
              <li onClick={(event)=>{handleInputText(event)}}>المرحلة الابتدائية</li>
              <li onClick={(event)=>{handleInputText(event)}}>المرحلة المتوسطة</li>
              <li onClick={(event)=>{handleInputText(event)}}>المرحلة الثانوية</li>
            </ul>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default Selection;
