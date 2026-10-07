import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  Edit3,
  Mail,
  Phone,
  Save,
  ShieldCheck,
  Trash2,
  WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";
import PortalLayout from "../components/PortalLayout";
import { useAuth } from "../context/AuthContext";
import { countries } from "../data/countries";
const active = countries[0];
export function PortalHome() {
  return (
    <PortalLayout>
      <PortalHeader
        title="Good afternoon"
        sub="Your travel connectivity at a glance."
      />
      <div className="portal-stats">
        <Stat title="Active eSIMs" value="2" />
        <Stat title="Data remaining" value="3.8 GB" />
        <Stat title="Days remaining" value="12" />
        <Stat title="Total orders" value="6" />
      </div>
      <div className="portal-grid">
        <section className="portal-panel">
          <PanelHead
            kicker="ACTIVE ESIM"
            title="Your connectivity"
            action="Buy another"
            href="/destinations"
          />
          <div className="active-esim-card">
            <div className="active-top">
              <div className="country">
                <img src={active.flag} />
                <div>
                  <b>{active.name}</b>
                  <small>5 GB · 30 days</small>
                </div>
              </div>
              <span className="status">Active</span>
            </div>
            <strong>3.8 GB</strong>
            <small>remaining of 5 GB</small>
            <div className="progress">
              <i style={{ width: "76%" }} />
            </div>
            <div className="esim-meta">
              <span>
                <small>Expires</small>
                <b>19 Oct 2026</b>
              </span>
              <span>
                <small>Network</small>
                <b>4G / LTE</b>
              </span>
              <span>
                <small>ICCID</small>
                <b>•••• 4821</b>
              </span>
            </div>
            <div className="esim-actions">
              <Link className="button" to="/portal/esims">
                Manage eSIM
              </Link>
              <Link className="button button-outline" to="/installation-guide">
                Installation
              </Link>
            </div>
          </div>
        </section>
        <section className="portal-panel">
          <PanelHead
            kicker="RECENT ORDERS"
            title="Your activity"
            action="View all"
            href="/portal/orders"
          />
          {[
            "Kenya · 5 GB",
            "Tanzania · 3 GB",
            "United Kingdom · 10 GB",
            "UAE · 5 GB",
          ].map((x, i) => (
            <div className="activity-row" key={x}>
              <span>{x.split(" · ")[0]}</span>
              <div>
                <b>{x.split(" · ")[1]}</b>
                <small>{i + 1} Oct 2026</small>
              </div>
              <strong>KES {["850", "650", "1,895", "1,625"][i]}</strong>
            </div>
          ))}
        </section>
      </div>
    </PortalLayout>
  );
}
function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="portal-stat">
      <span>{title}</span>
      <b>{value}</b>
    </div>
  );
}
function PortalHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="portal-heading">
      <div>
        <span className="section-kicker">PORTAL</span>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
      <Link className="button" to="/destinations">
        Buy an eSIM <ArrowRight size={16} />
      </Link>
    </div>
  );
}
function PanelHead({
  kicker,
  title,
  action,
  href,
}: {
  kicker: string;
  title: string;
  action: string;
  href: string;
}) {
  return (
    <div className="panel-head">
      <div>
        <span className="section-kicker">{kicker}</span>
        <h2>{title}</h2>
      </div>
      <Link to={href}>{action}</Link>
    </div>
  );
}
export function MyEsims() {
  return (
    <PortalLayout>
      <PortalHeader
        title="My eSIMs"
        sub="Manage active connections, installation details and usage."
      />
      <div className="esim-list">
        <EsimItem
          country={countries[0]}
          data="5 GB"
          remaining="3.8 GB"
          expires="19 Oct 2026"
        />
        <EsimItem
          country={countries[6]}
          data="5 GB"
          remaining="2.1 GB"
          expires="26 Oct 2026"
        />
      </div>
    </PortalLayout>
  );
}
function EsimItem({
  country,
  data,
  remaining,
  expires,
}: {
  country: any;
  data: string;
  remaining: string;
  expires: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <article className="full-esim-card">
      <div
        className="full-esim-cover"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(5,42,96,.92),rgba(5,42,96,.35)),url("${country.image}")`,
        }}
      >
        <div>
          <img src={country.flag} />
          <h2>{country.name}</h2>
          <span>{data} · 30 days</span>
        </div>
        <span className="status">Active</span>
      </div>
      <div className="full-esim-body">
        <div>
          <small>Data remaining</small>
          <b>{remaining}</b>
        </div>
        <div>
          <small>Expires</small>
          <b>{expires}</b>
        </div>
        <div>
          <small>ICCID</small>
          <b>•••• 4821</b>
        </div>
        <div>
          <small>Network</small>
          <b>4G / LTE</b>
        </div>
      </div>
      <div className="esim-bottom-actions">
        <button
          className="button"
          onClick={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
        >
          <Copy size={15} />
          {copied ? "Copied" : "Copy ICCID"}
        </button>
        <Link className="button button-outline" to="/installation-guide">
          <Download size={15} /> Installation guide
        </Link>
        <button className="button button-outline">
          <WalletCards size={15} /> Top up
        </button>
      </div>
    </article>
  );
}
export function Orders() {
  return (
    <PortalLayout>
      <PortalHeader
        title="Orders"
        sub="Review your purchases and payment history."
      />
      <div className="portal-panel table-panel">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Destination</th>
                <th>Plan</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {countries.slice(0, 6).map((c, i) => (
                <tr key={c.code}>
                  <td>#SE-{1024 - i}</td>
                  <td>
                    <img className="tiny-flag" src={c.flag} />
                    {c.name}
                  </td>
                  <td>{i % 2 ? "5 GB / 30 days" : "10 GB / 30 days"}</td>
                  <td>0{i + 1} Oct 2026</td>
                  <td>KES {i % 2 ? "850" : "1,450"}</td>
                  <td>
                    <span className="pill-success">Paid</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalLayout>
  );
}
export function Wallet() {
  const [amount, setAmount] = useState("");
  const [added, setAdded] = useState(false);
  return (
    <PortalLayout>
      <PortalHeader
        title="Wallet"
        sub="Keep credit available for quick eSIM purchases."
      />
      <div className="wallet-grid">
        <div className="wallet-card">
          <WalletCards size={25} />
          <span>Available balance</span>
          <strong>KES 2,450</strong>
          <button className="button" onClick={() => setAdded(true)}>
            Add funds
          </button>
        </div>
        <div className="portal-panel">
          <PanelHead
            kicker="ADD FUNDS"
            title="Top up wallet"
            action=""
            href="#"
          />
          <label className="field">
            Amount
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="KES 1,000"
            />
          </label>
          <button className="button" onClick={() => setAdded(true)}>
            Continue <ArrowRight size={16} />
          </button>
          {added && (
            <div className="inline-success">
              <Check size={15} />
              Top-up request captured for KES {amount || "0"}.
            </div>
          )}
        </div>
      </div>
    </PortalLayout>
  );
}
export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [country, setCountry] = useState(user?.country || "Kenya");
  const [saved, setSaved] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    updateProfile({ name, phone, country });
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };
  return (
    <PortalLayout>
      <PortalHeader
        title="Profile"
        sub="Keep your traveller details up to date."
      />
      <div className="profile-grid">
        <form className="portal-panel profile-form" onSubmit={submit}>
          <div className="profile-avatar">
            {name.slice(0, 2).toUpperCase() || "SA"}
          </div>
          <div className="field">
            <span>Full name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="field">
            <span>Email address</span>
            <input value={user?.email || ""} disabled />
          </div>
          <div className="field">
            <span>Phone number</span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07XX XXX XXX"
            />
          </div>
          <div className="field">
            <span>Home country</span>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries.map((c) => (
                <option key={c.code}>{c.name}</option>
              ))}
            </select>
          </div>
          <button className="button" type="submit">
            <Save size={15} />
            {saved ? "Saved" : "Save changes"}
          </button>
        </form>
        <div className="portal-panel">
          <span className="section-kicker">ACCOUNT</span>
          <h2>Profile preferences</h2>
          <p className="muted">
            Your profile is already structured for backend persistence. Connect
            the update endpoint in the auth service when the API is ready.
          </p>
          <div className="preference-row">
            <ShieldCheck />
            <div>
              <b>Verified account</b>
              <span>Email verification status will appear here.</span>
            </div>
          </div>
          <div className="preference-row">
            <Phone />
            <div>
              <b>Travel contact</b>
              <span>Your number can be used for M-Pesa checkout.</span>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
export function Support() {
  const [sent, setSent] = useState(false);
  return (
    <PortalLayout>
      <PortalHeader
        title="Support"
        sub="Get help before, during or after your journey."
      />
      <div className="support-cards">
        <Link to="/faq" className="support-action">
          <b>Frequently asked questions</b>
          <span>Find quick answers.</span>
          <ArrowRight />
        </Link>
        <Link to="/installation-guide" className="support-action">
          <b>Installation guide</b>
          <span>Set up your eSIM step by step.</span>
          <ArrowRight />
        </Link>
        <Link to="/contact" className="support-action">
          <b>Contact support</b>
          <span>Send us a message.</span>
          <ArrowRight />
        </Link>
      </div>
      <div className="portal-panel ticket">
        <span className="section-kicker">NEW REQUEST</span>
        <h2>Tell us what you need.</h2>
        <textarea placeholder="Describe your issue or question..." />
        <button className="button" onClick={() => setSent(true)}>
          Submit request
        </button>
        {sent && (
          <div className="inline-success">
            <Check size={15} />
            Request captured. Connect this handler to your support API.
          </div>
        )}
      </div>
    </PortalLayout>
  );
}
export function Settings() {
  const [marketing, setMarketing] = useState(true);
  const [security, setSecurity] = useState(true);
  const [deleted, setDeleted] = useState(false);
  return (
    <PortalLayout>
      <PortalHeader
        title="Settings"
        sub="Control notifications, security and account preferences."
      />
      <div className="portal-panel settings-list">
        <Setting
          title="Email notifications"
          desc="Receive order receipts and important account updates."
          value={marketing}
          setValue={setMarketing}
        />
        <Setting
          title="Security alerts"
          desc="Notify me when a new login or security event occurs."
          value={security}
          setValue={setSecurity}
        />
        <Setting
          title="Data usage alerts"
          desc="Alert me when an active eSIM is running low on data."
          value={true}
          setValue={() => {}}
        />
        <div className="danger-zone">
          <Trash2 />
          <div>
            <b>Delete account</b>
            <span>
              This action is permanent and will remove your account data.
            </span>
          </div>
          <button onClick={() => setDeleted(true)}>Delete</button>
          {deleted && (
            <div className="inline-success danger">
              <Trash2 size={15} />
              Deletion request staged for backend confirmation.
            </div>
          )}
        </div>
      </div>
    </PortalLayout>
  );
}
function Setting({
  title,
  desc,
  value,
  setValue,
}: {
  title: string;
  desc: string;
  value: boolean;
  setValue: (v: boolean) => void;
}) {
  return (
    <div className="setting-row">
      <div>
        <b>{title}</b>
        <span>{desc}</span>
      </div>
      <button
        className={value ? "switch on" : "switch"}
        onClick={() => setValue(!value)}
      >
        <i />
      </button>
    </div>
  );
}
