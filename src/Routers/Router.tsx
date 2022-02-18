import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "../Components/Pages/Contact/Contact";
import Team from "../Components/Pages/Team/Team";
import Works from "../Components/Pages/Works";
const Home = lazy(() => import("../Components/Pages/Home/Home"));

const Router = () => {
    const { pathname } = useLocation();

    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact" element={<Works />} />
            <Route path="/contact" element={<Team />} />


        </Routes>
    );
};

export default Router;
