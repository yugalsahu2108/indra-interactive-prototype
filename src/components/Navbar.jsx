import React from "react";

import { Search, MapPin, ChevronDown } from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

/* ================================================================
   NAVIGATION ITEMS
================================================================ */

const navItems = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "Explore",
    path: "/explore",
  },

  {
    label: "Hazards",
    path: "/hazards",
  },

  {
    label: "Alerts",
    path: "/alerts",
  },

  {
    label: "Resources",
    path: "/resources",
  },

  {
    label: "About",
    path: "/about",
  },
];

/* ================================================================
   INDRA NAVBAR
================================================================ */

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="indra-navbar">
      {/* ==========================================================
          LEFT SIDE
      ========================================================== */}

      <button
        className="indra-navbar-brand"
        onClick={() => navigate("/")}
        type="button"
      >
        {/* <div className="indra-navbar-logo">
          <div className="indra-wave indra-wave-1"></div>

          <div className="indra-wave indra-wave-2"></div>

          <div className="indra-wave indra-wave-3"></div>
        </div> */}

        <div className="indra-navbar-logo">
          <img src={`${import.meta.env.BASE_URL}Indra_logo.jpeg`} alt="INDRA" />
        </div>

        <div className="indra-navbar-brand-text">
          <div className="indra-navbar-brand-name">INDRA</div>

          <div className="indra-navbar-brand-tagline">
            Intelligent Network for Disaster Response & Assistance
          </div>
        </div>
      </button>

      {/* ==========================================================
          CENTER NAVIGATION

          IMPORTANT:
          This uses unique classes so the old CSS cannot
          stretch this navigation.
      ========================================================== */}

      <nav className="indra-navbar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `indra-navbar-link ${isActive ? "indra-navbar-link-active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* ==========================================================
          RIGHT SIDE
      ========================================================== */}

      <div className="indra-navbar-actions">
        {/* ========================================================
            SEARCH
        ========================================================= */}

        <button
          className="indra-navbar-search"
          type="button"
          onClick={() => navigate("/ask")}
          title="Ask INDRA AI"
        >
          <Search size={21} strokeWidth={1.8} />
        </button>

        {/* ========================================================
            LOCATION
        ========================================================= */}

        <button
          className="indra-navbar-location"
          type="button"
          onClick={() => navigate("/explore")}
        >
          <MapPin size={19} strokeWidth={1.8} />

          <span>India</span>

          <ChevronDown size={16} strokeWidth={1.8} />
        </button>

        {/* ========================================================
            SIGN IN
        ========================================================= */}

        <button
          className="indra-navbar-signin"
          type="button"
          onClick={() => navigate("/signin")}
        >
          Sign in
        </button>
      </div>
    </header>
  );
}
