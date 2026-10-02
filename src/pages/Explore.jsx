import React, { useState } from "react";

import {
  Search,
  MapPin,
  Layers3,
  Waves,
  Mountain,
  Activity,
  History,
  Users,
  Phone,
  ArrowRight,
  Navigation,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

/* ================================================================
   INDRA EXPLORE PAGE

   STEP 6

   Purpose:
   - Map-first citizen view
   - Search/select a location
   - Show hazard context
   - Show past events
   - Show exposure
   - Show support contacts
   - Provide a path into Ask INDRA AI

   IMPORTANT:
   This is prototype UI data.
   We will connect real data later.
================================================================ */

/* ================================================================
   HAZARD LAYERS
================================================================ */

const hazardLayers = [
  {
    id: "flood",
    label: "Flood zones",
    icon: Waves,
    color: "#378cff",
  },

  {
    id: "landslide",
    label: "Landslide",
    icon: Mountain,
    color: "#c99b58",
  },

  {
    id: "earthquake",
    label: "Earthquake",
    icon: Activity,
    color: "#dd6a63",
  },

  {
    id: "history",
    label: "Past events",
    icon: History,
    color: "#a777e8",
  },
];

/* ================================================================
   EXPLORE PAGE
================================================================ */

function Explore() {
  const navigate = useNavigate();

  /* ================================================================
     STATE
  ================================================================= */

  const [searchValue, setSearchValue] = useState("Dibrugarh, Assam");

  const [selectedLocation, setSelectedLocation] = useState("Dibrugarh, Assam");

  const [activeLayers, setActiveLayers] = useState([
    "flood",
    "landslide",
    "history",
  ]);

  const [mapMode, setMapMode] = useState("risk");

  /* ================================================================
     TOGGLE MAP LAYER
  ================================================================= */

  const toggleLayer = (layerId) => {
    setActiveLayers((current) => {
      if (current.includes(layerId)) {
        return current.filter((id) => id !== layerId);
      }

      return [...current, layerId];
    });
  };

  /* ================================================================
     SEARCH LOCATION
  ================================================================= */

  const handleSearch = () => {
    const value = searchValue.trim();

    if (!value) {
      return;
    }

    setSelectedLocation(value);
  };

  /* ================================================================
     HANDLE ENTER KEY
  ================================================================= */

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <main className="explore-v2-page">
      <div className="explore-v2-container">
        {/* ==========================================================
            PAGE TOP
        ========================================================== */}

        <div className="explore-v2-top">
          <div className="explore-v2-heading">
            <div className="explore-v2-kicker">EXPLORE</div>

            <h1>
              See risk where
              <span>it matters</span>
            </h1>

            <p>
              Pick a location to explore hazard zones, past events, exposure and
              local support.
            </p>
          </div>

          {/* ========================================================
              LOCATION SEARCH
          ======================================================== */}

          <div className="explore-v2-search">
            <MapPin size={19} strokeWidth={1.8} />

            <input
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search a location"
            />

            <button type="button" onClick={handleSearch}>
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* ==========================================================
            MAIN EXPLORER
        ========================================================== */}

        <section className="explore-v2-workspace">
          {/* ========================================================
              MAP PANEL
          ======================================================== */}

          <div className="explore-v2-map-panel">
            {/* ======================================================
                MAP HEADER
            ====================================================== */}

            <div className="explore-v2-map-header">
              <div>
                <div className="explore-v2-map-location">
                  <MapPin size={15} />

                  {selectedLocation}
                </div>

                <span>Prototype hazard intelligence map</span>
              </div>

              <div className="explore-v2-map-modes">
                <button
                  type="button"
                  className={mapMode === "risk" ? "active" : ""}
                  onClick={() => setMapMode("risk")}
                >
                  Risk
                </button>

                <button
                  type="button"
                  className={mapMode === "history" ? "active" : ""}
                  onClick={() => setMapMode("history")}
                >
                  History
                </button>
              </div>
            </div>

            {/* ======================================================
                MAP
            ====================================================== */}

            <div className="explore-v2-map">
              {/* ====================================================
                  GRID
              ==================================================== */}

              <div className="explore-v2-map-grid"></div>

              {/* ====================================================
                  MAP TOP LABEL
              ==================================================== */}

              <div className="explore-v2-map-tag">
                <span className="explore-v2-live-dot"></span>
                India · Assam pilot
              </div>

              {/* ====================================================
                  WATER / RIVER
              ==================================================== */}

              <div className="explore-v2-river river-main"></div>

              <div className="explore-v2-river river-branch"></div>

              {/* ====================================================
                  INDIA / ASSAM MAP SHAPE

                  Stylised prototype representation.
              ==================================================== */}

              <div className="explore-v2-india">
                <div className="explore-v2-india-glow"></div>

                <div className="explore-v2-india-shape">
                  <span>ASSAM</span>
                </div>
              </div>

              {/* ====================================================
                  FLOOD ZONE
              ==================================================== */}

              {activeLayers.includes("flood") && (
                <div className="map-zone flood-zone zone-one">
                  <span>Flood zone</span>
                </div>
              )}

              {activeLayers.includes("flood") && (
                <div className="map-zone flood-zone zone-two"></div>
              )}

              {/* ====================================================
                  LANDSLIDE ZONE
              ==================================================== */}

              {activeLayers.includes("landslide") && (
                <div className="map-zone landslide-zone">Landslide</div>
              )}

              {/* ====================================================
                  HISTORY MARKERS
              ==================================================== */}

              {activeLayers.includes("history") && (
                <>
                  <button
                    type="button"
                    className="history-marker history-one"
                    title="Past flood event"
                  >
                    22
                  </button>

                  <button
                    type="button"
                    className="history-marker history-two"
                    title="Past flood event"
                  >
                    20
                  </button>

                  <button
                    type="button"
                    className="history-marker history-three"
                    title="Past flood event"
                  >
                    18
                  </button>
                </>
              )}

              {/* ====================================================
                  CURRENT LOCATION
              ==================================================== */}

              <div className="explore-v2-current-location">
                <span className="current-location-ring"></span>

                <span className="current-location-dot"></span>

                <div className="current-location-label">
                  <strong>Dibrugarh</strong>

                  <span>Selected location</span>
                </div>
              </div>

              {/* ====================================================
                  EXPOSURE PILL
              ==================================================== */}

              <div className="explore-v2-exposure-pill">
                <Users size={15} />
                Exposure in hazard zone:
                <strong>Elevated</strong>
              </div>

              {/* ====================================================
                  MAP CONTROLS
              ==================================================== */}

              <div className="explore-v2-map-controls">
                <button type="button" title="Current location">
                  <Navigation size={16} />
                </button>

                <button type="button" title="Layers">
                  <Layers3 size={16} />
                </button>
              </div>
            </div>

            {/* ======================================================
                MAP LEGEND
            ====================================================== */}

            <div className="explore-v2-map-footer">
              <div className="explore-v2-legend">
                <div>
                  <span className="legend-swatch flood"></span>
                  Flood
                </div>

                <div>
                  <span className="legend-swatch landslide"></span>
                  Landslide
                </div>

                <div>
                  <span className="legend-swatch history"></span>
                  Past event
                </div>

                <div>
                  <span className="legend-swatch selected"></span>
                  Selected
                </div>
              </div>

              <span>Prototype map · data will be connected later</span>
            </div>
          </div>

          {/* ========================================================
              RIGHT DETAIL PANEL
          ======================================================== */}

          <aside className="explore-v2-details">
            {/* ======================================================
                LOCATION
            ====================================================== */}

            <div className="explore-v2-location-card">
              <div className="explore-v2-location-top">
                <div>
                  <span>SELECTED LOCATION</span>

                  <h2>Dibrugarh</h2>

                  <p>Assam, India</p>
                </div>

                <div className="explore-v2-location-check">
                  <CheckCircle2 size={19} />
                </div>
              </div>
            </div>

            {/* ======================================================
                CURRENT RISK
            ====================================================== */}

            <div className="explore-v2-risk-card">
              <div className="explore-v2-risk-icon">
                <Waves size={23} />
              </div>

              <div className="explore-v2-risk-content">
                <div className="explore-v2-risk-title">
                  <span>FLOOD RISK</span>

                  <strong>HIGH</strong>
                </div>

                <p>CWC gauge above warning level · trend rising</p>

                <small>Source · CWC</small>
              </div>
            </div>

            {/* ======================================================
                QUICK STATS
            ====================================================== */}

            <div className="explore-v2-stats">
              <div>
                <span>Past events</span>

                <strong>12</strong>

                <small>recorded</small>
              </div>

              <div>
                <span>Exposure</span>

                <strong>High</strong>

                <small>hazard zone</small>
              </div>

              <div>
                <span>Alerts</span>

                <strong>3</strong>

                <small>active</small>
              </div>
            </div>

            {/* ======================================================
                PAST EVENTS
            ====================================================== */}

            <div className="explore-v2-section-card">
              <div className="explore-v2-section-title">
                <div>
                  <History size={16} />

                  <span>Past events</span>
                </div>

                <button type="button" className="explore-v2-small-link">
                  View all
                </button>
              </div>

              <div className="explore-v2-event">
                <div className="event-year">2022</div>

                <div>
                  <strong>Brahmaputra flood</strong>

                  <span>Major monsoon flooding</span>
                </div>
              </div>

              <div className="explore-v2-event">
                <div className="event-year">2020</div>

                <div>
                  <strong>Assam flood event</strong>

                  <span>Significant affected areas</span>
                </div>
              </div>
            </div>

            {/* ======================================================
                EXPOSURE
            ====================================================== */}

            <div className="explore-v2-section-card">
              <div className="explore-v2-section-title">
                <div>
                  <Users size={16} />

                  <span>Exposure</span>
                </div>
              </div>

              <div className="explore-v2-exposure-row">
                <div>
                  <strong>Human exposure</strong>

                  <span>Population within hazard zone</span>
                </div>

                <strong className="exposure-value">Elevated</strong>
              </div>

              <div className="explore-v2-exposure-row">
                <div>
                  <strong>Economic exposure</strong>

                  <span>Assets within affected area</span>
                </div>

                <strong className="exposure-value">Elevated</strong>
              </div>
            </div>

            {/* ======================================================
                Ask INDRA AI ACTION
            ====================================================== */}

            <button
              type="button"
              className="explore-v2-ask-button"
              onClick={() => navigate("/ask")}
            >
              <div>
                <strong>Ask INDRA AI about this place</strong>

                <span>Get a cited answer using this location</span>
              </div>

              <ArrowRight size={19} />
            </button>

            {/* ======================================================
                CONTACTS
            ====================================================== */}

            <div className="explore-v2-contact-row">
              <button type="button">
                <Phone size={15} />
                Hospital
              </button>

              <button type="button">
                <Phone size={15} />
                Police
              </button>
            </div>
          </aside>
        </section>

        {/* ==========================================================
            LAYER BAR
        ========================================================== */}

        <section className="explore-v2-layers">
          <div className="explore-v2-layers-heading">
            <div>
              <Layers3 size={17} />

              <strong>Map layers</strong>
            </div>

            <span>Toggle what you want to see</span>
          </div>

          <div className="explore-v2-layer-buttons">
            {hazardLayers.map((layer) => {
              const Icon = layer.icon;

              const isActive = activeLayers.includes(layer.id);

              return (
                <button
                  key={layer.id}
                  type="button"
                  className={isActive ? "active" : ""}
                  onClick={() => toggleLayer(layer.id)}
                >
                  <Icon
                    size={17}
                    style={{
                      color: layer.color,
                    }}
                  />

                  {layer.label}

                  <span>{isActive ? "On" : "Off"}</span>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Explore;
