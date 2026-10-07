import { useMemo, useState } from "react";
import { Search, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import { countries } from "../data/countries";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";

export default function Destinations() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("All");
  const { t } = useLanguage();

  const regions = [
    "All",
    ...Array.from(new Set(countries.map((c) => c.region))),
  ];

  const filtered = useMemo(
    () =>
      countries.filter(
        (c) =>
          (region === "All" || c.region === region) &&
          c.name.toLowerCase().includes(q.toLowerCase()),
      ),
    [q, region],
  );

  return (
    <>
      <SiteHeader />
      <main className="page">
        <div className="container">
          <div className="page-heading">
            <div>
              <span className="section-kicker">{t("destinations")}</span>
              <h1>{t("dest_heading")}</h1>
              <p>{t("dest_sub")}</p>
            </div>
            <div className="search-box">
              <Search size={17} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t("search")}
              />
            </div>
          </div>
          <div className="filters">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={region === r ? "filter active" : "filter"}
              >
                {r === "All" ? t("all") : t(r)}
              </button>
            ))}
          </div>
          <div className="destination-grid">
            {filtered.map((c) => (
              <Reveal key={c.code}>
                <Link
                  to={`/destinations/${c.code}`}
                  className="destination-card"
                >
                  <div
                    className="destination-image"
                    style={{
                      backgroundImage: `linear-gradient(180deg,transparent 20%,rgba(5,42,96,.86)),url("${c.image}")`,
                    }}
                  >
                    <img src={c.flag} alt={`${c.name} flag`} />
                    <span>{t(c.region)}</span>
                    <h3>{t(c.name)}</h3>
                  </div>
                  <div className="destination-info">
                    <span>
                      <MapPin size={14} />
                      {t(c.landmark)}
                    </span>
                    <ArrowRight size={17} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="empty-state">
              <h3>{t("no_dest_found")}</h3>
              <p>{t("try_another")}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

