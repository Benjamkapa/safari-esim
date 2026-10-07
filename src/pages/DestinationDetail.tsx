import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Wifi } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import { countryByCode } from "../data/plans";
import { plans } from "../data/plans";
import Reveal from "../components/Reveal";
export default function DestinationDetail() {
  const { code = "ke" } = useParams();
  const c = countryByCode(code);
  if (!c)
    return (
      <>
        <SiteHeader />
        <main className="page">
          <div className="container empty-state">
            <h1>Destination not found</h1>
            <Link className="button" to="/destinations">
              Back to destinations
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  const list = plans.filter((p) => p.countryCode === c.code);
  return (
    <>
      <SiteHeader />
      <main>
        <section
          className="destination-hero"
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(5,42,96,.94),rgba(5,42,96,.45)),url("${c.image}")`,
          }}
        >
          <div className="container">
            <div className="destination-hero-copy">
              <img src={c.flag} alt="" />
              <span>{c.region}</span>
              <h1>{c.name} eSIM</h1>
              <p>Stay connected while you explore {c.landmark} and beyond.</p>
              <div className="landmark-label">
                Featured landmark · {c.landmark}
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">AVAILABLE PLANS</span>
              <h2>Pick the data that fits your trip.</h2>
              <p>
                All plans are delivered digitally. No physical SIM card
                required.
              </p>
            </div>
            <div className="package-grid">
              {list.map((p) => (
                <Reveal key={p.id}>
                  <article
                    className={
                      p.popular ? "package-card featured" : "package-card"
                    }
                    style={{
                      backgroundImage: `linear-gradient(180deg,rgba(255,255,255,.96),rgba(255,255,255,.99)),url("${c.image}")`,
                    }}
                  >
                    {p.popular && (
                      <span className="package-badge">MOST POPULAR</span>
                    )}
                    <div className="package-head">
                      <div>
                        <img src={c.flag} />
                        <b>{c.name}</b>
                      </div>
                      <Wifi size={18} />
                    </div>
                    <strong>{p.data}</strong>
                    <span>{p.validity} validity</span>
                    <div className="package-price">
                      KES {p.price.toLocaleString()}
                    </div>
                    <ul>
                      {p.features.map((f) => (
                        <li key={f}>
                          <Check size={15} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link className="button full" to={`/checkout/${p.id}`}>
                      Choose plan <ArrowRight size={16} />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="section section-soft">
          <div className="container info-columns">
            <div>
              <ShieldCheck size={25} />
              <h2>Travel with confidence.</h2>
              <p>
                Safari eSim plans are designed for straightforward activation
                and transparent pricing. Coverage depends on local network
                availability in the destination.
              </p>
            </div>
            <div className="info-list">
              <div>
                <b>Activation</b>
                <span>Digital delivery after payment</span>
              </div>
              <div>
                <b>Network</b>
                <span>4G / LTE where supported</span>
              </div>
              <div>
                <b>Support</b>
                <span>Traveller help centre available</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
