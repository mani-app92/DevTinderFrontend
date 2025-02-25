import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/common/Footer";

const Layout = () => {
    return(
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;