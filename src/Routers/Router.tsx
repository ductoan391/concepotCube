import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";

// const Home = lazy(() => import("../pages/Home/index"));
const Contact = lazy(() => import("../Components/Pages/Contact/Contact"));
const Router = () => {
    const { pathname } = useLocation();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default Router;
