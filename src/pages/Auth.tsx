import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, ShieldCheck } from "lucide-react";
import Logo from "../components/Logo";
import { useAuth } from "../context/AuthContext";
export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: any;
}) {
  return (
    <main className="auth-page">
      <div className="auth-brand">
        <Logo />
      </div>
      <div className="auth-layout">
        <div className="auth-art">
          <div className="auth-art-content">
            <span className="section-kicker">SAFARI ESIM</span>
            <h1>
              Travel light.
              <br />
              <em>Stay connected.</em>
            </h1>
            <p>
              Manage your travel eSIMs, purchases and account from one simple
              portal.
            </p>
            <div className="auth-points">
              <span>
                <ShieldCheck />
                Secure account
              </span>
              <span>
                <ArrowRight />
                Instant eSIM delivery
              </span>
            </div>
          </div>
        </div>
        <div className="auth-panel">
          <div className="auth-card">
            <span className="section-kicker">ACCOUNT</span>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
export function Login() {
  const { login, loading } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    await login(email, pw);
    nav(new URLSearchParams(loc.search).get("return") || "/portal");
  };
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to manage your Safari eSim account."
    >
      <form onSubmit={submit} className="auth-form">
        <label>
          Email address
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Password
          <div className="password-field">
            <input
              type={show ? "text" : "password"}
              required
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="Your password"
            />
            <button type="button" onClick={() => setShow((v) => !v)}>
              {show ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </label>
        <div className="auth-row">
          <label className="check">
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/auth/forgot-password">Forgot password?</Link>
        </div>
        <button className="button full" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"} <ArrowRight size={16} />
        </button>
      </form>
      <div className="auth-switch">
        Don't have an account? <Link to="/auth/register">Create one</Link>
      </div>
    </AuthShell>
  );
}
export function Register() {
  const { register, loading } = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    await register(name, email, pw);
    nav("/portal");
  };
  return (
    <AuthShell
      title="Create your account"
      subtitle="Keep your purchases and eSIMs together in one portal."
    >
      <form onSubmit={submit} className="auth-form">
        <label>
          Full name
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          Email address
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            required
            minLength={6}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="At least 6 characters"
          />
        </label>
        <label className="check">
          <input type="checkbox" required /> I agree to the{" "}
          <Link to="/terms">terms</Link> and{" "}
          <Link to="/privacy">privacy policy</Link>.
        </label>
        <button className="button full" disabled={loading}>
          {loading ? "Creating..." : "Create account"} <ArrowRight size={16} />
        </button>
      </form>
      <div className="auth-switch">
        Already have an account? <Link to="/auth/login">Sign in</Link>
      </div>
    </AuthShell>
  );
}
export function Forgot() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <AuthShell
      title="Reset your password"
      subtitle="Enter your email and we'll send password reset instructions."
    >
      {sent ? (
        <div className="success-inline">
          <ShieldCheck />
          <h3>Check your inbox</h3>
          <p>
            If an account exists for {email}, reset instructions have been sent.
          </p>
          <Link className="button" to="/auth/login">
            Back to sign in
          </Link>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="auth-form"
        >
          <label>
            Email address
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
          <button className="button full">
            Send reset link <ArrowRight size={16} />
          </button>
          <Link className="center-link" to="/auth/login">
            Back to sign in
          </Link>
        </form>
      )}
    </AuthShell>
  );
}
