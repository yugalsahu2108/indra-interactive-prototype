import React, { useState } from "react";

import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  AlertTriangle,
  Phone,
  ShieldCheck,
  FileText,
  Clock3,
  Waves,
  History,
  Users,
  Search,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

/* ================================================================
   INDRA ASK PAGE

   STEP 7

   This screen follows the answer format shown in the
   INDRA Capstone presentation:

   1. Selected location
   2. Current hazard risk
   3. Hazard / map context
   4. Grounded answer
   5. Sources
   6. Historical context
   7. Exposure
   8. One-tap contact actions
   9. Ask another question

   IMPORTANT:
   All information on this screen is prototype/mock data.
   Real sources and APIs will be connected later.
================================================================ */

/* ================================================================
   EXAMPLE QUESTIONS
================================================================ */

const exampleQuestions = [
  "What's the flood risk in Dibrugarh right now?",

  "What happened in Dibrugarh before?",

  "How many people are exposed?",

  "Whom should I call nearby?",
];

/* ================================================================
   Ask INDRA AI
================================================================ */

function AskIndra() {
  const navigate = useNavigate();

  /* ================================================================
     STATE
  ================================================================= */

  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [answerVisible, setAnswerVisible] = useState(true);

  /* ================================================================
     SUBMIT QUESTION
  ================================================================= */

  const handleSubmit = () => {
    const question = input.trim();

    if (!question) {
      return;
    }

    /*
      Prototype behaviour.

      We simulate the processing state,
      then return to the same demo answer.
    */

    setIsLoading(true);

    setAnswerVisible(false);

    window.setTimeout(() => {
      setIsLoading(false);

      setAnswerVisible(true);
    }, 700);
  };

  /* ================================================================
     KEYBOARD
  ================================================================= */

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      handleSubmit();
    }
  };

  /* ================================================================
     EXAMPLE QUESTION
  ================================================================= */

  const useExample = (question) => {
    setInput(question);
  };

  return (
    <main className="indra-answer-page">
      <div className="indra-answer-container">
        {/* ==========================================================
            TOP BAR
        ========================================================== */}

        <header className="indra-answer-topbar">
          {/* ========================================================
              BACK
          ======================================================== */}

          <button
            type="button"
            className="answer-back-button"
            onClick={() => navigate("/explore")}
          >
            <ArrowLeft size={16} />
            Back to map
          </button>

          {/* ========================================================
              TRUST STATUS
          ======================================================== */}

          <div className="answer-trust-status">
            <ShieldCheck size={15} />
            Source-grounded prototype
          </div>
        </header>

        {/* ==========================================================
            LOCATION HEADER
        ========================================================== */}

        <section className="answer-location-header">
          <div>
            <div className="answer-location-kicker">
              <MapPin size={14} />
              SELECTED LOCATION
            </div>

            <h1>Dibrugarh, Assam</h1>

            <p>Disaster intelligence context</p>
          </div>

          <button
            type="button"
            className="answer-change-location"
            onClick={() => navigate("/explore")}
          >
            <Search size={15} />
            Change location
          </button>
        </section>

        {/* ==========================================================
            MAIN ANSWER
        ========================================================== */}

        <div className="indra-answer-layout">
          {/* ========================================================
              LEFT COLUMN
          ======================================================== */}

          <div className="indra-answer-main">
            {/* ======================================================
                CURRENT RISK ALERT
            ====================================================== */}

            <section className="answer-risk-banner">
              <div className="answer-risk-icon">
                <AlertTriangle size={27} />
              </div>

              <div className="answer-risk-content">
                <div className="answer-risk-heading">
                  <strong>FLOOD RISK</strong>

                  <span>HIGH</span>
                </div>

                <p>CWC gauge above warning level · trend rising</p>

                <div className="answer-risk-meta">
                  <span>Source · CWC</span>

                  <span>
                    <Clock3 size={11} />
                    Updated recently
                  </span>
                </div>
              </div>
            </section>

            {/* ======================================================
                HAZARD VISUALIZATION
            ====================================================== */}

            <section className="answer-map-card">
              <div className="answer-map-header">
                <div>
                  <strong>Hazard context</strong>

                  <span>Dibrugarh flood-risk area</span>
                </div>

                <button type="button" onClick={() => navigate("/explore")}>
                  Open map
                  <ArrowRight size={14} />
                </button>
              </div>

              <div className="answer-map">
                {/* ==================================================
                    MAP GRID
                ================================================== */}

                <div className="answer-map-grid"></div>

                {/* ==================================================
                    WATER / RIVER
                ================================================== */}

                <div className="answer-river answer-river-one"></div>

                <div className="answer-river answer-river-two"></div>

                {/* ==================================================
                    FLOOD AREA
                ================================================== */}

                <div className="answer-flood-zone answer-zone-a"></div>

                <div className="answer-flood-zone answer-zone-b"></div>

                {/* ==================================================
                    HAZARD POINTS
                ================================================== */}

                <div className="answer-map-point point-one">
                  <span></span>
                </div>

                <div className="answer-map-point point-two">
                  <span></span>
                </div>

                {/* ==================================================
                    SELECTED LOCATION
                ================================================== */}

                <div className="answer-selected-point">
                  <div className="answer-location-pulse"></div>

                  <div className="answer-location-dot"></div>

                  <div className="answer-location-label">
                    <strong>Dibrugarh</strong>

                    <span>Selected location</span>
                  </div>
                </div>

                {/* ==================================================
                    MAP LEGEND
                ================================================== */}

                <div className="answer-map-legend">
                  <div>
                    <span className="answer-legend-blue"></span>
                    Flood zone
                  </div>

                  <div>
                    <span className="answer-legend-red"></span>
                    Risk point
                  </div>

                  <div>
                    <span className="answer-legend-white"></span>
                    Selected place
                  </div>
                </div>
              </div>
            </section>

            {/* ======================================================
                GROUNDED ANSWER
            ====================================================== */}

            {isLoading ? (
              <section className="answer-grounded-card loading">
                <div className="answer-loading">
                  <span></span>
                  <span></span>
                  <span></span>

                  <label>INDRA is retrieving evidence...</label>
                </div>
              </section>
            ) : answerVisible ? (
              <section className="answer-grounded-card">
                <div className="grounded-heading">
                  <div className="grounded-status-icon">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <strong>Grounded answer</strong>

                    <span>Answer assembled from prototype source context</span>
                  </div>
                </div>

                <p className="grounded-main-text">
                  Dibrugarh is currently shown as
                  <strong>high flood risk</strong>
                  in this prototype. The illustrative current signal is a CWC
                  gauge above the warning level with a rising trend.
                </p>

                <p className="grounded-history-text">
                  Historical context indicates major Brahmaputra flooding in
                  <strong>2022</strong>
                  and
                  <strong>2020</strong>
                  in the surrounding area.
                </p>

                <div className="grounded-sources">
                  <div className="grounded-source-heading">
                    <FileText size={14} />
                    Sources
                  </div>

                  <button type="button">CWC</button>

                  <button type="button">NDMA</button>

                  <button type="button">Bhuvan</button>
                </div>
              </section>
            ) : null}

            {/* ======================================================
                EXPOSURE
            ====================================================== */}

            <section className="answer-info-grid">
              <div className="answer-info-card">
                <div className="answer-info-icon exposure">
                  <Users size={18} />
                </div>

                <div>
                  <span>HUMAN EXPOSURE</span>

                  <strong>Elevated</strong>

                  <p>Population within the illustrative hazard area.</p>
                </div>
              </div>

              <div className="answer-info-card">
                <div className="answer-info-icon history">
                  <History size={18} />
                </div>

                <div>
                  <span>PAST EVENTS</span>

                  <strong>12 recorded</strong>

                  <p>
                    Historical events available for this prototype location.
                  </p>
                </div>
              </div>
            </section>

            {/* ======================================================
                QUESTION INPUT
            ====================================================== */}

            <section className="answer-question-card">
              <div className="answer-question-heading">
                <div>
                  <strong>Ask about this area</strong>

                  <span>Try another question</span>
                </div>
              </div>

              <div className="answer-question-input">
                <MapPin size={17} />

                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Dibrugarh..."
                />

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!input.trim()}
                >
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="answer-examples">
                <span>Try:</span>

                {exampleQuestions.slice(0, 2).map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => useExample(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* ========================================================
              RIGHT COLUMN — ACTIONS
          ======================================================== */}

          <aside className="indra-answer-side">
            {/* ======================================================
                ACTION CARD
            ====================================================== */}

            <section className="answer-action-card">
              <div className="answer-action-heading">
                <span>TAKE ACTION</span>

                <h2>Need help?</h2>

                <p>Reach the right local support from this location.</p>
              </div>

              {/* ====================================================
                  HOSPITAL
              ==================================================== */}

              <button type="button" className="answer-contact-button hospital">
                <div className="answer-contact-icon">
                  <Phone size={20} />
                </div>

                <div>
                  <strong>Call Hospital</strong>

                  <span>Nearest medical support</span>
                </div>

                <ArrowRight size={16} />
              </button>

              {/* ====================================================
                  POLICE
              ==================================================== */}

              <button type="button" className="answer-contact-button police">
                <div className="answer-contact-icon">
                  <Phone size={20} />
                </div>

                <div>
                  <strong>Call Police</strong>

                  <span>Emergency assistance</span>
                </div>

                <ArrowRight size={16} />
              </button>

              {/* ====================================================
                  NGO
              ==================================================== */}

              <button type="button" className="answer-contact-button ngo">
                <div className="answer-contact-icon">
                  <Users size={20} />
                </div>

                <div>
                  <strong>Relief / NGO</strong>

                  <span>Local assistance</span>
                </div>

                <ArrowRight size={16} />
              </button>
            </section>

            {/* ======================================================
                SOURCE TRACE
            ====================================================== */}

            <section className="answer-trace-card">
              <div className="answer-trace-heading">
                <ShieldCheck size={17} />

                <strong>Trust & source trace</strong>
              </div>

              <div className="answer-trace-item">
                <span className="trace-check">✓</span>
                Current risk
                <span>CWC</span>
              </div>

              <div className="answer-trace-item">
                <span className="trace-check">✓</span>
                Historical events
                <span>NDMA</span>
              </div>

              <div className="answer-trace-item">
                <span className="trace-check">✓</span>
                Hazard context
                <span>Bhuvan</span>
              </div>

              <div className="answer-trace-note">
                Prototype only — operational answers will display verified
                source metadata.
              </div>
            </section>

            {/* ======================================================
                MAP ACTION
            ====================================================== */}

            <button
              type="button"
              className="answer-open-map"
              onClick={() => navigate("/explore")}
            >
              <MapPin size={17} />

              <span>
                <strong>Open full hazard map</strong>

                <small>Explore zones and past events</small>
              </span>

              <ArrowRight size={16} />
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default AskIndra;
