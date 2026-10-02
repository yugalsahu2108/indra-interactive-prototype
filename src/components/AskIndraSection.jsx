import React, { useState } from "react";

import { MapPin, ArrowRight } from "lucide-react";

import HazardCards from "./HazardCards";

/* ================================================================
   Ask INDRA AI SECTION
================================================================ */

function AskIndraSection() {
  const [location, setLocation] = useState("");

  /* ================================================================
     EXAMPLE QUESTIONS
  ================================================================= */

  const examples = [
    "What’s the flood risk in Assam?",

    "Past cyclones in Odisha",

    "Landslide risk in Uttarakhand",

    "Nearest relief centres in Chennai",
  ];

  /* ================================================================
     SEARCH HANDLER
  ================================================================= */

  const handleSearch = () => {
    const value = location.trim();

    if (!value) {
      return;
    }

    console.log("INDRA location query:", value);
  };

  return (
    <section className="ask-indra-section">
      <div className="ask-indra-inner">
        {/* ==========================================================
            LEFT SIDE
        ========================================================== */}

        <div className="ask-indra-left">
          <h2 className="ask-indra-title">
            Ask <span>INDRA AI</span>
          </h2>

          <p className="ask-indra-description">
            Get trusted, location-specific answers about natural hazards, risks,
            past events and support services.
          </p>

          {/* ========================================================
              LOCATION SEARCH
          ======================================================== */}

          <div className="ask-indra-search">
            <div className="ask-indra-location-icon">
              <MapPin size={21} strokeWidth={1.8} />
            </div>

            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Enter a location (e.g. Guwahati, Assam)"
            />

            <button className="ask-indra-search-button" onClick={handleSearch}>
              <ArrowRight size={21} strokeWidth={2} />
            </button>
          </div>

          {/* ========================================================
              EXAMPLES
          ======================================================== */}

          <div className="ask-indra-examples">
            <span className="ask-indra-examples-label">Try examples:</span>

            {examples.map((example) => (
              <button
                key={example}
                className="ask-indra-chip"
                onClick={() => setLocation(example)}
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        {/* ==========================================================
            RIGHT SIDE
        ========================================================== */}

        <div className="ask-indra-right">
          <div className="hazard-section-header">
            <h3>Explore by hazard type</h3>

            <button className="hazard-view-all">
              View all
              <ArrowRight size={14} />
            </button>
          </div>

          <HazardCards />
        </div>
      </div>
    </section>
  );
}

export default AskIndraSection;
