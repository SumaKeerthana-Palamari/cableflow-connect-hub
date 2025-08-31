import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tv, Wifi, Wrench, CreditCard, Clock, Shield, Zap, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Tv,
      title: "Cable TV Services",
      description: "Complete cable TV setup, channel packages, and premium entertainment solutions.",
      features: ["HD/4K Channels", "Premium Packages", "Sports & Movies", "Installation"],
      price: "From $29/month",
      badge: "Popular"
    },
    {
      icon: Wifi,
      title: "Internet Solutions",
      description: "High-speed internet connections with reliable uptime and unlimited data.",
      features: ["Fiber Optic", "High-Speed", "Unlimited Data", "24/7 Support"],
      price: "From $39/month",
      badge: "Best Value"
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Professional maintenance and quick repair services for all your connectivity needs.",
      features: ["Same-Day Service", "Expert Technicians", "Warranty Included", "Emergency Calls"],
      price: "From $49/visit",
      badge: "Fast"
    },
    {
      icon: CreditCard,
      title: "Recharge Services",
      description: "Easy and secure recharge options for your cable TV and internet subscriptions.",
      features: ["Online Payment", "Auto-Renewal", "Multiple Methods", "Instant Activation"],
      price: "No extra fees",
      badge: "Convenient"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Services</Badge>
          <h2 className="text-4xl font-bold mb-4">Complete Connectivity Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From installation to maintenance, we provide comprehensive cable TV and internet services 
            tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <CardHeader className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-primary text-white shadow-elegant">
            <CardHeader className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <CardTitle>24/7 Emergency Support</CardTitle>
              <CardDescription className="text-white/90">
                Round-the-clock technical support for urgent connectivity issues
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-primary text-white shadow-elegant">
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <CardTitle>Service Warranty</CardTitle>
              <CardDescription className="text-white/90">
                All our services come with comprehensive warranty and satisfaction guarantee
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-primary text-white shadow-elegant">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <CardTitle>Expert Technicians</CardTitle>
              <CardDescription className="text-white/90">
                Certified professionals with years of experience in cable and internet services
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;