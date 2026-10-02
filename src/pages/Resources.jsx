import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronRight,
  ExternalLink,
  Hospital,
  MapPin,
  Navigation,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <main className="indra-resources-page">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <section className="resources-header">
        <div>
          <div className="resources-eyebrow">
            <span className="resources-eyebrow-dot" />
            LOCATION-AWARE SUPPORT
          </div>

          <h1>
            Get connected
            <br />
            <span>when it matters most.</span>
          </h1>

          <p>
            Find nearby hospitals, police stations, and relief organizations for
            your selected location.
          </p>
        </div>

        <div className="resources-location-pill">
          <MapPin size={17} />
          <div>
            <span>Selected location</span>
            <strong>Dibrugarh, Assam</strong>
          </div>
        </div>
      </section>

      {/* =========================
          LOCATION SUMMARY
      ========================== */}
      <section className="resources-location-card">
        <div className="resources-location-icon">
          <MapPin size={24} />
        </div>

        <div className="resources-location-content">
          <span className="resources-card-label">CURRENT AREA</span>

          <h2>Dibrugarh, Assam</h2>

          <p>Resources are shown for the selected disaster-affected area.</p>
        </div>

        <Link to="/explore" className="resources-change-location">
          Change location
          <ChevronRight size={17} />
        </Link>
      </section>

      {/* =========================
          QUICK ACTIONS
      ========================== */}
      <section className="resources-section">
        <div className="resources-section-heading">
          <div>
            <span className="resources-card-label">QUICK ACTIONS</span>
            <h2>Who do you need?</h2>
          </div>

          <p>One tap to reach the right local service.</p>
        </div>

        <div className="resources-grid">
          {/* HOSPITAL */}
          <article className="resource-card resource-card-hospital">
            <div className="resource-card-top">
              <div className="resource-icon resource-icon-hospital">
                <Hospital size={25} />
              </div>

              <span className="resource-status">
                <span />
                Open
              </span>
            </div>

            <div className="resource-card-body">
              <span className="resource-type">MEDICAL SUPPORT</span>

              <h3>Assam Medical College & Hospital</h3>

              <p>
                Emergency medical assistance and hospital services near the
                selected area.
              </p>

              <div className="resource-meta">
                <div>
                  <MapPin size={16} />
                  <span>~4.2 km away</span>
                </div>

                <div>
                  <Navigation size={16} />
                  <span>12 min</span>
                </div>
              </div>
            </div>

            <div className="resource-actions">
              <a href="tel:123" className="resource-primary-btn">
                <Phone size={17} />
                Call hospital
              </a>

              <button className="resource-secondary-btn">
                <Navigation size={17} />
                Route
              </button>
            </div>
          </article>

          {/* POLICE */}
          <article className="resource-card resource-card-police">
            <div className="resource-card-top">
              <div className="resource-icon resource-icon-police">
                <Shield size={25} />
              </div>

              <span className="resource-status">
                <span />
                Available
              </span>
            </div>

            <div className="resource-card-body">
              <span className="resource-type">SAFETY & RESPONSE</span>

              <h3>Dibrugarh Police Station</h3>

              <p>
                Police assistance, emergency response, evacuation and local
                safety support.
              </p>

              <div className="resource-meta">
                <div>
                  <MapPin size={16} />
                  <span>~2.8 km away</span>
                </div>

                <div>
                  <Navigation size={16} />
                  <span>8 min</span>
                </div>
              </div>
            </div>

            <div className="resource-actions">
              <a href="tel:112" className="resource-primary-btn">
                <Phone size={17} />
                Call police
              </a>

              <button className="resource-secondary-btn">
                <Navigation size={17} />
                Route
              </button>
            </div>
          </article>

          {/* RELIEF / NGO */}
          <article className="resource-card resource-card-relief">
            <div className="resource-card-top">
              <div className="resource-icon resource-icon-relief">
                <Users size={25} />
              </div>

              <span className="resource-status">
                <span />
                Active
              </span>
            </div>

            <div className="resource-card-body">
              <span className="resource-type">RELIEF & COMMUNITY</span>

              <h3>Local Relief & NGO Support</h3>

              <p>
                Relief camps, food distribution, temporary shelter and community
                assistance.
              </p>

              <div className="resource-meta">
                <div>
                  <MapPin size={16} />
                  <span>~3.5 km away</span>
                </div>

                <div>
                  <Navigation size={16} />
                  <span>10 min</span>
                </div>
              </div>
            </div>

            <div className="resource-actions">
              <button className="resource-primary-btn">
                <Phone size={17} />
                Contact relief
              </button>

              <button className="resource-secondary-btn">
                <Navigation size={17} />
                Route
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          EMERGENCY STRIP
      ========================== */}
      <section className="resources-emergency">
        <div className="emergency-icon">
          <Phone size={22} />
        </div>

        <div className="emergency-content">
          <span>IMMEDIATE EMERGENCY</span>
          <h3>Need urgent assistance?</h3>
          <p>
            For an immediate emergency, use the national emergency response
            number.
          </p>
        </div>

        <a href="tel:112" className="emergency-call-btn">
          Call 112
          <ArrowRight size={17} />
        </a>
      </section>

      {/* =========================
          FIND MORE
      ========================== */}
      <section className="resources-bottom-grid">
        <div className="resources-map-preview">
          <div className="map-preview-content">
            <span className="resources-card-label">RESOURCE MAP</span>

            <h2>See resources around you</h2>

            <p>
              Explore hospitals, police stations, relief centres and other
              support locations on the map.
            </p>

            <Link to="/explore" className="map-preview-btn">
              Open map
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mini-map">
            <div className="mini-map-grid" />

            <div className="mini-map-road road-one" />
            <div className="mini-map-road road-two" />
            <div className="mini-map-road road-three" />

            <div className="mini-marker marker-hospital">
              <Hospital size={13} />
            </div>

            <div className="mini-marker marker-police">
              <Shield size={13} />
            </div>

            <div className="mini-marker marker-relief">
              <Users size={13} />
            </div>

            <div className="mini-user-marker">
              <MapPin size={17} />
            </div>
          </div>
        </div>

        <div className="resources-help-card">
          <div className="resources-help-icon">
            <Building2 size={23} />
          </div>

          <span className="resources-card-label">NOT SURE WHO TO CONTACT?</span>

          <h2>Ask INDRA AI</h2>

          <p>
            Describe what you need in plain language and INDRA can guide you
            toward the relevant service.
          </p>

          <Link to="/ask" className="resources-help-btn">
            Ask INDRA AI
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* =========================
          SOURCE NOTE
      ========================== */}
      <div className="resources-source-note">
        <ExternalLink size={14} />

        <span>
          Prototype resource data shown for demonstration. Final deployment will
          connect to verified local directories and official sources.
        </span>
      </div>

      {/* =========================
          BACK TO TOP / NAV
      ========================== */}
      <div className="resources-footer-nav">
        <Link to="/alerts" className="resources-nav-link">
          <ArrowLeft size={16} />
          Alerts
        </Link>

        <Link to="/ask" className="resources-nav-link resources-nav-next">
          Ask INDRA AI
          <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}

export default Resources;
