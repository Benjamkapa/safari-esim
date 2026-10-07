import { Link } from "react-router-dom";
export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="brand">
      <img src="/safari-esim-logo.png" alt="Safari eSim" />
    </Link>
  );
}
