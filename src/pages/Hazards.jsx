import React from "react";

import {
  Waves,
  Wind,
  Activity,
  Mountain,
  ThermometerSun,
  Zap,
  ArrowRight,
} from "lucide-react";

/* ================================================================
   HAZARD DATA

   INDRA currently presents these major hazard categories.
================================================================ */

const hazards = [
  {
    title: "Floods",
    icon: Waves,
    color: "#338fff",
    description:
      "Flood risk, historical events, affected areas and relevant advisories.",
  },

  {
    title: "Cyclones",
    icon: Wind,
    color: "#9a72ee",
    description:
      "Cyclone warnings, affected regions, historical tracks and response context.",
  },

  {
    title: "Earthquakes",
    icon: Activity,
    color: "#e07a4f",
    description: "Earthquake activity, hazard context and historical events.",
  },

  {
    title: "Landslides",
    icon: Mountain,
    color: "#c69a58",
    description:
      "Slope instability, exposed settlements and landslide information.",
  },

  {
    title: "Heatwaves",
    icon: ThermometerSun,
    color: "#e5a93e",
    description: "Heat advisories, affected areas and safety information.",
  },

  {
    title: "Lightning",
    icon: Zap,
    color: "#65a8ff",
    description: "Lightning alerts, risk areas and safety information.",
  },
];

/* ================================================================
   HAZARDS PAGE
================================================================ */

function Hazards() {
  return (
    <main className="page-shell">
      <div className="page-container">
        {/* ========================================================
            PAGE HEADER
        ======================================================== */}

        <div className="page-heading">
          <div className="page-kicker">HAZARDS</div>

          <h1>
            Understand the
            <span>hazard landscape</span>
          </h1>

          <p>
            Explore the natural hazards tracked by INDRA and understand current
            risk, historical activity and response context.
          </p>
        </div>

        {/* ========================================================
            HAZARD GRID
        ======================================================== */}

        <div className="hazard-intelligence-grid">
          {hazards.map((hazard) => {
            const Icon = hazard.icon;

            return (
              <button
                key={hazard.title}
                className="hazard-intelligence-card"
                type="button"
              >
                {/* ==================================================
                    ICON
                ================================================== */}

                <div
                  className="hazard-intelligence-icon"
                  style={{
                    "--hazard-color": hazard.color,
                  }}
                >
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                {/* ==================================================
                    TEXT
                ================================================== */}

                <div className="hazard-intelligence-content">
                  <h2>{hazard.title}</h2>

                  <p>{hazard.description}</p>

                  <span className="hazard-intelligence-link">
                    Explore hazard
                    <ArrowRight size={16} strokeWidth={2} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Hazards;
