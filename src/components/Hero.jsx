import React from "react";

import {
  ArrowRight,
  Map,
  ShieldCheck,
  AlertTriangle,
  ChevronRight,
  Radio,
} from "lucide-react";

import { Link } from "react-router-dom";

import EarthScene from "./EarthScene";

/* ================================================================
   INDRA HOME HERO

   IMPORTANT:

   - Real 3D Earth remains.
   - Earth remains static.
   - India remains facing the viewer.
   - Live hazard cards are rendered ABOVE the Earth.
   - Hero CSS is contained inside this component so the huge
     index.css file cannot override it.
================================================================ */

/* ================================================================
   LIVE HAZARD CARD
================================================================ */

function LiveHazardCard({ color, icon, title, location, time, source, style }) {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 100,
        width: "205px",
        padding: "10px 12px",
        border: "1px solid rgba(137, 182, 214, 0.26)",
        borderRadius: "14px",
        background: "rgba(5, 22, 36, 0.94)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 15px 38px rgba(0, 0, 0, 0.38)",
        color: "#fff",
        pointerEvents: "none",
        ...style,
      }}
    >
      {/* ========================================================
          TOP
      ======================================================== */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color,
            fontSize: "8px",
            fontWeight: 800,
            letterSpacing: "0.13em",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: color,
              boxShadow: `0 0 10px ${color}`,
              display: "inline-block",
            }}
          />
          LIVE
        </div>

        <span
          style={{
            color: "rgba(215, 231, 241, 0.42)",
            fontSize: "8px",
          }}
        >
          {time}
        </span>
      </div>

      {/* ========================================================
          MAIN
      ======================================================== */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            flex: "0 0 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            background: `${color}22`,
            border: `1px solid ${color}38`,
            fontSize: "17px",
          }}
        >
          {icon}
        </div>

        <div
          style={{
            minWidth: 0,
          }}
        >
          <strong
            style={{
              display: "block",
              fontSize: "13px",
              lineHeight: 1.2,
              fontWeight: 650,
            }}
          >
            {title}
          </strong>

          <span
            style={{
              display: "block",
              marginTop: "3px",
              color: "rgba(216, 232, 242, 0.52)",
              fontSize: "9px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {location}
          </span>
        </div>
      </div>

      {/* ========================================================
          SOURCE
      ======================================================== */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginTop: "8px",
          paddingTop: "7px",
          borderTop: "1px solid rgba(127, 165, 190, 0.11)",
          color: "rgba(182, 205, 220, 0.40)",
          fontSize: "8px",
        }}
      >
        <Radio size={10} color={color} />

        {source}
      </div>
    </div>
  );
}

/* ================================================================
   HERO
================================================================ */

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "465px",
        minHeight: "465px",
        overflow: "hidden",
        background: "#020b14",
      }}
    >
      {/* ==========================================================
          HERO CONTENT
      ========================================================== */}

      <div
        style={{
          position: "absolute",
          zIndex: 20,
          left: "5.2%",
          top: "50%",
          transform: "translateY(-48%)",
          width: "46%",
          maxWidth: "680px",
        }}
      >
        {/* ========================================================
            BADGE
        ======================================================== */}

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "7px 13px",
            marginBottom: "20px",
            border: "1px solid rgba(105, 156, 196, 0.34)",
            borderRadius: "30px",
            background: "rgba(18, 47, 72, 0.63)",
            color: "#e6eef6",
            fontSize: "12px",
            backdropFilter: "blur(10px)",
          }}
        >
          <ShieldCheck size={14} />A sovereign AI system for a safer, more
          resilient India
        </div>

        {/* ========================================================
            HEADING
        ======================================================== */}

        <h1
          style={{
            margin: "0 0 20px",
            color: "#fff",
            fontSize: "clamp(48px, 4.5vw, 68px)",
            lineHeight: 0.98,
            letterSpacing: "-3.4px",
            fontWeight: 700,
          }}
        >
          Smarter information
          <br />
          for a{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #79bdff, #2d80f0)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            safer India
          </span>
        </h1>

        {/* ========================================================
            DESCRIPTION
        ======================================================== */}

        <p
          style={{
            maxWidth: "600px",
            margin: "0 0 25px",
            color: "#b4c2d1",
            fontSize: "15px",
            lineHeight: 1.52,
          }}
        >
          INDRA is an AI-powered disaster intelligence system that provides
          trusted, location-specific information on natural hazards, past
          events, exposure, and the right contacts — so citizens, officials and
          relief workers can make better, faster decisions.
        </p>

        {/* ========================================================
            BUTTONS
        ======================================================== */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <Link
            to="/ask"
            style={{
              height: "52px",
              padding: "0 25px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #3189ff, #2472ed)",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              boxShadow: "0 14px 34px rgba(33, 116, 244, 0.27)",
            }}
          >
            Ask about your location
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/explore"
            style={{
              height: "52px",
              padding: "0 22px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "9px",
              border: "1px solid rgba(153, 182, 208, 0.56)",
              borderRadius: "14px",
              background: "rgba(5, 16, 28, 0.35)",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            <Map size={18} />
            Explore map
          </Link>
        </div>
      </div>

      {/* ==========================================================
          EARTH
      ========================================================== */}

      <div
        style={{
          position: "absolute",
          zIndex: 5,
          top: "-25px",
          right: "-35px",
          width: "63vw",
          height: "560px",
          pointerEvents: "none",
        }}
      >
        <EarthScene />
      </div>

      {/* ==========================================================
          LIVE TRACKERS

          These are DIRECT children of the HERO.

          They cannot be hidden behind the Earth canvas.
      ========================================================== */}

      {/* ========================================================
          LANDSLIDE
      ======================================================== */}

      <LiveHazardCard
        color="#d3a15f"
        icon="⛰"
        title="Landslide Risk"
        location="Uttarakhand · Himalayas"
        time="14 min ago"
        source="NRSC / INDRA"
        style={{
          left: "58%",
          top: "7%",
        }}
      />

      {/* ========================================================
          FLOOD
      ======================================================== */}

      <LiveHazardCard
        color="#ff565d"
        icon="🌊"
        title="Flood Risk"
        location="Assam · Brahmaputra belt"
        time="2 min ago"
        source="CWC / INDRA"
        style={{
          left: "71%",
          top: "18%",
        }}
      />

      {/* ========================================================
          HEAVY RAINFALL
      ======================================================== */}

      <LiveHazardCard
        color="#5eafe4"
        icon="☁"
        title="Heavy Rainfall"
        location="Northeast India"
        time="8 min ago"
        source="IMD / INDRA"
        style={{
          left: "65%",
          top: "48%",
        }}
      />

      {/* ==========================================================
          ACTIVE ALERTS
      ========================================================== */}

      <Link
        to="/alerts"
        style={{
          position: "absolute",
          zIndex: 300,
          top: "35px",
          right: "30px",
          width: "178px",
          minHeight: "72px",
          padding: "11px 12px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          border: "1px solid rgba(128, 171, 205, 0.30)",
          borderRadius: "14px",
          background: "rgba(7, 25, 41, 0.92)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            width: "37px",
            height: "37px",
            flex: "0 0 37px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            background: "rgba(255, 77, 77, 0.15)",
            color: "#ff6464",
          }}
        >
          <AlertTriangle size={20} />
        </div>

        <div
          style={{
            flex: 1,
          }}
        >
          <span
            style={{
              display: "block",
              color: "rgba(229, 240, 248, 0.75)",
              fontSize: "10px",
            }}
          >
            Active Alerts
          </span>

          <strong
            style={{
              display: "block",
              marginTop: "1px",
              color: "#ff6262",
              fontSize: "26px",
              lineHeight: 1,
            }}
          >
            3
          </strong>
        </div>

        <ChevronRight size={18} color="rgba(214, 228, 239, 0.70)" />
      </Link>
    </section>
  );
}

export default Hero;
