import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Search, Target, BarChart3, FileText } from "lucide-react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "AI Detection",
      description: "Identify AI-generated content with advanced machine learning algorithms.",
      link: "/detection",
    },
    {
      icon: Target,
      title: "Attribution",
      description: "Determine the source model and watermarking signatures.",
      link: "/attribution",
    },
    {
      icon: BarChart3,
      title: "Threat Dashboard",
      description: "Monitor disinformation spread and content risks in real-time.",
      link: "/dashboard",
    },
    {
      icon: FileText,
      title: "Compliance",
      description: "GDPR and CCPA compliant with full transparency and explainability.",
      link: "/compliance",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Content Risk Monitor
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Detect, Attribute, and Monitor AI-Generated Content in Real Time
          </p>

          <div className="flex gap-4 justify-center">
            <Link to="/detection">
              <Button size="lg" className="text-base">
                Start Detection
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="text-base">
                View Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link to={feature.link}>
                <Card className="p-6 h-full hover:border-primary/50 transition-colors cursor-pointer group">
                  <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
