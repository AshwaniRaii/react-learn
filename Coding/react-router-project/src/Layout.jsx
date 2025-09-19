import React from "react";
import Header from "./assets/components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./assets/components/Footer/Footer";

function Layout() {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout;