import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import egyFlag from "../../assets/images/egyFlag.svg";
import Styles from "./styles.module.css";

const egyptianMsisdnRegex = /^(\+20)?(11|12|15|10)[0-9]{8}$/;


function PhoneNumber({titleInfo, onPhoneEntered, onNumberValidation, initialValue}) {

  const [phoneNumber, setPhoneNumber] = useState(initialValue || '');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };

  useEffect(() => {
    onPhoneEntered && isValid ? onPhoneEntered(phoneNumber) : '';
  }, [isValid]);


  useEffect(() => {
    setIsValid(egyptianMsisdnRegex.test(phoneNumber));
    onNumberValidation ? onNumberValidation(egyptianMsisdnRegex.test(phoneNumber)) : ''
  }, [phoneNumber]);

  return (
    <>
      <div style={{ width: "100%", padding: "0.5rem" }}>
        <Form.Label htmlFor="basic-url">{titleInfo}</Form.Label>
        <InputGroup className="mb-3 m-auto" dir="ltr">
          <InputGroup.Text id="basic-addon1" >
            <img src={egyFlag} alt="" />
            <span style={{ marginLeft: "4px" }}>+20</span>
          </InputGroup.Text>
          <Form.Control
            placeholder="1XXXXXXXXX"
            aria-label="PhoneNumber"
            aria-describedby="basic-addon1"
            type="number"
            onChange={handleChange}
            value={phoneNumber}
          />
        </InputGroup>
        {!isValid && phoneNumber && <p style={{ color: 'red', margin:"0", padding:"0", textAlign:"center" }}>الرقم غير صحيح</p>}
      </div>
    </>
  );
}

export default PhoneNumber;
