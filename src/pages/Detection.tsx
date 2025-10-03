import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import CircularProgress from "../components/CircularProgress";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Detection = () => {
  const [content, setContent] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDetect = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockScore = Math.floor(Math.random() * 100);
      const mockData = [
        { feature: "Sentence Length", value: Math.random() * 100 },
        { feature: "Word Frequency", value: Math.random() * 100 },
        { feature: "Repetition", value: Math.random() * 100 },
        { feature: "Complexity", value: Math.random() * 100 },
        { feature: "Coherence", value: Math.random() * 100 },
      ];

      setResult({
        score: mockScore,
        explanation: mockScore > 70 
          ? "High likelihood of LLM-generated text. Multiple stylometric markers detected."
          : mockScore > 40
          ? "Moderate AI probability. Some patterns suggest automated generation."
          : "Low AI likelihood. Content appears human-written.",
        features: mockData,
      });
      setLoading(false);
    }, 2000);
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
          <h1 className="text-4xl font-bold mb-4">AI-Generated Content Detection</h1>
          <p className="text-muted-foreground mb-8">
            Paste content below to analyze for AI-generated patterns and risk indicators.
          </p>

          <Card className="p-6 mb-8">
            <Textarea
              placeholder="Paste content here for analysis..."
              className="min-h-[200px] mb-4 bg-background"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button 
              onClick={handleDetect} 
              disabled={!content || loading}
              className="w-full md:w-auto"
            >
              {loading ? "Analyzing..." : "Detect"}
            </Button>
          </Card>

          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-8 mb-6">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <CircularProgress score={result.score} />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Analysis Result</h3>
                    <p className="text-muted-foreground">{result.explanation}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Stylometric Feature Breakdown</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={result.features}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="feature" 
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Detection;
