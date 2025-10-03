import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const Compliance = () => {
  const features = [
    {
      icon: Lock,
      title: "Data Anonymization",
      description: "All submitted content is processed with end-to-end encryption. Personal identifiers are automatically stripped before analysis.",
    },
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Full compliance with General Data Protection Regulation. Users maintain control over their data with clear consent mechanisms.",
    },
    {
      icon: Eye,
      title: "CCPA Compliant",
      description: "California Consumer Privacy Act adherence with transparent data collection practices and opt-out capabilities.",
    },
    {
      icon: FileText,
      title: "Audit Logs",
      description: "Comprehensive logging of all analysis operations for accountability and regulatory compliance verification.",
    },
  ];

  const explainabilityFeatures = [
    { feature: "Word Choice Patterns", weight: 32 },
    { feature: "Sentence Structure", weight: 28 },
    { feature: "Repetition Metrics", weight: 18 },
    { feature: "Syntactic Complexity", weight: 15 },
    { feature: "Semantic Coherence", weight: 7 },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">Privacy & Compliance</h1>
          <p className="text-muted-foreground text-lg mb-12">
            Our commitment to data protection, transparency, and regulatory compliance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Processing</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                All content submitted for analysis is processed in secure, isolated environments. 
                We employ industry-standard encryption protocols (AES-256) for data at rest and TLS 1.3 for data in transit.
              </p>
              <p>
                User data is never stored longer than necessary for analysis completion. 
                Retention periods comply with applicable regulations, with automatic deletion after 90 days unless explicitly requested otherwise.
              </p>
              <p>
                Our systems undergo regular third-party security audits and penetration testing to ensure 
                the highest standards of data protection and privacy.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Explainability</h2>
            <p className="text-muted-foreground mb-6">
              Our AI detection models provide transparent insights into decision-making. 
              Below are the top contributing features in our analysis:
            </p>

            <div className="space-y-4">
              {explainabilityFeatures.map((item, index) => (
                <motion.div
                  key={item.feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.feature}</span>
                    <span className="text-muted-foreground">{item.weight}% weight</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.weight}%` }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Feature weights may vary based on content type and model version. 
              For detailed methodology, see our technical documentation.
            </p>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Compliance;
