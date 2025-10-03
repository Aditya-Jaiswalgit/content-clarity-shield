import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, TrendingUp, Activity, Shield } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Threats Detected", value: "1,247", icon: AlertTriangle, change: "+12%" },
    { label: "Content Analyzed", value: "45.2K", icon: Activity, change: "+8%" },
    { label: "High Risk Items", value: "89", icon: TrendingUp, change: "+3%" },
    { label: "Active Monitors", value: "24", icon: Shield, change: "0%" },
  ];

  const threats = [
    { id: 1, source: "twitter.com/user123", timestamp: "2024-01-15 14:32", confidence: 94, type: "Disinformation" },
    { id: 2, source: "news-site.com/article", timestamp: "2024-01-15 13:18", confidence: 87, type: "Synthetic Content" },
    { id: 3, source: "blog.example.com", timestamp: "2024-01-15 11:45", confidence: 76, type: "AI-Generated" },
    { id: 4, source: "forum.tech/post/456", timestamp: "2024-01-15 10:22", confidence: 92, type: "Disinformation" },
    { id: 5, source: "social.net/status/789", timestamp: "2024-01-15 09:10", confidence: 81, type: "Manipulated Media" },
  ];

  const heatmapData = [
    [20, 45, 67, 89, 92, 78, 65],
    [34, 56, 78, 91, 85, 70, 48],
    [45, 67, 85, 94, 88, 72, 55],
    [28, 50, 72, 86, 90, 75, 60],
    [15, 38, 60, 82, 87, 68, 42],
  ];

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return "text-destructive";
    if (confidence >= 75) return "text-primary";
    return "text-muted-foreground";
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-8">Threat Monitoring Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-muted-foreground" />
                    <span className={`text-sm font-medium ${stat.change.startsWith("+") ? "text-accent" : "text-muted-foreground"}`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Disinformation Spread Heatmap</h3>
              <div className="grid grid-cols-7 gap-2">
                {heatmapData.map((row, i) => (
                  row.map((value, j) => (
                    <div
                      key={`${i}-${j}`}
                      className="aspect-square rounded"
                      style={{
                        backgroundColor: `hsl(var(--primary) / ${value / 100})`,
                      }}
                      title={`Intensity: ${value}`}
                    />
                  ))
                ))}
              </div>
              <div className="flex justify-between mt-4 text-sm text-muted-foreground">
                <span>Low Activity</span>
                <span>High Activity</span>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Threat Distribution</h3>
              <div className="space-y-4">
                {["Disinformation", "Synthetic Content", "AI-Generated", "Manipulated Media"].map((type, index) => (
                  <div key={type} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{type}</span>
                      <span className="font-medium">{Math.floor(Math.random() * 40 + 20)}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.floor(Math.random() * 40 + 20)}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Threat Detections</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Source</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Confidence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {threats.map((threat) => (
                  <TableRow key={threat.id}>
                    <TableCell className="font-mono text-sm">{threat.source}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{threat.timestamp}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{threat.type}</Badge>
                    </TableCell>
                    <TableCell className={`font-semibold ${getConfidenceColor(threat.confidence)}`}>
                      {threat.confidence}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
