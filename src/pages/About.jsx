import React from "react";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Database,
  FileCheck2,
  Gauge,
  Globe2,
  Map,
  Network,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

function About() {
  const steps = [
    {
      number: "01",
      title: "Ask",
      text: "A citizen provides a location and asks a plain-language disaster question.",
      icon: Search,
    },
    {
      number: "02",
      title: "Plan",
      text: "The agent determines which tools and evidence are needed for the question.",
      icon: Workflow,
    },
    {
      number: "03",
      title: "Retrieve + rerank",
      text: "Relevant evidence is retrieved and ranked before it is used.",
      icon: Database,
    },
    {
      number: "04",
      title: "Reason + guardrail",
      text: "The system synthesises the evidence and checks the answer for grounding.",
      icon: ShieldCheck,
    },
    {
      number: "05",
      title: "Answer",
      text: "The user receives a cited answer with map, exposure and contact information.",
      icon: CheckCircle2,
    },
  ];

  const tools = [
    {
      icon: Map,
      title: "Geospatial lookup",
      text: "Find hazard zones, locations and geographic context.",
    },
    {
      icon: Route,
      title: "Historical events",
      text: "Retrieve what has happened in the selected area before.",
    },
    {
      icon: Gauge,
      title: "Exposure estimator",
      text: "Estimate human and economic exposure for response prioritisation.",
    },
    {
      icon: Network,
      title: "Agency router",
      text: "Connect the user with relevant medical, police or relief support.",
    },
  ];

  const layers = [
    {
      number: "01",
      title: "Intelligence",
      subtitle: "Agentic RAG in LangGraph",
      text: "Plan → retrieve → rerank → reason → synthesise, with tools, guardrails and an output check.",
      icon: Sparkles,
    },
    {
      number: "02",
      title: "Evaluation",
      subtitle: "Measure whether the answer can be trusted",
      text: "Expert-checked questions, faithfulness, retrieval quality, hallucination, cost, latency and escalation metrics.",
      icon: FileCheck2,
    },
    {
      number: "03",
      title: "Deployment",
      subtitle: "Run and observe the system",
      text: "Streaming API, containerisation, tracing and operational metrics for an observable deployment.",
      icon: Gauge,
    },
  ];

  const sources = [
    "NDMA",
    "IMD",
    "NRSC Bhuvan",
    "CWC",
    "USGS / Copernicus",
    "Census & state data",
    "Hospital directories",
    "Police / NGO directories",
  ];

  return (
    <main className="indra-about-page">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-eyebrow">
            <span className="about-eyebrow-dot" />
            ABOUT INDRA
          </div>

          <h1>
            Disaster intelligence
            <br />
            <span>built around the question.</span>
          </h1>

          <p className="about-hero-description">
            INDRA is designed as an India-grounded disaster intelligence advisor
            that turns a location and a plain-language question into a grounded
            answer, map context, exposure information and the right contact.
          </p>

          <div className="about-hero-actions">
            <a href="#how-it-works" className="about-primary-btn">
              How INDRA works
              <ArrowDown size={17} />
            </a>

            <a href="#story" className="about-secondary-btn">
              Our Story
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="about-hero-visual">
          <div className="about-orbit orbit-one" />
          <div className="about-orbit orbit-two" />
          <div className="about-orbit orbit-three" />

          <div className="about-earth-core">
            <Globe2 size={100} strokeWidth={0.75} />
          </div>

          <div className="about-floating-card about-float-top">
            <ShieldCheck size={16} />
            <span>Cited answer</span>
          </div>

          <div className="about-floating-card about-float-right">
            <Map size={16} />
            <span>Map context</span>
          </div>

          <div className="about-floating-card about-float-bottom">
            <Route size={16} />
            <span>Contact routing</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          DIFFERENCE
      ====================================================== */}
      <section className="about-difference">
        <div className="about-section-heading">
          <span className="about-label">THE IDEA</span>

          <h2>
            Existing systems tell you
            <br />
            <span>that something is happening.</span>
          </h2>
        </div>

        <div className="about-difference-grid">
          <div className="difference-old">
            <span className="difference-tag">INFORMATION IS FRAGMENTED</span>

            <h3>
              Alerts.
              <br />
              Maps.
              <br />
              Forecasts.
            </h3>

            <p>
              Important information can live across multiple agencies, services
              and technical interfaces.
            </p>
          </div>

          <div className="difference-arrow">
            <ArrowRight size={34} />
          </div>

          <div className="difference-new">
            <div className="difference-new-icon">
              <Sparkles size={23} />
            </div>

            <span className="difference-tag">INDRA</span>

            <h3>
              Ask what it
              <br />
              means for your place.
            </h3>

            <p>
              INDRA brings location, hazard context, historical events, exposure
              and contact routing into one answer layer.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="about-how" id="how-it-works">
        <div className="about-section-heading centered-heading">
          <span className="about-label">HOW IT WORKS</span>

          <h2>
            One question.
            <br />
            <span>Five traced steps.</span>
          </h2>

          <p>
            The prototype follows the same conceptual flow defined in the
            project architecture: ask, plan, retrieve, reason and answer.
          </p>
        </div>

        <div className="about-flow">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <React.Fragment key={step.number}>
                <article className="about-flow-card">
                  <div className="flow-card-top">
                    <span className="flow-number">{step.number}</span>

                    <Icon size={21} />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>

                {index < steps.length - 1 && (
                  <div className="about-flow-arrow">
                    <ArrowRight size={18} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          TOOLS
      ====================================================== */}
      <section className="about-tools">
        <div className="about-section-heading">
          <span className="about-label">AGENT TOOLS</span>

          <h2>
            The agent decides
            <br />
            <span>what to look at.</span>
          </h2>

          <p>
            The architecture defines four core tools that provide structured
            context for the answer.
          </p>
        </div>

        <div className="about-tools-grid">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <article className="about-tool-card" key={tool.title}>
                <div className="tool-index">0{index + 1}</div>

                <div className="tool-icon">
                  <Icon size={22} />
                </div>

                <h3>{tool.title}</h3>

                <p>{tool.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
      
          ARCHITECTURE
      ====================================================== */}
      {/* <section className="about-architecture" id="architecture">
        <div className="about-section-heading centered-heading">
          <span className="about-label">SYSTEM ARCHITECTURE</span>

          <h2>
            Three layers.
            <br />
            <span>One observable system.</span>
          </h2>

          <p>
            Intelligence, evaluation and deployment are treated as separate but
            connected parts of the system.
          </p>
        </div>

        <div className="architecture-stack">
          {layers.map((layer) => {
            const Icon = layer.icon;

            return (
              <article className="architecture-layer" key={layer.number}>
                <div className="architecture-number">{layer.number}</div>

                <div className="architecture-icon">
                  <Icon size={23} />
                </div>

                <div className="architecture-copy">
                  <span>{layer.subtitle}</span>

                  <h3>{layer.title}</h3>

                  <p>{layer.text}</p>
                </div>

                <div className="architecture-arrow">
                  <ArrowRight size={19} />
                </div>
              </article>
            );
          })}
        </div>
      </section>
 */}

      <section className="about-story" id="story">
        <div className="about-section-heading centered-heading">
          <span className="about-label">OUR STORY</span>

          <h2>
            From scattered information
            <br />
            <span>to actionable intelligence.</span>
          </h2>

          <p>
            INDRA was built around a simple question: when a disaster threatens
            a place, can the right information reach the right person in a form
            they can actually act on?
          </p>
        </div>

        <div className="story-timeline">
          {/* ==========================================================
        STORY 01 — THE PROBLEM
    ========================================================== */}

          <article className="story-card">
            <div className="story-card-number">01</div>

            <div className="story-card-content">
              <span className="story-card-label">THE PROBLEM</span>

              <h3>Critical information is scattered.</h3>

              <p>
                India has multiple agencies providing valuable disaster
                information, but the information a citizen, official or relief
                worker needs is often distributed across different sources,
                formats and systems.
              </p>
            </div>
          </article>

          {/* ==========================================================
        STORY 02 — THE IDEA
    ========================================================== */}

          <article className="story-card story-card-highlight">
            <div className="story-card-number">02</div>

            <div className="story-card-content">
              <span className="story-card-label">THE IDEA</span>

              <h3>Ask one question. Get one grounded answer.</h3>

              <p>
                INDRA brings together official disaster information into a
                place-first intelligence layer that can answer questions about
                current risk, past events, exposure and the right support
                services.
              </p>
            </div>
          </article>

          {/* ==========================================================
        STORY 03 — THE DIFFERENCE
    ========================================================== */}

          <article className="story-card">
            <div className="story-card-number">03</div>

            <div className="story-card-content">
              <span className="story-card-label">THE DIFFERENCE</span>

              <h3>From risk to action.</h3>

              <p>
                INDRA is designed not only to explain what is happening, but
                also what it means for a location — including exposure, map
                context, alerts and routes to the right medical, police or NGO
                support.
              </p>
            </div>
          </article>

          {/* ==========================================================
        STORY 04 — THE BUILD
    ========================================================== */}

          <article className="story-card">
            <div className="story-card-number">04</div>

            <div className="story-card-content">
              <span className="story-card-label">WHERE WE ARE BUILDING</span>

              <h3>Start focused. Prove it end to end.</h3>

              <p>
                The focused build begins with major hazards such as floods,
                earthquakes and landslides across a pilot set of districts,
                proving the complete path from retrieval and grounded answers to
                maps, contact routing and alerts.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          DATA SOURCES
      ====================================================== */}
      <section className="about-sources">
        <div className="about-source-copy">
          <span className="about-label">DATA FOUNDATION</span>

          <h2>
            Ground the answer
            <br />
            <span>before explaining it.</span>
          </h2>

          <p>
            The project brief identifies government, scientific and local
            service datasets as candidate sources for hazard, exposure and
            contact information.
          </p>
        </div>

        <div className="about-source-grid">
          {sources.map((source) => (
            <div className="about-source-item" key={source}>
              <CheckCircle2 size={16} />
              <span>{source}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          TRUST
      ====================================================== */}
      <section className="about-trust">
        <div className="trust-main">
          <div className="trust-icon">
            <ShieldCheck size={27} />
          </div>

          <span className="about-label">TRUST BY DESIGN</span>

          <h2>
            Every answer should be
            <br />
            <span>auditable.</span>
          </h2>

          <p>
            INDRA's architecture includes source citation, guardrails,
            evaluation and tracing so that an answer can be examined after it is
            produced.
          </p>
        </div>

        <div className="trust-metrics">
          <div className="trust-metric">
            <strong>50+</strong>
            <span>Expert-checked Q&amp;A items</span>
          </div>

          <div className="trust-metric">
            <strong>4</strong>
            <span>Core agent tools</span>
          </div>

          <div className="trust-metric">
            <strong>3</strong>
            <span>System architecture layers</span>
          </div>

          <div className="trust-metric">
            <strong>1</strong>
            <span>Traceable answer flow</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          SCOPE
      ====================================================== */}
      <section className="about-scope">
        <div className="about-scope-left">
          <span className="about-label">CURRENT FOCUS</span>

          <h2>
            Build one complete
            <br />
            <span>end-to-end core.</span>
          </h2>

          <p>
            The focused capstone scope is an agentic advisor for major hazards
            including floods, earthquakes and landslides across a pilot set of
            districts with suitable data.
          </p>
        </div>

        <div className="about-scope-right">
          <div className="scope-pill">
            <Target size={16} />
            Retrieval
          </div>

          <div className="scope-line" />

          <div className="scope-pill">
            <Sparkles size={16} />
            Grounded answer
          </div>

          <div className="scope-line" />

          <div className="scope-pill">
            <Map size={16} />
            Map view
          </div>

          <div className="scope-line" />

          <div className="scope-pill">
            <Route size={16} />
            Contact routing
          </div>

          <div className="scope-line" />

          <div className="scope-pill">
            <ShieldCheck size={16} />
            Alert
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER CTA
      ====================================================== */}
      <section className="about-final">
        <div>
          <span className="about-label">
            INDRA · INTELLIGENT NETWORK FOR DISASTER RESPONSE & ASSISTANCE
          </span>

          <h2>
            Ask the question.
            <br />
            <span>Understand the risk.</span>
          </h2>
        </div>

        <a href="/ask" className="about-final-btn">
          Try INDRA AI
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}

export default About;
