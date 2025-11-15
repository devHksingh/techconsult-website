import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  Calendar,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.phone && formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }
    if (!formData.subject || formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("Please fix the errors in the form", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = {
        access_key:
          import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        subject: formData.subject,
        message: formData.message,
        from_name: "TechConsult Website",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (data.success) {
        showToast(
          "Message sent successfully! We'll get back to you within 24 hours.",
          "success"
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showToast(
        "Failed to send message. Please try again or contact us directly via email.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const showToast = (message: string, type: "success" | "error") => {
    const toast = document.createElement("div");
    toast.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-xl transition-all duration-300 ${
      type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
    }`;
    toast.innerHTML = `
      <div class="flex items-center gap-3">
        ${
          type === "success"
            ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'
            : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'
        }
        <span>${message}</span>
      </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@techconsult.com",
      link: "mailto:info@techconsult.com",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "123 Business Ave, Tech City, TC 12345",
      link: "#",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      subContent: "Weekend: By appointment",
      link: "#",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+15551234567"; // Replace with your actual WhatsApp number
  const whatsappMessage =
    import.meta.env.VITE_WHATSAPP_MESSAGE ;
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  const benefits = [
    "Free 30-minute consultation",
    "Response within 24 hours",
    "No obligation quote",
    "Expert guidance and support",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bTQgMHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-medium">
                Let's Connect
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight px-4">
              Get In Touch With Our Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto px-4">
              Ready to transform your business? Let's discuss how our IT
              consulting services can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="h-full"
              >
                <Card className="border-slate-200 shadow-xl h-full flex flex-col">
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-2xl sm:text-3xl text-slate-900">
                      Send Us a Message
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-slate-600">
                      Fill out the form below and we'll respond within one
                      business day
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-6 flex-1 flex flex-col">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-slate-700 font-medium"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`${
                              errors.name
                                ? "border-red-500"
                                : "border-slate-300"
                            } focus:border-blue-500 focus:ring-blue-500`}
                            disabled={isSubmitting}
                          />
                          {errors.name && (
                            <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-slate-700 font-medium"
                          >
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className={`${
                              errors.email
                                ? "border-red-500"
                                : "border-slate-300"
                            } focus:border-blue-500 focus:ring-blue-500`}
                            disabled={isSubmitting}
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-slate-700 font-medium"
                          >
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                            disabled={isSubmitting}
                          />
                          {errors.phone && (
                            <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="company"
                            className="text-slate-700 font-medium"
                          >
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company Inc."
                            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="subject"
                          className="text-slate-700 font-medium"
                        >
                          Subject <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          className={`${
                            errors.subject
                              ? "border-red-500"
                              : "border-slate-300"
                          } focus:border-blue-500 focus:ring-blue-500`}
                          disabled={isSubmitting}
                        />
                        {errors.subject && (
                          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2 flex-1 flex flex-col">
                        <Label
                          htmlFor="message"
                          className="text-slate-700 font-medium"
                        >
                          Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or questions..."
                          className={`${
                            errors.message
                              ? "border-red-500"
                              : "border-slate-300"
                          } focus:border-blue-500 focus:ring-blue-500 resize-none flex-1 min-h-[150px]`}
                          disabled={isSubmitting}
                        />
                        {errors.message && (
                          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        onClick={handleSubmit}
                        size="lg"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-slate-700 text-center">
                          <CheckCircle2 className="w-4 h-4 inline mr-1 text-blue-600" />
                          We respond within 24 hours and value your privacy
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Information Sidebar - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        >
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-slate-900 mb-1">
                            {info.title}
                          </p>
                          {info.link && info.link !== "#" ? (
                            <a
                              href={info.link}
                              className="text-sm text-slate-600 hover:text-blue-600 transition-colors break-words"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-sm text-slate-600 break-words">
                              {info.content}
                            </p>
                          )}
                          {info.subContent && (
                            <p className="text-sm text-slate-500 mt-1">
                              {info.subContent}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* WhatsApp Card */}
                <Card className="border-none bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all">
                  <CardContent className="pt-6">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white mb-1">
                          WhatsApp
                        </p>
                        <p className="text-sm text-green-50">
                          Chat with us instantly
                        </p>
                        <p className="text-xs text-green-100 mt-2">
                          Click to start conversation →
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Free Consultation Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-none bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-xl">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">
                      Free Consultation
                    </CardTitle>
                    <CardDescription className="text-blue-50">
                      Get expert advice at no cost
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-blue-50"
                        >
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg"
                      size="lg"
                    >
                      Schedule Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Prefer to Talk Directly?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8">
              Our team is available for a quick call to discuss your needs and
              explore how we can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15551234567">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </a>
              <a href="mailto:info@techconsult.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
