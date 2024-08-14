import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import egyFlag from "../../assets/images/egyFlag.svg";

const egyptianMsisdnRegex = /^(\+20)?(11|12|15|10)[0-9]{8}$/;


function PhoneNumber({titleInfo, onPhoneEntered, onNumberValidation}) {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
    // Validate the phone number using regex
    // const isValueValid = egyptianMsisdnRegex.test(value);
    // console.log(isValueValid, 'isvalued')
    setIsValid( egyptianMsisdnRegex.test(value));
    onNumberValidation ? onNumberValidation(egyptianMsisdnRegex.test(value)) : ''
  };

  useEffect(() => {
    onPhoneEntered && isValid && phoneNumber.length === 10 ? onPhoneEntered(phoneNumber) : '';
  }, [isValid]);


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
        {!isValid && phoneNumber.length >= 10&& <p style={{ color: 'red', margin:"0", padding:"0", textAlign:"center" }}>الرقم غير صحيح</p>}
      </div>
    </>
  );
}

export default PhoneNumber;
