import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatusDashboard from "@/components/StatusDashboard";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <StatusDashboard />
      <Contact />
    </div>
  );
};

export default Index;
