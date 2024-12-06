import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

function Layouts() {
  return (
    <div>
      <Navbar />
      <div className="mt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layouts;
