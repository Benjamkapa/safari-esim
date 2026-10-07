import { useState } from "react";
import { Menu, X, ChevronDown, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  return (
    <header className="site-header">
      <div className="container nav">
        <Logo />
        <nav className={open ? "nav-links open" : "nav-links"}>
          <Link to="/destinations" onClick={() => setOpen(false)}>
            Destinations
          </Link>
          <Link to="/how-it-works" onClick={() => setOpen(false)}>
            How it works
          </Link>
          <Link to="/installation-guide" onClick={() => setOpen(false)}>
            Installation
          </Link>
          <Link to="/support" onClick={() => setOpen(false)}>
            Help
          </Link>
          {user ? (
            <Link
              className="nav-account"
              to="/portal"
              onClick={() => setOpen(false)}
            >
              Portal <ChevronDown size={14} />
            </Link>
          ) : (
            <Link
              className="nav-login"
              to="/auth/login"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          )}
          <Link
            className="button button-small"
            to="/destinations"
            onClick={() => setOpen(false)}
          >
            Get an eSIM
          </Link>
        </nav>
        <button className="mobile-menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
