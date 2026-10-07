import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Check, ShieldCheck, ArrowRight, Smartphone } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import { countryByCode, findPlan } from "../data/plans";
import { useAuth } from "../context/AuthContext";
import Toast from "../components/Toast";
export default function Checkout() {
  const { id = "ke-5" } = useParams();
  const plan = findPlan(id) || findPlan("ke-5")!;
  const c = countryByCode(plan.countryCode)!;
  const { user } = useAuth();
  const [method, setMethod] = useState("mpesa");
  const [phone, setPhone] = useState(user?.phone || "");
  const [done, setDone] = useState(false);
  const [toast, setToast] = useState("");
  const nav = useNavigate();
  const pay = () => {
    if (method === "mpesa" && phone.replace(/\D/g, "").length < 9) {
      setToast("Enter a valid M-Pesa number");
      return;
    }
    setDone(true);
  };
  if (done)
    return (
      <>
        <SiteHeader />
        <main className="page">
          <div className="success-card">
            <div className="success-icon">
              <Check />
            </div>
            <span className="section-kicker">PAYMENT CONFIRMED</span>
            <h1>Your eSIM is ready.</h1>
            <p>
              {c.name} · {plan.data} · {plan.validity}. Your purchase is
              available in the portal and the installation guide is ready.
            </p>
            <div className="success-actions">
              <Link className="button" to="/portal/esims">
                View my eSIM <ArrowRight size={16} />
              </Link>
              <Link className="button button-outline" to="/installation-guide">
                Installation guide
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  return (
    <>
      <SiteHeader />
      <main className="page">
        <div className="container checkout-grid">
          <div>
            <span className="section-kicker">CHECKOUT</span>
            <h1>Finish your order.</h1>
            <p className="muted">
              Secure checkout. Your eSIM is provisioned after payment
              confirmation.
            </p>
            <div className="checkout-card">
              <h3>1. Payment method</h3>
              <div className="payment-methods">
                <button
                  className={
                    method === "mpesa"
                      ? "payment-option selected"
                      : "payment-option"
                  }
                  onClick={() => setMethod("mpesa")}
                >
                  <b>M-Pesa</b>
                  <span>Pay with your Safaricom number</span>
                  {method === "mpesa" && <Check />}
                </button>
                <button
                  className={
                    method === "card"
                      ? "payment-option selected"
                      : "payment-option"
                  }
                  onClick={() => setMethod("card")}
                >
                  <b>Card</b>
                  <span>Visa, Mastercard and supported cards</span>
                  {method === "card" && <Check />}
                </button>
              </div>
              {method === "mpesa" && (
                <label className="field">
                  M-Pesa phone number
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07XX XXX XXX"
                  />
                </label>
              )}
              {method === "card" && (
                <div className="card-placeholder">
                  <Smartphone size={20} />
                  <span>
                    Card fields will be supplied by the secure payment gateway.
                  </span>
                </div>
              )}
            </div>
            <div className="checkout-card">
              <h3>2. Account</h3>
              {user ? (
                <p className="muted">
                  Signed in as <b>{user.email}</b>. The eSIM will be attached to
                  your account.
                </p>
              ) : (
                <p className="muted">
                  You can checkout as a guest, or{" "}
                  <Link
                    className="inline-link"
                    to={`/auth/login?return=/checkout/${id}`}
                  >
                    sign in
                  </Link>{" "}
                  to keep your purchase in your portal.
                </p>
              )}
            </div>
          </div>
          <aside className="order-summary">
            <span className="section-kicker">YOUR ORDER</span>
            <div className="order-destination">
              <img src={c.flag} alt="" />
              <div>
                <b>{c.name} eSIM</b>
                <span>
                  {plan.data} · {plan.validity}
                </span>
              </div>
            </div>
            <div className="summary-line">
              <span>Plan</span>
              <b>KES {plan.price.toLocaleString()}</b>
            </div>
            <div className="summary-line">
              <span>Activation</span>
              <b>Instant</b>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <strong>KES {plan.price.toLocaleString()}</strong>
            </div>
            <button className="button full" onClick={pay}>
              Pay KES {plan.price.toLocaleString()} <ArrowRight size={16} />
            </button>
            <div className="secure">
              <ShieldCheck size={15} /> Secure checkout
            </div>
          </aside>
        </div>
      </main>
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </>
  );
}
