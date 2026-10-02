import React, { useState } from "react";
import "./SignIn.css";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

/* ================================================================
   SIGN IN PAGE
================================================================ */

function SignIn() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [remember, setRemember] = useState(false);

  /* ================================================================
     PROTOTYPE SUBMIT
  ================================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      UI prototype only.

      Later this will call the authentication backend.
    */

    console.log("Prototype sign in:", {
      email,
      password,
      remember,
    });

    navigate("/");
  };

  return (
    <main className="indra-signin-page">
      {/* ==========================================================
          BACKGROUND GLOW
      ========================================================== */}

      <div className="signin-glow signin-glow-one" />

      <div className="signin-glow signin-glow-two" />

      {/* ==========================================================
          BACK TO HOME
      ========================================================== */}

      <Link to="/" className="signin-back">
        <ArrowLeft size={16} />
        Back to INDRA
      </Link>

      {/* ==========================================================
          MAIN CONTAINER
      ========================================================== */}

      <section className="signin-container">
        {/* ========================================================
            LEFT PANEL
        ======================================================== */}

        <div className="signin-left">
          <div className="signin-left-content">
            {/* ======================================================
                BRAND
            ====================================================== */}

            <div className="signin-brand">
              <div className="signin-brand-mark">
                <div className="signin-wave wave-one" />
                <div className="signin-wave wave-two" />
                <div className="signin-wave wave-three" />
              </div>

              <div>
                <div className="signin-brand-name">INDRA</div>

                <div className="signin-brand-subtitle">
                  Intelligent Network for Disaster Response & Assistance
                </div>
              </div>
            </div>

            {/* ======================================================
                MESSAGE
            ====================================================== */}

            <div className="signin-message">
              <span className="signin-eyebrow">
                <ShieldCheck size={14} />
                SECURE ACCESS
              </span>

              <h1>
                Welcome back
                <br />
                <span>to INDRA.</span>
              </h1>

              <p>
                Access your saved locations, alerts, response resources and
                personalized disaster information.
              </p>
            </div>

            {/* ======================================================
                TRUST STRIP
            ====================================================== */}

            <div className="signin-trust">
              <ShieldCheck size={17} />

              <span>Your access is protected by secure authentication.</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            RIGHT FORM PANEL
        ======================================================== */}

        <div className="signin-right">
          <div className="signin-form-wrap">
            {/* ======================================================
                FORM HEADER
            ====================================================== */}

            <div className="signin-form-header">
              <div className="signin-form-icon">
                <UserRound size={21} />
              </div>

              <div>
                <span className="signin-form-label">ACCOUNT</span>

                <h2>Sign in</h2>
              </div>
            </div>

            <p className="signin-form-description">
              Enter your credentials to continue.
            </p>

            {/* ======================================================
                FORM
            ====================================================== */}

            <form className="signin-form" onSubmit={handleSubmit}>
              {/* ====================================================
                  EMAIL
              ==================================================== */}

              <label className="signin-field">
                <span>Email address</span>

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>

              {/* ====================================================
                  PASSWORD
              ==================================================== */}

              <label className="signin-field">
                <div className="signin-field-heading">
                  <span>Password</span>

                  <button
                    type="button"
                    className="signin-forgot"
                    onClick={() => console.log("Forgot password")}
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="signin-password-wrap">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className="signin-password-toggle"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </label>

              {/* ====================================================
                  REMEMBER ME
              ==================================================== */}

              <label className="signin-remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                />

                <span>Remember me</span>
              </label>

              {/* ====================================================
                  SUBMIT
              ==================================================== */}

              <button type="submit" className="signin-submit">
                <span>Sign in</span>

                <ArrowRight size={18} />
              </button>
            </form>

            {/* ======================================================
                DIVIDER
            ====================================================== */}

            <div className="signin-divider">
              <span />

              <small>OR</small>

              <span />
            </div>

            {/* ======================================================
                DEMO ACCESS
            ====================================================== */}

            <button
              type="button"
              className="signin-demo"
              onClick={() => {
                console.log("Demo access");
                navigate("/");
              }}
            >
              Continue with demo access
            </button>

            {/* ======================================================
                SIGN UP
            ====================================================== */}

            <p className="signin-signup">
              Don't have an account?
              <button
                type="button"
                onClick={() => console.log("Create account")}
              >
                Create account
              </button>
            </p>

            {/* ======================================================
                PROTOTYPE NOTE
            ====================================================== */}

            <div className="signin-prototype-note">
              Prototype authentication screen. Backend authentication will be
              connected later.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignIn;
