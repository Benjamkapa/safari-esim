import { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
//   CardSim,
  Receipt,
  WalletCards,
  LifeBuoy,
  Settings,
  UserRound,
  LogOut,
  ArrowLeft,
  Plus,
} from "lucide-react";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
const links = [
  ["/portal", "Overview", LayoutDashboard],
  ["/portal/esims", "My eSIMs"],
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
              <Receipt size={18} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="side-bottom">
          <Link to="/destinations" className="buy-link">
            <Plus size={16} /> Buy an eSIM
          </Link>
          <button
            onClick={async () => {
              await logout();
              nav("/");
            }}
          >
            <LogOut size={16} /> Sign out
          </button>
        </div>
      </aside>
      <main className="portal-main">
        <div className="portal-top">
          <Link to="/" className="back-site">
            <ArrowLeft size={16} /> Website
          </Link>
          <div className="portal-user">
            <div className="avatar">
              {user?.name?.slice(0, 2).toUpperCase() || "SA"}
            </div>
            <span>{user?.name || "Traveller"}</span>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
