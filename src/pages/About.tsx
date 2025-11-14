import { Shield, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We provide honest advice and transparent communication in every engagement"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions"
    },
    {
      icon: Users,
      title: "Results",
      description: "We focus on measurable outcomes that drive real business value"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About TechConsult
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              A dedicated team of IT consultants helping businesses thrive in a rapidly evolving digital landscape
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We are a dedicated team of IT consultants helping businesses thrive in a rapidly 
                  evolving digital landscape. With years of industry experience, our mission is to 
                  provide honest advice and actionable strategies customized to your specific needs.
                </p>
                <p>
                  Our team brings together experts from diverse backgrounds in technology, business 
                  strategy, and digital transformation. We understand that every business faces unique 
                  challenges, and we pride ourselves on delivering tailored solutions that address 
                  your specific requirements.
                </p>
                <p>
                  From startups to enterprise organizations, we've helped companies across industries 
                  modernize their IT infrastructure, strengthen their security posture, and embrace 
                  digital innovation to stay competitive.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-large">
              <img 
                src={aboutTeamImage} 
                alt="TechConsult team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integrity, innovation, and measurable results define our approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Choose TechConsult?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Trusted by clients across industries for delivering practical solutions and ongoing support. 
              We don't just consult – we partner with you for long-term success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-muted-foreground">Industry-certified experts with proven track records</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-muted-foreground">Customized solutions tailored to your business</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-muted-foreground">Transparent communication throughout the process</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-muted-foreground">Ongoing support and strategic partnership</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-muted-foreground">Focus on measurable ROI and business outcomes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-muted-foreground">Flexible engagement models to fit your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
