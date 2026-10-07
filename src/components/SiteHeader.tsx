import { useState } from "react";
import { Menu, X, ChevronDown, Globe2, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
import { useLanguage, Language, Currency, CURRENCIES } from "../context/LanguageContext";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { language, setLanguage, currency, setCurrency, t } = useLanguage();

  return (
    <header className="site-header">
      <div className="container nav">
        <Logo />
        <nav className={open ? "nav-links open" : "nav-links"}>
          <Link to="/destinations" onClick={() => setOpen(false)}>
            {t("destinations")}
          </Link>
          <Link to="/how-it-works" onClick={() => setOpen(false)}>
            {t("how_it_works")}
          </Link>
          <Link to="/installation-guide" onClick={() => setOpen(false)}>
            {t("installation")}
          </Link>
          <Link to="/support" onClick={() => setOpen(false)}>
            {t("help")}
          </Link>
          {user ? (
            <Link
              className="nav-account"
              to="/portal"
              onClick={() => setOpen(false)}
            >
              {t("portal")} <ChevronDown size={14} />
            </Link>
          ) : (
            <Link
              className="nav-login"
              to="/auth/login"
              onClick={() => setOpen(false)}
            >
              {t("login")}
            </Link>
          )}
          <Link
            className="button button-small"
            to="/destinations"
            onClick={() => setOpen(false)}
          >
            {t("get_esim")}
          </Link>

          {/* Language & Currency Selectors */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginLeft: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.2rem", background: "rgba(255,255,255,0.06)", padding: "4px 8px", borderRadius: "6px" }}>
              <Globe2 size={14} />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                style={{ background: "transparent", border: "none", color: "inherit", fontSize: "0.85rem", cursor: "pointer", outline: "none" }}
              >
                <option value="en" style={{ background: "#111827" }}>EN</option>
                <option value="sw" style={{ background: "#111827" }}>SW (Kiswahili)</option>
                <option value="fr" style={{ background: "#111827" }}>FR (Français)</option>
                <option value="es" style={{ background: "#111827" }}>ES (Español)</option>
                <option value="de" style={{ background: "#111827" }}>DE (Deutsch)</option>
                <option value="ar" style={{ background: "#111827" }}>AR (العربية)</option>
              </select>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.2rem", background: "rgba(255,255,255,0.06)", padding: "4px 8px", borderRadius: "6px" }}>
              <Coins size={14} />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                style={{ background: "transparent", border: "none", color: "inherit", fontSize: "0.85rem", cursor: "pointer", outline: "none" }}
              >
                {Object.keys(CURRENCIES).map((c) => (
                  <option key={c} value={c} style={{ background: "#111827" }}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </nav>
        <button className="mobile-menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
