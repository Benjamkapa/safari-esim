import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Plans from "./pages/Plans";
import DestinationDetail from "./pages/DestinationDetail";
import Checkout from "./pages/Checkout";
import { Login, Register, Forgot } from "./pages/Auth";
import {
  PortalHome,
  MyEsims,
  Orders,
  Wallet,
  Profile,
  Support,
  Settings,
} from "./pages/PortalPages";
import {
  ContentPage,
  HowItWorks,
  Installation,
  FAQ,
  Contact,
} from "./pages/StaticPages";
import { useAuth } from "./context/AuthContext";
function Protected({ children }: { children: any }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/auth/login?return=/portal" replace />;
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destinations/:code" element={<DestinationDetail />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/checkout/:id" element={<Checkout />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/forgot-password" element={<Forgot />} />
      <Route
        path="/portal"
        element={
          <Protected>
            <PortalHome />
          </Protected>
        }
      />
      <Route
        path="/portal/esims"
        element={
          <Protected>
            <MyEsims />
          </Protected>
        }
      />
      <Route
        path="/portal/orders"
        element={
          <Protected>
            <Orders />
          </Protected>
        }
      />
      <Route
        path="/portal/wallet"
        element={
          <Protected>
            <Wallet />
          </Protected>
        }
      />
      <Route
        path="/portal/profile"
        element={
          <Protected>
            <Profile />
          </Protected>
        }
      />
      <Route
        path="/portal/support"
        element={
          <Protected>
            <Support />
          </Protected>
        }
      />
      <Route
        path="/portal/settings"
        element={
          <Protected>
            <Settings />
          </Protected>
        }
      />
      <Route path="/about" element={<ContentPage type="about" />} />
      <Route path="/terms" element={<ContentPage type="terms" />} />
      <Route path="/privacy" element={<ContentPage type="privacy" />} />
      <Route path="/refund-policy" element={<ContentPage type="refund" />} />
      <Route
        path="/network-coverage"
        element={<ContentPage type="coverage" />}
      />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/installation-guide" element={<Installation />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/support" element={<Contact />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
