import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Tv, Wrench, CreditCard, Phone, Clock, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">CableFlow Connect</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-white/90 hover:text-white transition-colors">Services</a>
            <a href="#status" className="text-white/90 hover:text-white transition-colors">Status</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">Contact</a>
          </div>
          <Button variant="secondary" size="sm">
            <Phone className="w-4 h-4 mr-2" />
            Emergency
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
          24/7 Professional Service
        </Badge>
        
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Cable TV & Internet
          <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Solutions
          </span>
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Professional maintenance, recharge services, and technical support for your cable TV and internet needs. Fast, reliable, and affordable.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="lg" className="animate-fade-in">
            <CreditCard className="w-5 h-5 mr-2" />
            Recharge Now
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/20 animate-fade-in">
            <Wrench className="w-5 h-5 mr-2" />
            Book Maintenance
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-white/80">Happy Customers</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-white/80">Support Available</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold">99%</div>
            <div className="text-white/80">Uptime Guarantee</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;