import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Cloud, Network, Lightbulb, Check, Code, Palette, TrendingUp, Settings, Zap, Lock, Database, Smartphone, ArrowRight, CheckCircle2, Server, Globe, Cpu, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { motion } from "motion/react";

const Services = () => {
  const services = [
    {
      icon: Network,
      title: "IT Infrastructure Assessment & Optimization",
      description: "Build a reliable, scalable foundation for business growth",
      details: "Our comprehensive infrastructure assessment identifies system weaknesses, performance bottlenecks, and security vulnerabilities. We deliver actionable roadmaps that optimize your technology stack, reduce operational costs by up to 40%, and ensure 99.9% uptime for mission-critical systems.",
      benefits: [
        "Complete infrastructure audit and documentation",
        "Performance optimization and capacity planning",
        "Cost reduction strategies and ROI analysis",
        "Disaster recovery and business continuity planning"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity Consulting & Compliance",
      description: "Protect your business from evolving cyber threats",
      details: "In an era of increasing cyber attacks, we provide enterprise-grade security solutions tailored to your risk profile. Our experts conduct thorough security audits, implement zero-trust architectures, and ensure compliance with GDPR, HIPAA, SOC 2, and other regulatory standards.",
      benefits: [
        "Comprehensive security audits and penetration testing",
        "Regulatory compliance strategy (GDPR, HIPAA, SOC 2)",
        "24/7 threat monitoring and incident response",
        "Security awareness training for your team"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & Migration",
      description: "Seamless transition to scalable, cost-effective cloud infrastructure",
      details: "Whether you're moving to AWS, Azure, or Google Cloud, we ensure a smooth migration with zero downtime. Our cloud architects design multi-cloud strategies that improve scalability, reduce infrastructure costs by 50-70%, and enable rapid deployment of new services.",
      benefits: [
        "Cloud readiness assessment and TCO analysis",
        "End-to-end migration planning and execution",
        "Multi-cloud and hybrid cloud architecture",
        "Ongoing optimization and cost management"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Lightbulb,
      title: "Digital Transformation Consulting",
      description: "Drive innovation and competitive advantage through technology",
      details: "We help organizations modernize legacy systems, automate workflows, and adopt cutting-edge technologies like AI, IoT, and blockchain. Our holistic approach ensures technology investments align with business objectives and deliver measurable ROI.",
      benefits: [
        "Digital strategy development and roadmapping",
        "Process automation and workflow optimization",
        "Change management and adoption programs",
        "Innovation workshops and technology training"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built with modern technology stacks",
      details: "Our development team builds scalable, maintainable applications using industry best practices. From enterprise web platforms to mobile apps, we deliver solutions that solve your unique business challenges with clean, efficient code.",
      benefits: [
        "Full-stack development (React, Node.js, Python, Ruby on Rails)",
        "Mobile app development (iOS & Android)",
        "API development and third-party integrations",
        "Legacy system modernization and refactoring"
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Settings,
      title: "DevOps & CI/CD Implementation",
      description: "Accelerate delivery with automated deployment pipelines",
      details: "We implement DevOps best practices that reduce deployment time from weeks to minutes. Our CI/CD pipelines, infrastructure as code, and containerization strategies enable rapid iteration while maintaining stability and security.",
      benefits: [
        "CI/CD pipeline setup (Jenkins, GitLab CI, GitHub Actions)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Containerization and orchestration (Docker, Kubernetes)",
        "Monitoring and logging solutions (Prometheus, ELK)"
      ],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
      color: "from-violet-500 to-purple-600"
    }
  ];

  const additionalServices = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that drives engagement and conversion"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "SEO, PPC, and content strategies that generate qualified leads"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Optimization, migration, and management for SQL and NoSQL databases"
    },
    {
      icon: Smartphone,
      title: "Mobile Strategy",
      description: "Native and cross-platform mobile solutions for iOS and Android"
    }
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: "$2,500",
      period: "/month",
      description: "Perfect for startups and small businesses",
      features: [
        "8 hours of monthly consultation",
        "Email support (response within 24hrs)",
        "Quarterly infrastructure review",
        "Basic security assessment",
        "Cloud cost optimization",
        "Documentation and best practices"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "40 hours of monthly consultation",
        "Priority support 24/7",
        "Dedicated account manager",
        "Monthly security audits",
        "Cloud migration support",
        "DevOps and CI/CD setup",
        "Performance monitoring",
        "Quarterly strategic planning sessions"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited consultation hours",
        "Dedicated consultant team",
        "24/7 premium support with SLA",
        "Advanced security operations center",
        "Custom software development",
        "On-site support available",
        "Executive strategy workshops",
        "White-glove service and training"
      ],
      popular: false
    }
  ];

  const techStack = {
    "Backend": ["Node.js", "Python", "Ruby on Rails", "Rust", "Go", "Java"],
    "Frontend": ["React", "Vue.js", "Angular", "Next.js", "TypeScript"],
    "DevOps": ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB"]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bTQgMHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-medium">Comprehensive IT Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight px-4">
              Enterprise-Grade Services That Scale With Your Business
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto px-4">
              From infrastructure optimization to custom software development, we provide end-to-end technology solutions that drive measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`mb-6 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                    <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg text-blue-600 font-semibold mb-4">
                    {service.description}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                    {service.details}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all">
                      <span className="flex items-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative group">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Additional Specialized Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions to meet all your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all h-full bg-white">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-200 rounded-full mb-4">
              <Cpu className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-700 font-medium">Our Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              We work with cutting-edge technologies to build scalable, maintainable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-white h-full">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl text-slate-900">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Choose a plan that fits your needs, or let us create a custom package for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={tier.popular ? 'md:-mt-4 md:mb-4' : ''}
              >
                <Card 
                  className={`relative h-full border-2 ${
                    tier.popular 
                      ? 'border-blue-500 shadow-2xl bg-white' 
                      : 'border-slate-200 bg-white shadow-lg'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pb-6">
                    <CardTitle className="text-xl sm:text-2xl text-slate-900">{tier.name}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{tier.description}</CardDescription>
                    <div className="mt-6">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">{tier.price}</span>
                      <span className="text-base sm:text-lg text-slate-600 ml-2">{tier.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                            tier.popular ? 'text-blue-600' : 'text-emerald-500'
                          }`} />
                          <span className="text-sm sm:text-base text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="block">
                      <Button 
                        className={`w-full ${
                          tier.popular 
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg' 
                            : 'bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                        }`}
                        size="lg"
                      >
                        {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-slate-600 mb-6">
              <strong>Custom packages available:</strong> We offer flexible engagement models including project-based pricing, hourly consulting rates, and retainer agreements tailored to your budget and objectives.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                Not sure which plan is right for you?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6">
                Schedule a free consultation with our team to discuss your specific needs and get a customized quote.
              </p>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg">
                  <span className="flex items-center gap-2">
                    Schedule Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Modernize Your Technology?
            </h2>
            <p className="text-base sm:text-xl mb-8 text-blue-50">
              Let's discuss how our proven services can help you achieve your business goals faster and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-slate-50 font-semibold shadow-xl">
                  <span className="flex items-center gap-2">
                    Get Started Today
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;