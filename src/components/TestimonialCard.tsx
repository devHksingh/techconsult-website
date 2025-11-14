import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, company, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="bg-gradient-card border-border">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed italic">"{content}"</p>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
