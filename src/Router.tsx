import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout";
import MainPage from "./pages/MainPage";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="*" element={<></>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
