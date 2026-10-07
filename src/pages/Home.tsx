import { useEffect, useState } from "react";
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Smartphone,
  Zap,
  Plane,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { countries } from "../data/countries";
import { plans } from "../data/plans";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const [country, setCountry] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { t, formatPrice } = useLanguage();

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
                {t("hero_eyebrow")}
              </div>
              <h1>
                {t("hero_title_1")} <em>{t("hero_title_2")}</em>
              </h1>
              <p>
                {t("hero_sub")}
              </p>
              <div className="destination-picker">
                <div className="picker-label">
                  <Globe2 size={18} />
                  {t("where_travelling")}
                </div>
                <div className="picker-row">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">{t("select_destination")}</option>
                    {countries.map((c) => (
                      <option value={c.code} key={c.code}>
                        {t(c.name)}
                      </option>
                    ))}
                  </select>
                  <Link
                    className="button"
                    to={country ? `/destinations/${country}` : "/destinations"}
                  >
                    {t("view_plans")} <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
              <div className="hero-trust">
                <span>
                  <ShieldCheck />
                  {t("secure_payments")}
                </span>
                <span>
                  <Zap />
                  {t("instant_delivery")}
                </span>
                <span>
                  <Smartphone />
                  {t("no_physical_sim")}
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-orbit" />
              <div className="phone-mock">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <img src="/safari-esim-logoL.png" alt="Safari eSIM" />
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
                <span>{t("travel_freely")}</span>
              </div>
              <div className="float-card float-b">
                <Wifi size={17} />
                <span>{t("lte_ready")}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            <div>
              <b>200+</b>
              <span>{t("destinations")}</span>
            </div>
            <div>
              <b>{t("instant_delivery")}</b>
              <span>eSIM delivery</span>
            </div>
            <div>
              <b>M-Pesa</b>
              <span>{t("mpesa_payment")}</span>
            </div>
            <div>
              <b>24/7</b>
              <span>{t("support")}</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal>
              <div className="section-heading centered">
                <span className="section-kicker">{t("popular_destinations")}</span>
                <h2>{t("popular_title")}</h2>
                <p>{t("popular_sub")}</p>
              </div>
            </Reveal>
            <div className="country-grid">
              {popular.map((c) => (
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
                      <span>{t(c.region)}</span>
                      <h3>{t(c.name)}</h3>
                      <p>{t(c.landmark)}</p>
                    </div>
                    <ArrowRight />
                  </Link>
                </Reveal>
              ))}
            </div>
            <div className="center-action">
              <Link className="button button-outline" to="/destinations">
                {t("explore_all_destinations")} <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <Reveal>
              <div className="section-heading centered">
                <span className="section-kicker">{t("why_safari")}</span>
                <h2>{t("why_title")}</h2>
              </div>
            </Reveal>
            <div className="feature-grid">
              {[
                [
                  Globe2,
                  t("local_coverage"),
                  t("local_coverage_sub"),
                ],
                [
                  Zap,
                  t("instant_delivery"),
                  t("instant_delivery_sub"),
                ],
                [
                  ShieldCheck,
                  t("secure_by_design"),
                  t("secure_by_design_sub"),
                ],
                [
                  Smartphone,
                  t("one_phone"),
                  t("one_phone_sub"),
                ],
              ].map(([I, featureTitle, featureDesc]) => {
                const Icon = I as any;
                return (
                  <Reveal key={String(featureTitle)}>
                    <div className="feature-card">
                      <Icon />
                      <h3>{String(featureTitle)}</h3>
                      <p>{String(featureDesc)}</p>
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
              <span className="section-kicker">{t("ready_when")}</span>
              <h2>{t("ready_title")}</h2>
              <p>{t("ready_sub")}</p>
              <Link className="button" to="/destinations">
                {t("browse_destinations")} <ArrowRight size={17} />
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
                      <img src={c.flag} alt="" />
                      <div>
                        <b>{t(c.name)}</b>
                        <span>
                          {p.data} · {p.validity}
                        </span>
                      </div>
                      <strong>{formatPrice(p.price / 130)}</strong>
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
            <b>{t("still_choosing")}</b>
            <span>{t("explore_all_plans")}</span>
          </div>
          <Link className="button button-small" to="/plans">
            {t("browse_plans")}
          </Link>
          <button onClick={() => setScrolled(false)}>×</button>
        </div>
      )}
    </>
  );
}

