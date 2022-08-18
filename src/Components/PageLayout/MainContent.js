import React from "react";
import { Routes, Route } from 'react-router-dom';
import Default from "../Pages/Default";
import Resume from "../Pages/Resume";
import Details from "../Pages/Details";
import Desktop from "../Pages/Porfolio/Desktop";
import Mobile from "../Pages/Porfolio/Mobile";
import Serverless from "../Pages/Porfolio/Serverless";
import Backend from "../Pages/Porfolio/Backend";

export default function MainContent(props) {
    return (

        <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/details" element={<Details />} />
            <Route path="/desktop" element={<Desktop />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/serverless" element={<Serverless />} />
            <Route path="/backend" element={<Backend />} />
        </Routes>
    )
}