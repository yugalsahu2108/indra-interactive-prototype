import React from "react";

import { ArrowUpRight } from "lucide-react";

import { useNavigate } from "react-router-dom";

/* ================================================================
   HAZARD DATA

   These are local images extracted from the INDRA reference
   mockup, so the cards do not depend on external image URLs.
================================================================ */

const hazards = [
  {
    title: "Floods",
    image: "/hazards/floods.jpg",
  },

  {
    title: "Cyclones",
    image: "/hazards/cyclones.jpg",
  },

  {
    title: "Earthquakes",
    image: "/hazards/earthquakes.jpg",
  },

  {
    title: "Landslides",
    image: "/hazards/landslides.jpg",
  },

  {
    title: "Heatwaves",
    image: "/hazards/heatwaves.jpg",
  },

  {
    title: "Lightning",
    image: "/hazards/lightning.jpg",
  },
];

/* ================================================================
   HAZARD CARDS
================================================================ */

function HazardCards() {
  const navigate = useNavigate();

  return (
    <div className="hazard-cards">
      {hazards.map((hazard) => (
        <button
          key={hazard.title}
          type="button"
          className="hazard-card"
          onClick={() => navigate("/hazards")}
        >
          {/* ======================================================
              IMAGE
          ====================================================== */}

          <img
            src={hazard.image}
            alt={hazard.title}
            className="hazard-card-image"
          />

          {/* ======================================================
              DARK OVERLAY

              Keeps the white title readable.
          ====================================================== */}

          <div className="hazard-card-overlay" />

          {/* ======================================================
              CARD CONTENT
          ====================================================== */}

          <div className="hazard-card-content">
            <span className="hazard-card-title">{hazard.title}</span>

            <span className="hazard-card-arrow">
              <ArrowUpRight size={14} strokeWidth={2} />
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}

export default HazardCards;
