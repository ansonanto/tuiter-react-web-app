import React from "react";
import WhatsHappening from './whats-happening'
import TuitsList from '../tuits/index'
import "./index.css";

const HomeComponent = () => {
    return (
        <>
            <h1>Home</h1>
            <WhatsHappening/>
            <TuitsList />
        </>
    );
};

export default HomeComponent;
