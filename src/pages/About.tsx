
import { Shield, Target, Users, Award, TrendingUp, CheckCircle2, Linkedin, ArrowRight, BarChart3, Users2, Zap, Code, Cloud, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We provide honest advice and transparent communication in every engagement, building trust through accountability."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that future-proof your business."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We don't just consult—we partner with you for long-term success, becoming an extension of your team."
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=faces",
      bio: "15+ years leading digital transformation initiatives for Fortune 500 companies.",
      linkedin: "#"
    },
    {
      name: "David Chen",
      role: "Head of Cybersecurity",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=600&fit=crop&crop=faces",
      bio: "Former security architect with expertise in zero-trust architecture and compliance.",
      linkedin: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Cloud Solutions Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=faces",
      bio: "AWS and Azure certified architect specializing in scalable cloud infrastructure.",
      linkedin: "#"
    },
    {
      name: "Michael Thompson",
      role: "Business Strategy Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=faces",
      bio: "MBA with 12+ years bridging technology and business outcomes for sustained growth.",
      linkedin: "#"
    }
  ];

  const impactStats = [
    {
      metric: "Average ROI Increase",
      value: "284%",
      description: "Clients see significant returns within 12 months",
      trend: "+45%",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-600"
    },
    {
      metric: "Security Incidents Reduced",
      value: "92%",
      description: "Through comprehensive security implementations",
      trend: "-78%",
      icon: Shield,
      color: "from-blue-500 to-cyan-600"
    },
    {
      metric: "Infrastructure Efficiency",
      value: "67%",
      description: "Cost savings via cloud optimization strategies",
      trend: "+52%",
      icon: BarChart3,
      color: "from-violet-500 to-purple-600"
    },
    {
      metric: "Client Satisfaction",
      value: "98%",
      description: "Based on post-project surveys and retention",
      trend: "4.9/5",
      icon: Award,
      color: "from-amber-500 to-orange-600"
    }
  ];

  const caseHighlights = [
    {
      client: "Global E-Commerce Retailer",
      challenge: "Outdated infrastructure causing frequent downtime",
      solution: "Cloud migration and modernization strategy",
      results: [
        "99.99% uptime achieved",
        "40% reduction in operational costs",
        "3x faster page load times"
      ],
      icon: Cloud
    },
    {
      client: "Financial Services Firm",
      challenge: "Compliance gaps and security vulnerabilities",
      solution: "Zero-trust security architecture implementation",
      results: [
        "100% compliance achieved",
        "Zero security breaches in 2+ years",
        "Reduced audit time by 60%"
      ],
      icon: Lock
    },
    {
      client: "Healthcare Technology Startup",
      challenge: "Scaling infrastructure for rapid growth",
      solution: "Kubernetes-based microservices architecture",
      results: [
        "10x user capacity increase",
        "Reduced deployment time by 85%",
        "50% infrastructure cost savings"
      ],
      icon: Code
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Founded",
      description: "Started with a mission to democratize enterprise-grade IT consulting for businesses of all sizes."
    },
    {
      year: "2018",
      title: "Rapid Growth",
      description: "Expanded team to 50+ consultants and opened regional offices across North America."
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Named 'Top IT Consulting Firm' by TechReview and achieved multiple AWS/Azure competencies."
    },
    {
      year: "2024",
      title: "Global Impact",
      description: "Served 500+ clients worldwide with 98% satisfaction rate and $2B+ in client value generated."
    }
  ];

  const whyChooseUs = [
    "Industry-certified experts with proven track records",
    "Customized solutions tailored to your unique challenges",
    "Transparent communication and collaborative approach",
    "24/7 support with dedicated account management",
    "Focus on measurable ROI and business outcomes",
    "Flexible engagement models to fit your budget",
    "Cutting-edge technology partnerships and certifications",
    "Proven methodology backed by hundreds of success stories"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative pt-12 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden mt-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bTQgMHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-medium">Trusted by 500+ Businesses Worldwide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight px-4">
              Transforming Businesses Through Technology Excellence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto px-4">
              We're not just IT consultants—we're strategic partners dedicated to driving measurable business outcomes through innovative technology solutions and unwavering commitment to your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Proven Results That Speak for Themselves
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our track record of delivering measurable impact across hundreds of client engagements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-slate-50 to-white h-full">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 min-h-[2.5rem] flex items-center">{stat.metric}</div>
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 flex-grow">{stat.description}</p>
                    <div className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit">
                      <TrendingUp className="w-3 h-3" />
                      {stat.trend}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full mb-4">
                <Users2 className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-700 font-medium">Our Journey</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Built by Experts, Driven by Results
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2015 by a team of seasoned technology leaders from Fortune 500 backgrounds, TechConsult was born from a simple observation: businesses of all sizes deserve access to enterprise-grade IT consulting and strategic guidance.
                </p>
                <p>
                  What started as a boutique consulting practice has grown into a trusted partner for over 500 organizations worldwide. Our secret? We combine deep technical expertise with genuine business acumen, ensuring every solution we deliver drives tangible value for your bottom line.
                </p>
                <p>
                  Today, our diverse team of 50+ certified professionals brings together specialists in cloud architecture, cybersecurity, digital transformation, and business strategy—all united by a commitment to your success.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-slate-600">Clients Served</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$2B+</div>
                  <div className="text-sm text-slate-600">Client Value Generated</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                  alt="TechConsult team collaboration" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-2xl font-bold mb-2">Our Promise</div>
                  <p className="text-sm text-slate-200">Transparency, innovation, and measurable results in every engagement</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Evolution
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A decade of growth, innovation, and unwavering commitment to client success
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l-2 border-blue-200 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                <div className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                  <div className="text-xl font-semibold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide every decision, every project, and every partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all h-full bg-gradient-to-br from-white to-slate-50">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-200 rounded-full mb-4">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-700 font-medium">Meet the Team</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Led by Industry Veterans
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience from top technology firms and consulting practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden group">
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <a 
                        href={member.linkedin}
                        className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </a>
                    </div>
                  </div>
                  <CardContent className="pt-4 sm:pt-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                      {member.name}
                    </h3>
                    <div className="text-xs sm:text-sm text-blue-600 font-medium mb-2 sm:mb-3">
                      {member.role}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Impact Case Highlights */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Real Impact, Real Results
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              See how we've helped businesses like yours overcome challenges and achieve breakthrough results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-slate-700 bg-slate-800/50 backdrop-blur h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-lg font-bold text-white mb-2">{item.client}</div>
                    <div className="text-sm text-slate-400 mb-4">
                      <span className="font-semibold text-slate-300">Challenge:</span> {item.challenge}
                    </div>
                    <div className="text-sm text-slate-400 mb-4">
                      <span className="font-semibold text-slate-300">Solution:</span> {item.solution}
                    </div>
                    <div className="border-t border-slate-700 pt-4">
                      <div className="text-sm font-semibold text-cyan-400 mb-3">Key Results:</div>
                      <ul className="space-y-2">
                        {item.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              Explore All Case Studies
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Why Partner with TechConsult?
              </h2>
              <p className="text-lg text-slate-600">
                We combine expertise, transparency, and results-driven methodology to become your trusted technology partner
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Let's discuss how our proven methodology and expert team can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;