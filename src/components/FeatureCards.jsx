import React from "react";

import { Search, Map, BarChart3, Users, Bell, FileCheck2 } from "lucide-react";

/* ================================================================
   FEATURE CARD DATA

   These six cards are taken from the INDRA reference UI.
================================================================ */

const features = [
  {
    id: 1,

    icon: Search,

    title: "Ask by location",

    description:
      "Get hazard risk, past events and exposure for any place in India.",

    color: "#2f8cff",
  },

  {
    id: 2,

    icon: Map,

    title: "See it on a map",

    description:
      "Interactive maps with hazard zones, past events and key infrastructure.",

    color: "#24b779",
  },

  {
    id: 3,

    icon: BarChart3,

    title: "Estimate the stakes",

    description: "Understand likely human and economic exposure.",

    color: "#d39a3c",
  },

  {
    id: 4,

    icon: Users,

    title: "Get connected",

    description: "One-tap access to medical, police or NGO contacts.",

    color: "#8a63e6",
  },

  {
    id: 5,

    icon: Bell,

    title: "Get alerted",

    description: "Timely advisories and early warnings from official sources.",

    color: "#e34c50",
  },

  {
    id: 6,

    icon: FileCheck2,

    title: "Trust the answer",

    description:
      "Every response cites official sources with explainable information.",

    color: "#2e86ed",
  },
];

/* ================================================================
   FEATURE CARDS
================================================================ */

function FeatureCards() {
  return (
    <section className="feature-cards-section">
      <div className="feature-cards-container">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <button
              key={feature.id}
              className="feature-card"
              style={{
                "--feature-color": feature.color,
              }}
            >
              {/* ==================================================
                  ICON
              ================================================== */}

              <div className="feature-card-icon">
                <Icon size={22} strokeWidth={2} />
              </div>

              {/* ==================================================
                  TEXT
              ================================================== */}

              <div className="feature-card-content">
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureCards;
