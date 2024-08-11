import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import egyFlag from "../../assets/images/egyFlag.svg";

function PhoneNumber({titleInfo}) {
  return (
    <>
      <div style={{ width: "100%", padding: "0.5rem" }}>
        <Form.Label htmlFor="basic-url">{titleInfo}</Form.Label>
        <InputGroup className="mb-3 m-auto" dir="ltr">
          <InputGroup.Text id="basic-addon1">
            <img src={egyFlag} alt="" />
            <span style={{ marginLeft: "4px" }}>+20</span>
          </InputGroup.Text>
          <Form.Control
            placeholder="1XXXXXXXXX"
            aria-label="PhoneNumber"
            aria-describedby="basic-addon1"

            type="number"

          />
        </InputGroup>
      </div>
    </>
  );
}

export default PhoneNumber;
