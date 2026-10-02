import React, { useState } from "react";

import {
  AlertTriangle,
  Waves,
  Wind,
  Mountain,
  MapPin,
  Clock3,
  ExternalLink,
  Filter,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

/* ================================================================
   INDRA ALERT DATA

   Prototype data only.

   In the production system these alerts should be grounded in
   verified official warning sources.
================================================================ */

const alerts = [
  {
    id: 1,

    severity: "HIGH",

    severityClass: "high",

    title: "Flood warning",

    location: "Dibrugarh, Assam",

    hazard: "Flood",

    updated: "18 min ago",

    status: "Active",

    description:
      "Water levels are shown above the illustrative warning threshold, with a rising trend in the selected area.",

    source: "CWC",

    icon: Waves,

    iconClass: "flood",
  },

  {
    id: 2,

    severity: "MODERATE",

    severityClass: "moderate",

    title: "Landslide advisory",

    location: "Uttarakhand",

    hazard: "Landslide",

    updated: "42 min ago",

    status: "Watch",

    description:
      "Heavy rainfall may increase slope instability in vulnerable areas. Check local road and district advisories.",

    source: "IMD · State advisory",

    icon: Mountain,

    iconClass: "landslide",
  },

  {
    id: 3,

    severity: "WATCH",

    severityClass: "watch",

    title: "Cyclone advisory",

    location: "Odisha coast",

    hazard: "Cyclone",

    updated: "1 hr ago",

    status: "Monitoring",

    description:
      "A weather system is being monitored. Review official updates before travelling through affected coastal areas.",

    source: "IMD",

    icon: Wind,

    iconClass: "cyclone",
  },
];

/* ================================================================
   ALERTS PAGE
================================================================ */

function Alerts() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("All");

  /* ================================================================
     FILTER
  ================================================================= */

  const filteredAlerts =
    activeFilter === "All"
      ? alerts
      : alerts.filter((alert) => alert.hazard === activeFilter);

  return (
    <main className="indra-alerts-page">
      <div className="indra-alerts-container">
        {/* ========================================================
            HEADER
        ======================================================== */}

        <div className="indra-alerts-header">
          <div>
            <div className="alerts-kicker">ALERT CENTER</div>

            <h1>
              What needs
              <span>attention</span>
            </h1>

            <p>Official warning context interpreted for specific locations.</p>
          </div>

          <div className="alerts-header-status">
            <span className="alerts-live-dot"></span>

            <div>
              <strong>3 active alerts</strong>

              <span>Prototype status</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            SUMMARY STRIP
        ======================================================== */}

        <section className="alerts-summary-strip">
          <div className="alerts-summary-box danger">
            <div className="alerts-summary-icon">
              <AlertTriangle size={18} />
            </div>

            <div>
              <strong>1</strong>

              <span>High risk</span>
            </div>
          </div>

          <div className="alerts-summary-box warning">
            <div className="alerts-summary-icon">
              <Mountain size={18} />
            </div>

            <div>
              <strong>1</strong>

              <span>Advisories</span>
            </div>
          </div>

          <div className="alerts-summary-box watch">
            <div className="alerts-summary-icon">
              <Wind size={18} />
            </div>

            <div>
              <strong>1</strong>

              <span>Watch</span>
            </div>
          </div>

          <div className="alerts-summary-info">
            <ShieldCheck size={17} />

            <span>
              Alerts are presented with source context so users can understand
              what they mean for a place.
            </span>
          </div>
        </section>

        {/* ========================================================
            FILTER BAR
        ======================================================== */}

        <section className="alerts-filter-bar">
          <div className="alerts-filter-title">
            <Filter size={15} />
            Filter by hazard
          </div>

          <div className="alerts-filter-buttons">
            {["All", "Flood", "Cyclone", "Landslide"].map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* ========================================================
            ALERT LIST
        ======================================================== */}

        <div className="indra-alert-list">
          {filteredAlerts.map((alert) => {
            const Icon = alert.icon;

            return (
              <article key={alert.id} className="indra-alert-card">
                {/* ==================================================
                      LEFT INDICATOR
                  ================================================== */}

                <div
                  className={`alert-card-side-indicator ${alert.severityClass}`}
                ></div>

                {/* ==================================================
                      ICON
                  ================================================== */}

                <div className={`indra-alert-icon ${alert.iconClass}`}>
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                {/* ==================================================
                      CONTENT
                  ================================================== */}

                <div className="indra-alert-content">
                  <div className="indra-alert-top">
                    <div>
                      <div className="indra-alert-title-row">
                        <h2>{alert.title}</h2>

                        <span
                          className={`alert-severity-pill ${alert.severityClass}`}
                        >
                          {alert.severity}
                        </span>
                      </div>

                      <div className="indra-alert-location">
                        <MapPin size={13} />

                        {alert.location}
                      </div>
                    </div>

                    <div className="indra-alert-time">
                      <Clock3 size={13} />

                      {alert.updated}
                    </div>
                  </div>

                  <p className="indra-alert-description">{alert.description}</p>

                  {/* =================================================
                        SOURCE
                    ================================================= */}

                  <div className="indra-alert-source-row">
                    <span className="alert-source-label">Source</span>

                    <span className="alert-source-value">{alert.source}</span>

                    <span className="alert-status">● {alert.status}</span>
                  </div>

                  {/* =================================================
                        ACTIONS
                    ================================================= */}

                  <div className="indra-alert-actions">
                    <button type="button" onClick={() => navigate("/ask")}>
                      Ask INDRA AI about this alert
                      <ArrowRight size={14} />
                    </button>

                    <button type="button" onClick={() => navigate("/explore")}>
                      View on map
                      <MapPin size={14} />
                    </button>

                    <button type="button">
                      Official source
                      <ExternalLink size={13} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ========================================================
            EMPTY STATE
        ======================================================== */}

        {filteredAlerts.length === 0 && (
          <div className="alerts-empty-state">
            No prototype alerts match this filter.
          </div>
        )}

        {/* ========================================================
            FOOTNOTE
        ======================================================== */}

        <div className="alerts-footnote">
          <ShieldCheck size={14} />

          <span>
            Demonstration UI. Operational alerts should be generated and cited
            from verified official warning sources.
          </span>
        </div>
      </div>
    </main>
  );
}

export default Alerts;
