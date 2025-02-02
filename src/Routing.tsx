import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "@layout/Footer";
import Landing from "@pages/Landing";
import Pricing from "@pages/Pricing";
import { routingConfig } from "@constants/RoutingConfig";
import Links from "@pages/Links";
import Schedule from "@pages/Schedule";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={routingConfig.HOME} element={<Landing />} />
          <Route path={routingConfig.PRICING} element={<Pricing />} />
          <Route path={routingConfig.REGISTER} element={<Links />} />
          <Route path={routingConfig.SCHEDULE} element={<Schedule />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routing;