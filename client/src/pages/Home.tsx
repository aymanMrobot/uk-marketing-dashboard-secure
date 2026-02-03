import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, BarChart3, MessageSquare, Sparkles, Search, TrendingUp, Clock, Target, Lightbulb, CheckCircle2, Calendar, Database, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

interface Project {
  id: string;
  name: string;
  icon: React.ReactNode;
  metric: string;
  goal: string;
  hypothesis: string;
  result: string;
  status: "testing" | "deployed" | "measuring" | "planned" | "in-progress";
  progress: number;
  timeline: string;
  keyMetrics: { label: string; value: string; change?: string }[];
}

const projects: Project[] = [
  {
    id: "support-chatbot",
    name: "VenturEd Support Chatbot",
    icon: <MessageSquare className="h-5 w-5" />,
    metric: "Reduce average support ticket response time by 35%",
    goal: "Deflect 25% of inbound support volume",
    hypothesis: "Deploying an AI support chatbot for instant query resolution will dramatically improve team efficiency and customer satisfaction.",
    result: "Deployed and undergoing testing",
    status: "testing",
    progress: 90,
    timeline: "Q1 2026",
    keyMetrics: [
      { label: "Response Time", value: "-35%" },
      { label: "Deflection Rate", value: "25%" },
      { label: "Status", value: "Testing" }
    ]
  },
  {
    id: "sales-simulator",
    name: "AI Personas Sales Simulator",
    icon: <Bot className="h-5 w-5" />,
    metric: "Reduce new sales hire ramp-up time by 20%",
    goal: "Increase pitch confidence by 30%",
    hypothesis: "On-demand AI voice simulators for pitch practice will significantly improve sales readiness compared to manual roleplay.",
    result: "Successfully running with positive feedback",
    status: "deployed",
    progress: 100,
    timeline: "Deployed",
    keyMetrics: [
      { label: "Ramp-up Time", value: "-20%" },
      { label: "Confidence", value: "+30%" },
      { label: "Adoption", value: "High" }
    ]
  },
  {
    id: "salesforce-dashboards",
    name: "Salesforce Dashboards (n8n)",
    icon: <BarChart3 className="h-5 w-5" />,
    metric: "Save 5 hours per week in manual reporting",
    goal: "Real-time visibility into pipeline health",
    hypothesis: "Automated dashboards eliminate manual data entry and provide instant metrics for better decision making.",
    result: "Live and eliminating manual entry",
    status: "deployed",
    progress: 100,
    timeline: "Deployed",
    keyMetrics: [
      { label: "Time Saved", value: "5h/week" },
      { label: "Data Latency", value: "Real-time" },
      { label: "Accuracy", value: "100%" }
    ]
  },
  {
    id: "eden-content",
    name: "Eden AI Content Model",
    icon: <Sparkles className="h-5 w-5" />,
    metric: "Reduce content creation time by 25%",
    goal: "Increase content output by 40%",
    hypothesis: "A custom AI model trained on our brand voice will accelerate content production while ensuring 100% brand compliance.",
    result: "In active use by marketing team",
    status: "deployed",
    progress: 100,
    timeline: "Deployed",
    keyMetrics: [
      { label: "Creation Time", value: "-25%" },
      { label: "Output Volume", value: "+40%" },
      { label: "Compliance", value: "100%" }
    ]
  },
  {
    id: "seo-audit",
    name: "SEO Audit Dashboard",
    icon: <Search className="h-5 w-5" />,
    metric: "Reduce audit time by 80%",
    goal: "Detect SEO issues 3x faster",
    hypothesis: "Automated daily crawling and scoring of all 10 websites will catch issues immediately vs monthly manual checks.",
    result: "Monitoring 10 websites daily",
    status: "measuring",
    progress: 100,
    timeline: "Deployed",
    keyMetrics: [
      { label: "Audit Time", value: "-80%" },
      { label: "Detection", value: "3x Faster" },
      { label: "Sites Monitored", value: "10" }
    ]
  },
  {
    id: "lead-assignment",
    name: "Lead Assignment Automation",
    icon: <GitBranch className="h-5 w-5" />,
    metric: "Instant lead allocation via Salesforce & n8n automation",
    goal: "Zero manual routing, instant response",
    hypothesis: "Automated routing reduces lead response time and prevents leakage by ensuring every lead is assigned to the right rep instantly.",
    result: "Currently in Sandbox testing phase",
    status: "testing",
    progress: 90,
    timeline: "Jan 19 - Feb 6, 2026",
    keyMetrics: [
      { label: "Allocation Speed", value: "Instant" },
      { label: "Manual Work", value: "Eliminated" },
      { label: "Status", value: "Sandbox Testing" }
    ]
  },
  {
    id: "auto-demo",
    name: "Auto Demo Booking",
    icon: <Calendar className="h-5 w-5" />,
    metric: "Zero-touch booking after lead submission",
    goal: "Instant booking, higher conversion",
    hypothesis: "Instant booking automation via HubSpot, Lead Portal & Salesforce immediately after lead submission will significantly increase conversion rates.",
    result: "Project just starting",
    status: "in-progress",
    progress: 15,
    timeline: "Feb 17 - Feb 23, 2026",
    keyMetrics: [
      { label: "Booking Speed", value: "Instant" },
      { label: "Integration", value: "HubSpot/SF" },
      { label: "Status", value: "Starting" }
    ]
  },
  {
    id: "kpi-dashboard",
    name: "Weekly KPI Dashboard",
    icon: <TrendingUp className="h-5 w-5" />,
    metric: "Unified tracking for Finance, Sales, Marketing & CSM",
    goal: "Cross-departmental alignment",
    hypothesis: "A unified view of KPIs across four departments improves alignment and enables faster data-driven decision making.",
    result: "80% complete",
    status: "in-progress",
    progress: 80,
    timeline: "Feb 3 - Feb 16, 2026",
    keyMetrics: [
      { label: "Departments", value: "4 Tracked" },
      { label: "Completion", value: "80%" },
      { label: "Target Finish", value: "Feb 16" }
    ]
  },
  {
    id: "lead-enrichment",
    name: "Lead Enrichment Replication",
    icon: <Database className="h-5 w-5" />,
    metric: "Replicate US lead enrichment for UK Salesforce",
    goal: "Data parity with US operations",
    hypothesis: "Enriched data improves lead scoring and sales targeting accuracy, matching the capabilities of our US operations.",
    result: "Scheduled to start soon",
    status: "planned",
    progress: 0,
    timeline: "Feb 24 - Mar 16, 2026",
    keyMetrics: [
      { label: "Scope", value: "US to UK" },
      { label: "Start Date", value: "Feb 24" },
      { label: "Duration", value: "3 Weeks" }
    ]
  }
];

const statusConfig = {
  testing: { label: "Testing", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
  deployed: { label: "Deployed", color: "bg-green-500/10 text-green-500 border-green-500/20" },
  measuring: { label: "Measuring", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  planned: { label: "Planned", color: "bg-gray-500/10 text-gray-500 border-gray-500/20" },
  "in-progress": { label: "In Progress", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" }
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
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-xs font-mono hidden sm:inline-flex">
                FOR INTERNAL USE ONLY
              </Badge>
              <Button variant="ghost" size="sm" onClick={logout}>
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
                            <div className="font-medium text-sm">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="metrics" className="space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Project Metrics & Hypotheses</CardTitle>
                  <CardDescription>Detailed breakdown of goals and expected outcomes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border border-border">
                    <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-muted/50 font-medium text-sm">
                      <div className="col-span-3">Project</div>
                      <div className="col-span-3">Goal</div>
                      <div className="col-span-4">Hypothesis</div>
                      <div className="col-span-2">Timeline</div>
                    </div>
                    {projects.map((project) => (
                      <div key={project.id} className="grid grid-cols-12 gap-4 p-4 border-b border-border last:border-0 text-sm items-center hover:bg-muted/30 transition-colors">
                        <div className="col-span-3 font-medium flex items-center gap-2">
                          {project.icon}
                          {project.name}
                        </div>
                        <div className="col-span-3 text-muted-foreground">{project.goal}</div>
                        <div className="col-span-4 text-muted-foreground">{project.hypothesis}</div>
                        <div className="col-span-2 font-mono text-xs">{project.timeline}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="principles" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-5 w-5 text-primary" />
                      <CardTitle>Define Outcome Metric</CardTitle>
                    </div>
                    <CardDescription>
                      Make sure you begin with a clear KPI you want to improve.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <CardTitle>Start Small, Deliver Small</CardTitle>
                    </div>
                    <CardDescription>
                      Choose a specific task or part of a process, not an entire feature rich solution.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <CardTitle>Don't Overcomplicate</CardTitle>
                    </div>
                    <CardDescription>
                      Begin with the simplest workable approach; add complexity only when evidence demands it.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <CardTitle>Value Over Novelty</CardTitle>
                    </div>
                    <CardDescription>
                      Prioritise improvements to workflows, not clever tech for its own sake.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
