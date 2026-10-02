import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Explore from "./pages/Explore";

import Hazards from "./pages/Hazards";

import Alerts from "./pages/Alerts";

import Resources from "./pages/Resources";

import AskIndra from "./pages/AskIndra";

import About from "./pages/About";
import SignIn from "./pages/SignIn";
/* ================================================================
   MAIN APP

   IMPORTANT:

   The Home page is handled by:
   
   src/pages/Home.jsx

   Home.jsx contains:
   - Navbar
   - Hero
   - FeatureCards
   - AskIndraSection

   We must NOT recreate the Home page here.
================================================================ */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ========================================================
            HOME
        ======================================================== */}

        <Route path="/" element={<Home />} />

        {/* ========================================================
            EXPLORE
        ======================================================== */}

        <Route
          path="/explore"
          element={
            <>
              <Navbar />

              <Explore />
            </>
          }
        />

        {/* ========================================================
            HAZARDS
        ======================================================== */}

        <Route
          path="/hazards"
          element={
            <>
              <Navbar />

              <Hazards />
            </>
          }
        />

        {/* ========================================================
            ALERTS
        ======================================================== */}

        <Route
          path="/alerts"
          element={
            <>
              <Navbar />

              <Alerts />
            </>
          }
        />

        {/* ========================================================
            RESOURCES
        ======================================================== */}

        <Route
          path="/resources"
          element={
            <>
              <Navbar />

              <Resources />
            </>
          }
        />

        {/* ========================================================
            Ask INDRA AI
        ======================================================== */}

        <Route
          path="/ask"
          element={
            <>
              <Navbar />

              <AskIndra />
            </>
          }
        />

        {/* ========================================================
            ABOUT
        ======================================================== */}

        <Route
          path="/about"
          element={
            <>
              <Navbar />

              <About />
            </>
          }
        />

        {/* ========================================================
    SIGN IN
======================================================== */}

        <Route path="/signin" element={<SignIn />} />

        {/* ========================================================
            FALLBACK
        ======================================================== */}

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
