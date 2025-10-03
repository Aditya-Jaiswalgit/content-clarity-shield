import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";

const Attribution = () => {
  const [content, setContent] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => {
      const models = [
        { name: "GPT-4", probability: Math.random() * 100 },
        { name: "Claude", probability: Math.random() * 100 },
        { name: "LLaMA", probability: Math.random() * 100 },
        { name: "PaLM", probability: Math.random() * 100 },
      ].sort((a, b) => b.probability - a.probability);

      setResult({
        watermarkDetected: Math.random() > 0.5,
        models,
        topModel: models[0],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">Content Attribution</h1>
          <p className="text-muted-foreground mb-8">
            Identify the source model family and check for digital watermarking signatures.
          </p>

          <Card className="p-6 mb-8">
            <Textarea
              placeholder="Paste content for attribution analysis..."
              className="min-h-[200px] mb-4 bg-background"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button 
              onClick={handleAnalyze} 
              disabled={!content || loading}
              className="w-full md:w-auto"
            >
              {loading ? "Analyzing..." : "Analyze Attribution"}
            </Button>
          </Card>

          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Watermark Detection</h3>
                <div className="flex items-center gap-3">
                  {result.watermarkDetected ? (
                    <>
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                      <span className="text-lg">Digital watermark detected</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-6 h-6 text-muted-foreground" />
                      <span className="text-lg">No watermark detected</span>
                    </>
                  )}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Model Attribution Probability</h3>
                <div className="space-y-4">
                  {result.models.map((model, index) => (
                    <motion.div
                      key={model.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <span className="w-24 font-medium">{model.name}</span>
                      <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${model.probability}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                      </div>
                      <span className="w-16 text-right font-semibold">
                        {model.probability.toFixed(1)}%
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Most likely source: <Badge variant="secondary" className="ml-2">{result.topModel.name}</Badge>
                  </p>
                </div>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Attribution;
