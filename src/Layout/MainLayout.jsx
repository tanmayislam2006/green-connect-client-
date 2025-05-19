import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      this is main layout
      <div className="h-[calc(100vh-150px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
