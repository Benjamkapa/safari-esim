import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { countries } from "../data/countries";
import { plans } from "../data/plans";
export default function Plans() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("All");
  const regions = [
    "All",
    ...Array.from(new Set(countries.map((c) => c.region))),
  ];
  const visible = useMemo(
    () =>
      plans.filter((p) => {
        const c = countries.find((x) => x.code === p.countryCode)!;
        return (
          (region === "All" || c.region === region) &&
          `${c.name} ${p.data} ${p.validity}`
            .toLowerCase()
            .includes(q.toLowerCase())
        );
      }),
    [q, region],
  );
  return (
    <>
      <SiteHeader />
      <main className="page">
        <div className="container">
          <div className="page-heading">
            <div>
              <span className="section-kicker">ALL PLANS</span>
              <h1>Compare eSIM packages.</h1>
              <p>
                Every package is tied to a destination, with clear data and
                validity before checkout.
              </p>
            </div>
            <div className="search-box">
              <Search size={17} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search plans or countries..."
              />
            </div>
          </div>
          <div className="filters">
            {regions.map((r) => (
              <button
                className={region === r ? "filter active" : "filter"}
                onClick={() => setRegion(r)}
                key={r}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="plan-directory">
            {visible.map((p) => {
              const c = countries.find((x) => x.code === p.countryCode)!;
              return (
                <Reveal key={p.id}>
                  <article
                    className="directory-plan"
                    style={{
                      backgroundImage: `linear-gradient(90deg,rgba(255,255,255,.97),rgba(255,255,255,.92)),url("${c.image}")`,
                    }}
                  >
                    <div className="directory-country">
                      <img src={c.flag} />
                      <div>
                        <b>{c.name}</b>
                        <span>{c.landmark}</span>
                      </div>
                    </div>
                    <div>
                      <strong>{p.data}</strong>
                      <span>{p.validity}</span>
                    </div>
                    <div>
                      <b>KES {p.price.toLocaleString()}</b>
                      <span>{p.network}</span>
                    </div>
                    <Link
                      className="icon-link"
                      to={`/checkout/${p.id}`}
                      aria-label={`Choose ${c.name} plan`}
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
