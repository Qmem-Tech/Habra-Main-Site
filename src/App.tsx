import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { GlobalLoader } from "./components/ui/GlobalLoader";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { ContactPage } from "./pages/ContactPage";
import { ConnectPayoutPage } from "./pages/ConnectPayoutPage";
import { AuthResetPasswordPage } from "./pages/AuthResetPasswordPage";
import { resolveConnectVariant } from "./lib/connectRoute";

function MarketingLayout() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function ConnectCallbackPage() {
  const { pathname, search } = useLocation();
  const variant = resolveConnectVariant(pathname, search);
  if (!variant) {
    return <Navigate to="/" replace />;
  }
  return <ConnectPayoutPage variant={variant} />;
}

function App() {
  return (
    <>
      <GlobalLoader />
      <Routes>
        <Route path="/connect/return" element={<ConnectCallbackPage />} />
        <Route path="/connect/refresh" element={<ConnectCallbackPage />} />
        <Route path="/auth/reset-password" element={<AuthResetPasswordPage />} />
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
