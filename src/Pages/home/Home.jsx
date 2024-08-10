import React from "react";
import Nav from "../../Components/NavBar/Nav.jsx";
import Stepper from "../../Components/stepper/Stepper.jsx";
import SelectPlan from "../selectPlan/SelectPlan.jsx";
import SelectClass from "../selectClass/SelectClass.jsx";
import ChooseSubscription from "../chooseSubscription/ChooseSubscription.jsx";




function Home() {
    return (
        <>
            <Nav/>
            <Stepper/>
            {/*<SelectClass/>*/}
            {/*<SelectPlan />*/}
            <ChooseSubscription/>
        </>
    );
}

export default Home;
