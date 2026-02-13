import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { SeeWhatHappening } from "./components/sections/SeeWhatHappening";
import { SupportLocalBusinesses } from "./components/sections/SupportLocalBusinesses";
import { Testimonials } from "./components/sections/Testimonials";
import { CTA } from "./components/sections/CTA";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <SeeWhatHappening />
        <SupportLocalBusinesses />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
