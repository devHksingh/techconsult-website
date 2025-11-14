import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Cloud, Network, Lightbulb, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import cybersecurityImage from "@/assets/cybersecurity-bg.jpg";
import cloudImage from "@/assets/cloud-solutions.jpg";

const Services = () => {
  const services = [
    {
      icon: Network,
      title: "IT Infrastructure Assessment",
      description: "Reliable IT Infrastructure Assessment for Business Efficiency",
      details: "Identify system weaknesses and optimize your IT infrastructure with expert assessment. Get a tailored action plan to reduce risks and costs.",
      benefits: [
        "Comprehensive system analysis",
        "Performance optimization recommendations",
        "Cost reduction strategies",
        "Risk mitigation planning"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity Consulting",
      description: "Expert Cybersecurity Consulting to Protect Your Business",
      details: "Safeguard your data and ensure compliance with customized cybersecurity strategies. Boost client trust and business resilience today.",
      benefits: [
        "Security audits and assessments",
        "Compliance strategy development",
        "Threat detection and prevention",
        "Employee security training"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & Migration",
      description: "Seamless Cloud Solutions & Migration Services",
      details: "Move to the cloud smoothly with minimal downtime. Enhance scalability and reduce costs with secure, managed cloud migration services.",
      benefits: [
        "Cloud readiness assessment",
        "Migration planning and execution",
        "Multi-cloud strategy",
        "Ongoing cloud optimization"
      ]
    },
    {
      icon: Lightbulb,
      title: "Digital Transformation Consulting",
      description: "Digital Transformation Consulting for Business Growth",
      details: "Drive innovation and efficiency with bespoke digital strategies. Empower your teams with tools and processes for sustainable success.",
      benefits: [
        "Digital strategy development",
        "Process automation",
        "Change management",
        "Technology adoption training"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$1,000",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Monthly IT consultation",
        "Email support",
        "Basic security assessment",
        "Quarterly reports"
      ]
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Weekly IT consultation",
        "Priority support 24/7",
        "Comprehensive security monitoring",
        "Monthly strategic reviews",
        "Cloud migration support"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$15,000",
      period: "/month",
      description: "For large organizations",
      features: [
        "Dedicated consultant team",
        "24/7 premium support",
        "Advanced security operations",
        "Weekly strategic sessions",
        "Custom solution development",
        "On-site support available"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Comprehensive IT consulting services designed for your business challenges
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.details}
                  </p>
                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="bg-accent hover:bg-accent/90">
                      Contact us to learn more
                    </Button>
                  </Link>
                </div>
                <div className={`rounded-lg overflow-hidden shadow-large ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={index % 2 === 0 ? cybersecurityImage : cloudImage}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing models tailored to your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative ${
                  tier.highlighted 
                    ? 'border-primary shadow-large scale-105' 
                    : 'border-border'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="block mt-6">
                    <Button 
                      className={`w-full ${
                        tier.highlighted 
                          ? 'bg-accent hover:bg-accent/90' 
                          : ''
                      }`}
                      variant={tier.highlighted ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
            Custom packages available to fit your budget and maximize ROI. 
            Contact us for project-based pricing or hourly consulting rates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
