import { useEffect, useState } from "react";
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Smartphone,
  Zap,
  Plane,
  Wifi,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { countries } from "../data/countries";
import { plans } from "../data/plans";
export default function Home() {
  const [country, setCountry] = useState("");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 620);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const popular = countries.slice(0, 6);
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span />
                TRAVEL CONNECTIVITY, SIMPLIFIED
              </div>
              <h1>
                Go farther. <em>Stay connected.</em>
              </h1>
              <p>
                Get affordable eSIM data for your next adventure. Choose your
                destination, pay securely and receive your eSIM in minutes.
              </p>
              <div className="destination-picker">
                <div className="picker-label">
                  <Globe2 size={18} />
                  Where are you travelling?
                </div>
                <div className="picker-row">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Select a destination</option>
                    {countries.map((c) => (
                      <option value={c.code} key={c.code}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <Link
                    className="button"
                    to={country ? `/destinations/${country}` : "/destinations"}
                  >
                    View plans <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
              <div className="hero-trust">
                <span>
                  <ShieldCheck />
                  Secure payments
                </span>
                <span>
                  <Zap />
                  Instant delivery
                </span>
                <span>
                  <Smartphone />
                  No physical SIM
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-orbit" />
              <div className="phone-mock">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <img src="/safari-esim-logo.png" />
                  <span className="live-dot">ACTIVE</span>
                  <h3>Kenya eSIM</h3>
                  <strong>3.8 GB</strong>
                  <small>remaining of 5 GB</small>
                  <div className="usage">
                    <i />
                  </div>
                  <div className="phone-row">
                    <span>12 days left</span>
                    <span>4G LTE</span>
                  </div>
                </div>
              </div>
              <div className="float-card float-a">
                <Plane size={17} />
                <span>Travel freely</span>
              </div>
              <div className="float-card float-b">
                <Wifi size={17} />
                <span>4G / LTE ready</span>
              </div>
            </div>
          </div>
        </section>
        <section className="stats">
          <div className="container stats-grid">
            <div>
              <b>200+</b>
              <span>Destinations</span>
            </div>
            <div>
              <b>Instant</b>
              <span>eSIM delivery</span>
            </div>
            <div>
              <b>M-Pesa</b>
              <span>Local payments</span>
            </div>
            <div>
              <b>24/7</b>
              <span>Traveller support</span>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Reveal>
              <div className="section-heading centered">
                <span className="section-kicker">POPULAR DESTINATIONS</span>
                <h2>Where will your next trip take you?</h2>
                <p>
                  We cover the places travellers ask for most. Only a few are
                  shown here — explore the full destination catalogue for more.
                </p>
              </div>
            </Reveal>
            <div className="country-grid">
              {popular.map((c, i) => (
                <Reveal key={c.code}>
                  <Link
                    to={`/destinations/${c.code}`}
                    className="country-card"
                    style={{
                      backgroundImage: `linear-gradient(90deg,rgba(5,42,96,.9),rgba(5,42,96,.3)),url("${c.image}")`,
                    }}
                  >
                    <div>
                      <img src={c.flag} alt="" />
                      <span>{c.region}</span>
                      <h3>{c.name}</h3>
                      <p>{c.landmark}</p>
                    </div>
                    <ArrowRight />
                  </Link>
                </Reveal>
              ))}
            </div>
            <div className="center-action">
              <Link className="button button-outline" to="/destinations">
                Explore all destinations <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
        <section className="section section-soft">
          <div className="container">
            <Reveal>
              <div className="section-heading centered">
                <span className="section-kicker">WHY SAFARI ESIM</span>
                <h2>A smoother way to travel connected.</h2>
              </div>
            </Reveal>
            <div className="feature-grid">
              {[
                [
                  Globe2,
                  "Local coverage",
                  "Connect through supported local networks in your destination.",
                ],
                [
                  Zap,
                  "Instant delivery",
                  "Your eSIM details are ready immediately after successful payment.",
                ],
                [
                  ShieldCheck,
                  "Secure by design",
                  "Payments and account flows are built for a safe travel experience.",
                ],
                [
                  Smartphone,
                  "One phone, one experience",
                  "Keep your physical SIM while Safari eSim handles your travel data.",
                ],
              ].map(([I, t, d]) => {
                const Icon = I as any;
                return (
                  <Reveal key={String(t)}>
                    <div className="feature-card">
                      <Icon />
                      <h3>{String(t)}</h3>
                      <p>{String(d)}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container split-banner">
            <div>
              <span className="section-kicker">READY WHEN YOU ARE</span>
              <h2>Choose your destination. We'll handle the connection.</h2>
              <p>
                Browse plans, compare validity and data, and complete checkout
                in a few clicks.
              </p>
              <Link className="button" to="/destinations">
                Browse destinations <ArrowRight size={17} />
              </Link>
            </div>
            <div className="mini-plan-stack">
              {plans
                .filter((p) => p.popular)
                .slice(0, 3)
                .map((p) => {
                  const c = countries.find((x) => x.code === p.countryCode)!;
                  return (
                    <div className="mini-plan" key={p.id}>
                      <img src={c.flag} />
                      <div>
                        <b>{c.name}</b>
                        <span>
                          {p.data} · {p.validity}
                        </span>
                      </div>
                      <strong>KES {p.price.toLocaleString()}</strong>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {scrolled && (
        <div className="scroll-prompt">
          <div>
            <b>Still choosing?</b>
            <span>Explore all Safari eSim plans.</span>
          </div>
          <Link className="button button-small" to="/plans">
            Browse plans
          </Link>
          <button onClick={() => setScrolled(false)}>×</button>
        </div>
      )}
    </>
  );
}
