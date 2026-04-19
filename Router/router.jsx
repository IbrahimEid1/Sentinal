import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import Login from "../Auth/Login";
import Shop from "../pages/shop";
import PageTransition from "../src/components/Layout/PageTransition";
import ScrollToTop from "../src/components/ScrollToTop";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/login"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />
        <Route
          path="/shop"
          element={
            <PageTransition>
              <Shop />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const Router = () => (
  <BrowserRouter>
            <ScrollToTop/>

    <AnimatedRoutes />
  </BrowserRouter>
);

export default Router;
