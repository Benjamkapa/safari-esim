import { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Cpu,
  Receipt,
  WalletCards,
  LifeBuoy,
  Settings,
  UserRound,
  LogOut,
  ArrowLeft,
  Plus,
  Globe2,
  Coins,
} from "lucide-react";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
import { useLanguage, Language, Currency, CURRENCIES } from "../context/LanguageContext";

const links = [
  ["/portal", "Overview", LayoutDashboard],
  ["/portal/esims", "My eSIMs", Cpu],
  ["/portal/orders", "Orders", Receipt],
  ["/portal/wallet", "Wallet", WalletCards],
  ["/portal/profile", "Profile", UserRound],
  ["/portal/support", "Support", LifeBuoy],
  ["/portal/settings", "Settings", Settings],
] as const;

export default function PortalLayout({ children }: { children: ReactNode }) {
  const loc = useLocation();
  const nav = useNavigate();
  const { user, logout } = useAuth();
  const { language, setLanguage, currency, setCurrency, t } = useLanguage();

  return (
    <div className="portal-shell">
      <aside className="portal-side">
        <Logo />
        <nav>
          {links.map(([to, label, Icon]) => (
            <Link
              key={to}
              className={loc.pathname === to ? "side-link active" : "side-link"}
              to={to}
            >
              <Icon size={18} />
              <span>{t(label)}</span>
            </Link>
          ))}
        </nav>
        <div className="side-bottom">
          <Link to="/destinations" className="buy-link">
            <Plus size={16} /> {t("get_esim")}
          </Link>
          <button
            onClick={async () => {
              await logout();
              nav("/");
            }}
          >
            <LogOut size={16} /> {t("Log out")}
          </button>
        </div>
      </aside>
      <main className="portal-main">
        <div className="portal-top" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/" className="back-site">
            <ArrowLeft size={16} /> {t("Website")}
          </Link>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Language & Currency Controls */}
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
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

            <div className="portal-user">
              <div className="avatar">
                {user?.name?.slice(0, 2).toUpperCase() || "SA"}
              </div>
              <span>{user?.name || "Traveller"}</span>
            </div>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}

