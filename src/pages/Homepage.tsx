/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Cloud, Network, Lightbulb, CheckCircle2, Users, Award, TrendingUp, Star, Calendar, User, BookOpen, ChevronRight } from 'lucide-react';
import { Spotlight } from '@/components/ui/spotlight-new';
// import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

// Professional color scheme
// const colors = {
//   primary: '#0F172A',
//   secondary: '#3B82F6',
//   accent: '#06B6D4',
// };

const HeroHighlight = ({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) => {
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);

  const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; clientY: number; }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  return (
    <div
      className={`group relative flex min-h-screen w-full items-center justify-center bg-slate-950 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
        }}
      />
      
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%233B82F6' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
          WebkitMaskImage: `radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
        }}
      />
      
      <div className="relative z-20 w-full max-w-full overflow-hidden">{children}</div>
    </div>
  );
};

const Highlight: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 2, ease: "linear", delay: 0.5 }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline-block",
      }}
      className="relative rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 px-3 py-1 mx-1"
    >
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
};

const Homepage = () => {
  const services = [
    {
      icon: Network,
      title: "IT Infrastructure Assessment",
      description: "Comprehensive evaluation of your IT systems to identify vulnerabilities, optimize performance, and create strategic roadmaps for technology modernization."
    },
    {
      icon: Shield,
      title: "Cybersecurity Consulting",
      description: "Enterprise-grade security solutions including threat assessment, compliance auditing, and implementation of robust defense mechanisms to protect your digital assets."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & Migration",
      description: "Seamless cloud adoption strategies with AWS, Azure, and Google Cloud. We ensure minimal downtime, cost optimization, and enhanced scalability."
    },
    {
      icon: Lightbulb,
      title: "Digital Transformation",
      description: "Strategic consulting to modernize operations, automate workflows, and leverage cutting-edge technologies for sustainable competitive advantage."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Inc",
      content: "TechConsult transformed our entire IT infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving performance significantly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "GlobalSoft",
      content: "The cybersecurity audit revealed critical vulnerabilities we weren't aware of. Their proactive approach and expert guidance prevented potential breaches.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "InnovateLabs",
      content: "Their digital transformation strategy modernized our operations completely. We've seen a 60% improvement in team efficiency and customer satisfaction.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: TrendingUp, value: "40%", label: "Avg Cost Reduction" },
    { icon: CheckCircle2, value: "24/7", label: "Support Available" }
  ];

  const blogPosts = [
    {
      title: "The Future of Cloud Computing in Enterprise",
      excerpt: "Explore emerging trends in cloud technology and how businesses can leverage them for competitive advantage in 2025.",
      date: "Nov 10, 2024",
      author: "John Smith",
      category: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
      readTime: "5 min read"
    },
    {
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential security measures every organization should implement to protect against evolving cyber threats.",
      date: "Nov 8, 2024",
      author: "Sarah Williams",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
      readTime: "7 min read"
    },
    {
      title: "Digital Transformation: A Strategic Guide",
      excerpt: "Learn how to successfully navigate digital transformation with proven strategies and real-world case studies.",
      date: "Nov 5, 2024",
      author: "Mike Johnson",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative  w-full overflow-hidden">
        <HeroHighlight className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
          <Spotlight />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-4 break-words max-w-full">
                Empowering Business Through
                <br className="hidden sm:block" />
                <span className="inline-block mt-2 sm:mt-3 max-w-full">
                  <Highlight>Expert IT Solutions</Highlight>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                Transform your technology infrastructure with strategic consulting, 
                cybersecurity expertise, and innovative cloud solutions.
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2 sm:px-4 w-full max-w-full">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full sm:w-auto max-w-full overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-[2px] shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
                >
                  <div className="relative rounded-full bg-slate-950 px-4 sm:px-6 md:px-8 py-3 sm:py-4 w-full">
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">
                      <span className="hidden sm:inline">Request Free Consultation</span>
                      <span className="sm:hidden">Free Consultation</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 -z-10"
                    animate={{
                      background: [
                        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.a>
                
                <a
                  href="/services"
                  className="w-full sm:w-auto max-w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold text-white border-2 border-slate-600 hover:border-blue-500 hover:bg-slate-800/50 transition-all duration-300 text-xs sm:text-sm md:text-base backdrop-blur-sm text-center whitespace-nowrap"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto px-2 sm:px-4 w-full"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-2 sm:mb-3 mx-auto" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </HeroHighlight>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Comprehensive IT Consulting Services
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Enterprise-grade solutions tailored to your unique business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-3 sm:mb-4 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              View All Services
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-100 w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Trusted by Forward-Thinking Organizations
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                We've helped hundreds of companies modernize their IT infrastructure, 
                enhance security, and drive digital transformation. Our proven methodologies 
                and expert team ensure your technology investments deliver measurable results.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { title: "Proven Expertise", desc: "15+ years of industry experience" },
                  { title: "Certified Professionals", desc: "AWS, Azure, and security certified team" },
                  { title: "24/7 Support", desc: "Round-the-clock monitoring and assistance" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-slate-600 text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Professional IT consulting team collaborating"
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-blue-600 text-white p-4 sm:p-6 rounded-xl shadow-xl">
                <div className="text-2xl sm:text-3xl font-bold mb-1">500+</div>
                <div className="text-xs sm:text-sm">Projects Delivered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Real results from real clients who transformed their business with our expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Latest Insights & Resources
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Stay informed with expert analysis, industry trends, and practical guides
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-400" />
                      <span className="text-xs sm:text-sm text-slate-600">{post.author}</span>
                    </div>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              View All Articles
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden w-full">
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23FFFFFF' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our expert consulting services can accelerate your digital transformation 
              and drive measurable business results.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Schedule a Free Consultation
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;