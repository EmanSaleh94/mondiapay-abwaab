import React from "react";
import Nav from "../../Components/NavBar/Nav.jsx";
import Stepper from "../../Components/stepper/Stepper.jsx";
import SelectPlan from "../selectPlan/SelectPlan.jsx";
import SelectClass from "../selectClass/SelectClass.jsx";
import ChooseSubscription from "../chooseSubscription/ChooseSubscription.jsx";
import Payment from "../payment/Payment.jsx";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function Home() {
    return (
        <>

            <Router>
                <Nav/>
                <Stepper/>
                <Routes>
                    <Route  path="/" element={ <SelectClass/> }/>
                    <Route  path="selectplan" element={   <SelectPlan /> }/>
                    <Route  path="subscription" element={  <ChooseSubscription/> }/>
                    <Route  path="payment" element={  <Payment/> }/>
                </Routes>
            </Router>
        </>
    );
}

export default Home;
