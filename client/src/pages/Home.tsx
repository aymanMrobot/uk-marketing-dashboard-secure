import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, BarChart3, MessageSquare, Sparkles, Search, TrendingUp, Clock, Target, Lightbulb, CheckCircle2, LogOut } from "lucide-react";

interface Project {
  id: string;
  name: string;
  icon: React.ReactNode;
  metric: string;
  goal: string;
  hypothesis: string;
  result: string;
  status: "testing" | "deployed" | "measuring";
  progress: number;
  timeline: string;
  keyMetrics: { label: string; value: string; change?: string }[];
}

const projects: Project[] = [
  {
    id: "support-chatbot",
    name: "VenturEd Support Chatbot",
    icon: <MessageSquare className="h-5 w-5" />,
    metric: "Reduce average support ticket response time by 35% and deflect 25% of routine enquiries to self-service by end of Q1",
    goal: "35% faster responses, 25% deflection rate",
    hypothesis: "Implementing an AI-first support chatbot that handles common queries about VenturEd products will allow our support team to focus on complex issues whilst providing instant responses to customers for frequently asked questions, resulting in faster resolution times and improved customer satisfaction.",
    result: "To be measured: baseline response time vs after 3 months of deployment",
    status: "testing",
    progress: 65,
    timeline: "Q1 2025",
    keyMetrics: [
      { label: "Response Time Target", value: "35% reduction" },
      { label: "Deflection Target", value: "25% of queries" },
      { label: "Timeline", value: "3 months" }
    ]
  },
  {
    id: "sales-simulator",
    name: "AI Personas Sales Simulator",
    icon: <Bot className="h-5 w-5" />,
    metric: "Reduce new sales hire ramp-up time by 20% and increase pitch confidence scores by 30% within first 6 weeks of onboarding",
    goal: "20% faster ramp-up, 30% confidence boost",
    hypothesis: "Providing new sales team members with on-demand AI voice simulations of real buyer personas will allow them to practice pitch scenarios repeatedly in a safe environment, accelerating their readiness and confidence compared to traditional shadowing and occasional roleplay sessions.",
    result: "To be measured: comparing ramp-up time and confidence surveys for next cohort vs historical average",
    status: "deployed",
    progress: 85,
    timeline: "6 weeks per cohort",
    keyMetrics: [
      { label: "Ramp-up Reduction", value: "20% target" },
      { label: "Confidence Increase", value: "30% target" },
      { label: "Onboarding Period", value: "6 weeks" }
    ]
  },
  {
    id: "salesforce-dashboards",
    name: "Salesforce Dashboards (n8n)",
    icon: <BarChart3 className="h-5 w-5" />,
    metric: "Eliminate 5 hours per week of manual reporting work and provide real-time pipeline visibility to leadership within 48 hours of deployment",
    goal: "5 hours/week saved, real-time visibility",
    hypothesis: "Automating our Salesforce data extraction and dashboard updates through n8n workflows will remove the need for weekly manual spreadsheet compilation, giving the marketing and sales teams instant access to MQL, SQL, and pipeline metrics without waiting for Friday reports.",
    result: "To be measured: time saved per week and dashboard adoption rate after 1 month",
    status: "deployed",
    progress: 90,
    timeline: "48 hours to deploy",
    keyMetrics: [
      { label: "Time Saved", value: "5 hours/week" },
      { label: "Deployment Time", value: "48 hours" },
      { label: "Update Frequency", value: "Real-time" }
    ]
  },
  {
    id: "eden-ai",
    name: "Eden AI Content Model",
    icon: <Sparkles className="h-5 w-5" />,
    metric: "Reduce content creation time by 25% and increase content output by 40% whilst maintaining brand compliance across all marketing materials",
    goal: "25% faster creation, 40% more output",
    hypothesis: "Deploying an AI content creation platform trained on VenturEd's brand guidelines and approved messaging will enable the marketing team to generate first drafts faster, iterate more quickly, and produce more content without sacrificing quality or brand consistency.",
    result: "To be measured: content pieces published per month and average time per piece, baseline vs after 2 months",
    status: "measuring",
    progress: 70,
    timeline: "2 months measurement",
    keyMetrics: [
      { label: "Time Reduction", value: "25% target" },
      { label: "Output Increase", value: "40% target" },
      { label: "Brand Compliance", value: "Maintained" }
    ]
  },
  {
    id: "seo-audit",
    name: "SEO Audit Dashboard",
    icon: <Search className="h-5 w-5" />,
    metric: "Reduce SEO audit reporting time by 80% and identify technical issues 3x faster across the VenturEd website portfolio",
    goal: "80% time reduction, 3x faster detection",
    hypothesis: "Creating an automated SEO audit dashboard that continuously monitors our 10 VenturEd websites will replace monthly manual audits, surfacing performance issues, accessibility gaps, and best practice violations in real-time so the team can act immediately rather than waiting for quarterly reviews.",
    result: "To be measured: audit cycle time and issue resolution speed, baseline vs after 1 quarter",
    status: "deployed",
    progress: 95,
    timeline: "Quarterly review",
    keyMetrics: [
      { label: "Time Reduction", value: "80% target" },
      { label: "Detection Speed", value: "3x faster" },
      { label: "Websites Monitored", value: "10 sites" }
    ]
  }
];

const statusConfig = {
  testing: { label: "Testing", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
  deployed: { label: "Deployed", color: "bg-green-500/10 text-green-500 border-green-500/20" },
  measuring: { label: "Measuring", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" }
};

export default function Home() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/ventured-logo.png" alt="VenturEd Solutions" className="h-10 w-auto" />
              <div className="h-8 w-px bg-border" />
              <div>
                <h1 className="text-xl font-bold text-foreground">UK Marketing AI Dashboard</h1>
                <p className="text-sm text-muted-foreground">Innovation Tracking & Metrics</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-xs font-mono">
                FOR INTERNAL USE ONLY
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-card/30 to-background">
        <div className="container py-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Building Value Through Practical AI Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tracking our AI innovation initiatives across UK Marketing, guided by clear KPIs, 
              incremental delivery, simple solutions, and value-driven outcomes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">{projects.length}</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">
                  {projects.filter(p => p.status === "deployed").length}
                </div>
                <div className="text-sm text-muted-foreground">Deployed</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">
                  {Math.round(projects.reduce((acc, p) => acc + p.progress, 0) / projects.length)}%
                </div>
                <div className="text-sm text-muted-foreground">Avg Progress</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">Q1</div>
                <div className="text-sm text-muted-foreground">Target Quarter</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="bg-card border border-border">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="metrics">Detailed Metrics</TabsTrigger>
              <TabsTrigger value="principles">Our Principles</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="border-border bg-card hover:bg-card/80 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                            {project.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-xl">{project.name}</CardTitle>
                              <Badge 
                                variant="outline" 
                                className={statusConfig[project.status].color}
                              >
                                {statusConfig[project.status].label}
                              </Badge>
                            </div>
                            <CardDescription className="text-base">
                              {project.metric}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{project.progress}%</div>
                          <div className="text-xs text-muted-foreground">Progress</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Progress value={project.progress} className="h-2" />
                      
                      <div className="grid md:grid-cols-3 gap-4 pt-2">
                        {project.keyMetrics.map((metric, idx) => (
                          <div key={idx} className="bg-secondary/50 rounded-lg p-3">
                            <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                            <div className="text-sm font-semibold text-foreground">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="metrics" className="space-y-6">
              {projects.map((project) => (
                <Card key={project.id} className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {project.icon}
                      </div>
                      <CardTitle className="text-2xl">{project.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Outcome Metric & Goal</h4>
                          <p className="text-muted-foreground">{project.metric}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Hypothesis</h4>
                          <p className="text-muted-foreground">{project.hypothesis}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Result</h4>
                          <p className="text-muted-foreground">{project.result}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Timeline</h4>
                          <p className="text-muted-foreground">{project.timeline}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">Implementation Progress</span>
                        <span className="text-sm font-bold text-primary">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="principles" className="space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Four Principles for AI Innovation</CardTitle>
                  <CardDescription>
                    The guiding framework that shapes every AI initiative at VenturEd Solutions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3 p-6 bg-secondary/30 rounded-lg border border-border">
                      <div className="flex items-center gap-2">
                        <Target className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-bold text-foreground">Define Your Outcome Metric</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Begin with a clear KPI you want to improve. Every project starts with measurable goals 
                        that tie directly to business outcomes.
                      </p>
                    </div>

                    <div className="space-y-3 p-6 bg-secondary/30 rounded-lg border border-border">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-bold text-foreground">Start Small, Deliver Small</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Choose a specific task or part of a process, not an entire feature-rich solution. 
                        Incremental progress beats ambitious failures.
                      </p>
                    </div>

                    <div className="space-y-3 p-6 bg-secondary/30 rounded-lg border border-border">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-bold text-foreground">Don't Overcomplicate Solutions</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Begin with the simplest workable approach. Add complexity only when evidence 
                        or roadblocks demand it.
                      </p>
                    </div>

                    <div className="space-y-3 p-6 bg-secondary/30 rounded-lg border border-border">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-bold text-foreground">Value Over Novelty</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Prioritise improvements to workflows, not clever tech for its own sake. 
                        Real impact matters more than impressive technology.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Bot className="h-5 w-5 text-primary" />
                      How We Apply These Principles
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Each of our five AI initiatives demonstrates these principles in action. From the Support Chatbot 
                      targeting specific response time metrics, to the Sales Simulator focusing on one aspect of onboarding, 
                      to the SEO Dashboard automating a well-defined manual process—we build with purpose, simplicity, and measurable value.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      "Focus on value, simplicity, and measurable outcomes to deliver meaningful impact." 
                      — UK Marketing Team
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-12">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/ventured-logo.png" alt="VenturEd Solutions" className="h-8 w-auto" />
              <div className="text-sm text-muted-foreground">
                © 2025 VenturEd Solutions. All rights reserved.
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Created by Aymane El Magri · UK Marketing Team
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
