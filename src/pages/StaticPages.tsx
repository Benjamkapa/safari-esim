import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Mail,
  MessageCircle,
  Network,
  ShieldCheck,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
const content: {
  [k: string]: {
    title: string;
    kicker: string;
    intro: string;
    sections: { h: string; p: string }[];
  };
} = {
  about: {
    kicker: "ABOUT",
    title: "Connectivity built around the traveller.",
    intro:
      "Safari eSim is a digital connectivity platform focused on making international mobile data easier to buy, install and manage.",
    sections: [
      {
        h: "Our idea",
        p: "Travelling should not require hunting for a local SIM, waiting in a shop or worrying about unexpected roaming charges. Safari eSim brings destination connectivity into one simple digital flow.",
      },
      {
        h: "Built for journeys",
        p: "The platform is designed for travellers who want clear plans, fast delivery and a portal where their purchases and eSIMs remain accessible.",
      },
      {
        h: "Designed to grow",
        p: "The architecture is intended to support multiple eSIM providers, payment methods, countries and account features as the service grows.",
      },
    ],
  },
  terms: {
    kicker: "LEGAL",
    title: "Terms & conditions",
    intro:
      "These terms explain the basic rules for using Safari eSim services.",
    sections: [
      {
        h: "Plans and purchases",
        p: "Plans are digital products. Pricing, validity, data allowance and supported destinations are displayed before checkout. A purchase is confirmed after successful payment.",
      },
      {
        h: "Connectivity",
        p: "Network performance depends on the destination, local network availability, device compatibility and coverage conditions. Safari eSim does not guarantee a particular speed or signal everywhere.",
      },
      {
        h: "Account responsibility",
        p: "Keep your login details secure and provide accurate information for purchases and payment.",
      },
    ],
  },
  privacy: {
    kicker: "LEGAL",
    title: "Privacy policy",
    intro:
      "We aim to collect only the information needed to provide and improve the service.",
    sections: [
      {
        h: "Information we use",
        p: "Account, purchase and support information may be used to authenticate you, fulfil eSIM purchases, process payments and provide customer support.",
      },
      {
        h: "Payment information",
        p: "Payment processing should be handled by the configured payment provider. Safari eSim should not store sensitive card credentials when the gateway provides tokenized processing.",
      },
      {
        h: "Your choices",
        p: "You can request account information, update your profile and manage communications through your portal settings.",
      },
    ],
  },
  refund: {
    kicker: "LEGAL",
    title: "Refund policy",
    intro:
      "Digital eSIM purchases require special handling because provisioning may occur immediately.",
    sections: [
      {
        h: "Before activation",
        p: "If an eSIM has not been activated or provisioned and a qualifying issue exists, support can review the order for a refund or replacement.",
      },
      {
        h: "After activation",
        p: "Activated or partially used data plans may not be refundable. Exceptional cases can be reviewed by support.",
      },
      {
        h: "How to request help",
        p: "Contact support with your order number, destination and a description of the issue so the team can investigate.",
      },
    ],
  },
  coverage: {
    kicker: "NETWORK",
    title: "Network coverage",
    intro:
      "Safari eSim plans connect through supported partner networks in each destination.",
    sections: [
      {
        h: "Coverage varies",
        p: "A plan can be active while signal strength changes by city, building, terrain and local network availability.",
      },
      {
        h: "Before you travel",
        p: "Check that your device supports eSIM and is unlocked. Review the destination plan details and installation guide before departure.",
      },
      {
        h: "If you lose service",
        p: "Confirm the eSIM line is enabled, mobile data is assigned to the eSIM and roaming settings match the installation instructions for your plan.",
      },
    ],
  },
};
export function ContentPage({ type }: { type: keyof typeof content }) {
  const c = content[type];
  return (
    <>
      <SiteHeader />
      <main className="page content-page">
        <div className="container narrow">
          <span className="section-kicker">{c.kicker}</span>
          <h1>{c.title}</h1>
          <p className="lead">{c.intro}</p>
          {c.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
export function HowItWorks() {
  return (
    <>
      <SiteHeader />
      <main className="page content-page">
        <div className="container narrow">
          <span className="section-kicker">HOW IT WORKS</span>
          <h1>From destination to connection in minutes.</h1>
          <p className="lead">
            Safari eSim turns the traditional SIM-shopping process into a simple
            digital journey.
          </p>
          {[
            [
              "01",
              "Choose a destination",
              "Browse countries and select a plan based on data and validity.",
            ],
            [
              "02",
              "Checkout securely",
              "Choose a payment method and complete the order.",
            ],
            [
              "03",
              "Receive your eSIM",
              "Your digital installation details are made available after confirmation.",
            ],
            [
              "04",
              "Install on your phone",
              "Follow the guided setup steps and select Safari eSim as your travel data line.",
            ],
            [
              "05",
              "Manage your trip",
              "Use your portal to review active eSIMs, orders, data and support.",
            ],
          ].map((x) => (
            <div className="how-row" key={x[0]}>
              <b>{x[0]}</b>
              <div>
                <h2>{x[1]}</h2>
                <p>{x[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
export function Installation() {
  return (
    <>
      <SiteHeader />
      <main className="page content-page">
        <div className="container narrow">
          <span className="section-kicker">INSTALLATION GUIDE</span>
          <h1>Install your Safari eSim.</h1>
          <p className="lead">
            Your exact screens depend on your device, but the process follows
            the same basic steps.
          </p>
          <div className="guide-grid">
            {[
              [
                "01",
                "Check compatibility",
                "Confirm your phone supports eSIM and is carrier-unlocked.",
              ],
              [
                "02",
                "Open mobile settings",
                "Find Mobile Data / Cellular settings and choose Add eSIM.",
              ],
              [
                "03",
                "Scan or enter details",
                "Use the QR code or manual activation information supplied with your purchase.",
              ],
              [
                "04",
                "Label the line",
                "Give the Safari eSim line a clear label such as “Travel Data”.",
              ],
              [
                "05",
                "Choose data line",
                "Set Safari eSim as the mobile-data line when you are abroad.",
              ],
              [
                "06",
                "Keep your home SIM",
                "If your device supports dual SIM, keep your normal line available for calls and OTPs where supported.",
              ],
            ].map((x) => (
              <div className="guide-step" key={x[0]}>
                <b>{x[0]}</b>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
            ))}
          </div>
          <div className="notice">
            <ShieldCheck />
            <div>
              <b>Important</b>
              <span>
                Do not delete an active eSIM unless you are sure you no longer
                need it. Re-installation may require a new activation depending
                on the provider.
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export function FAQ() {
  const qs = [
    [
      "What is an eSIM?",
      "An eSIM is a digital SIM built into compatible devices. It lets you activate a mobile plan without inserting a physical SIM card.",
    ],
    [
      "Can I keep my normal SIM?",
      "On compatible dual-SIM devices, yes. You can keep your normal line and use Safari eSim for travel data.",
    ],
    [
      "When do I receive my eSIM?",
      "After successful payment and provisioning, the eSIM details are made available digitally.",
    ],
    [
      "Does every phone support eSIM?",
      "No. Compatibility varies by device and market. Check your exact model before purchasing.",
    ],
    [
      "Can I use hotspot?",
      "Hotspot availability depends on the plan and the local network configuration.",
    ],
    [
      "What if my eSIM does not connect?",
      "Check that the eSIM line is enabled, mobile data is assigned to it and the installation instructions have been followed. If it still fails, contact support.",
    ],
  ];
  return (
    <>
      <SiteHeader />
      <main className="page content-page">
        <div className="container narrow">
          <span className="section-kicker">HELP CENTRE</span>
          <h1>Frequently asked questions.</h1>
          <p className="lead">
            Quick answers to the things travellers ask most.
          </p>
          <div className="faq-list">
            {qs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  <HelpCircle size={18} />
                  {q}
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <>
      <SiteHeader />
      <main className="page">
        <div className="container contact-grid">
          <div>
            <span className="section-kicker">CONTACT</span>
            <h1>We're here to help.</h1>
            <p className="lead">
              Tell us what happened and include your order number if you have
              one.
            </p>
            <div className="contact-method">
              <Mail />
              <div>
                <b>Email</b>
                <span>support@safari-esim.example</span>
              </div>
            </div>
            <div className="contact-method">
              <MessageCircle />
              <div>
                <b>Support</b>
                <span>
                  Use the portal support area for account-linked requests.
                </span>
              </div>
            </div>
            <div className="contact-method">
              <Network />
              <div>
                <b>Coverage</b>
                <span>Check the coverage page before travelling.</span>
              </div>
            </div>
          </div>
          <div className="portal-panel contact-form">
            {sent ? (
              <div className="success-inline">
                <CheckCircle2 />
                <h2>Message received.</h2>
                <p>
                  Your support form is ready to be connected to the backend
                  ticketing endpoint.
                </p>
                <Link className="button" to="/faq">
                  Read FAQs
                </Link>
              </div>
            ) : (
              <form onSubmit={submit}>
                <label className="field">
                  Name
                  <input required placeholder="Your name" />
                </label>
                <label className="field">
                  Email
                  <input required type="email" placeholder="you@example.com" />
                </label>
                <label className="field">
                  Order number
                  <input placeholder="#SE-1024" />
                </label>
                <label className="field">
                  Message
                  <textarea required placeholder="How can we help?" />
                </label>
                <button className="button">
                  Send message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
