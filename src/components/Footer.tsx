import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src="/safari-esim-logoL.png"
            height={"50px"}
            alt="Safari eSim"
          />
          <p>
            {t("hero_sub")}
          </p>
          <div className="contact-mini">
            <span>
              <Mail size={14} /> support@safar-esim.example
            </span>
            <span>
              <MapPin size={14} /> Nairobi, Kenya
            </span>
          </div>
        </div>
        <div>
          <b>{t("explore")}</b>
          <Link to="/destinations">{t("destinations")}</Link>
          <Link to="/plans">{t("all_plans")}</Link>
          <Link to="/how-it-works">{t("how_it_works")}</Link>
          <Link to="/installation-guide">{t("installation_guide")}</Link>
        </div>
        <div>
          <b>{t("support")}</b>
          <Link to="/support">{t("help_centre")}</Link>
          <Link to="/faq">{t("faqs")}</Link>
          <Link to="/contact">{t("contact_us")}</Link>
          <Link to="/network-coverage">{t("network_coverage")}</Link>
        </div>
        <div>
          <b>{t("company")}</b>
          <Link to="/about">{t("about")}</Link>
          <Link to="/terms">{t("terms")}</Link>
          <Link to="/privacy">{t("privacy")}</Link>
          <Link to="/refund-policy">{t("refund_policy")}</Link>
        </div>
      </div>
      <div className="container footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span>© 2026 Safari eSim. {t("rights_reserved")}</span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>{t("translate_more")}:</span>
          <div id="google_translate_element"></div>
        </div>
      </div>
    </footer>
  );
}

