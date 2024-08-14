import "./App.css";
import Home from "./Pages/home/Home";
import React from "react";
import {DataContextProvider} from "./context/DataContextProvider.jsx";


function App() {
    return (
        <>
            <DataContextProvider>
                <Home/>
            </DataContextProvider>
        </>
    );
}

export default App;
