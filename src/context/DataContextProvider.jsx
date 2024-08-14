import React, {useEffect, useState} from 'react';
import {DataContext} from "./DataContext.jsx";
import data from '../assets/data.json'

export const DataContextProvider = ({ children }) => {

    const [sharedData, setSharedData] = useState(data);

    let [collectedData, setCollectedData] = useState([]);

    const collectData = (value) => {
        const data = {
            ...collectedData, ...value
        }
        setCollectedData(data);
        // localStorage.setItem("collectedData", JSON.stringify(data))
    };


    useEffect(() => {
        // const data = localStorage.getItem("collectedData")
        // if(data){
        //     setCollectedData(JSON.parse(data))
        // }
    }, []);

    return (
        <DataContext.Provider value={{ sharedData,collectedData, collectData }}>
            {children}
        </DataContext.Provider>
    );
};