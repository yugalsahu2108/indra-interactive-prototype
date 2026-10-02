import React from "react";

import Navbar from "../components/Navbar";

import FeatureCards from "../components/FeatureCards";

import AskIndraSection from "../components/AskIndraSection";

import Hero from "../components/Hero";

/* ================================================================
   HOME PAGE

   Final structure:

   Navbar
   Hero
   Feature Cards
   Ask INDRA AI

   IMPORTANT:
   The entire hero is handled by Hero.jsx.

   Do NOT render EarthScene directly here.
================================================================ */

function Home() {
  return (
    <div className="indra-app">
      {/* ==========================================================
          NAVIGATION
      ========================================================== */}

      <Navbar />

      {/* ==========================================================
          MAIN HERO
      ========================================================== */}

      <Hero />

      {/* ==========================================================
          FEATURE CARDS
      ========================================================== */}

      <FeatureCards />

      {/* ==========================================================
          Ask INDRA AI SECTION
      ========================================================== */}

      <AskIndraSection />
    </div>
  );
}

export default Home;
