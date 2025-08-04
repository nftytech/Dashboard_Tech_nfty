import { Zap, Play, Pause, Settings, Plus, BarChart3, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";

const Automation = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-sora mb-2">
              <span className="text-primary">Automation</span> Hub
            </h1>
            <p className="text-muted-foreground">
              Create, manage, and monitor automated workflows to streamline your operations.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="btn-ghost-neon">
              <Settings size={16} className="mr-2" />
              Templates
            </Button>
            <Button className="btn-neon">
              <Plus size={16} className="mr-2" />
              Create Automation
            </Button>
          </div>
        </div>

        {/* Automation Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Active Automations"
            value="47"
            change="+5"
            changeType="positive"
            icon={Zap}
          />
          <MetricCard
            title="Success Rate"
            value="98.7%"
            change="+1.2%"
            changeType="positive"
            icon={CheckCircle}
          />
          <MetricCard
            title="Time Saved"
            value="234h"
            change="+23h"
            changeType="positive"
            icon={Clock}
          />
          <MetricCard
            title="Failed Executions"
            value="12"
            change="-8"
            changeType="positive"
            icon={AlertTriangle}
          />
        </div>

        {/* Active Automations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
              <Play size={20} className="text-primary" />
              Active Automations
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  name: "Daily Analytics Report",
                  description: "Generate and send daily analytics to stakeholders",
                  trigger: "Schedule: Daily 9:00 AM",
                  status: "running",
                  executions: 347,
                  lastRun: "3 hours ago",
                  successRate: 99.1
                },
                {
                  name: "User Onboarding Sequence",
                  description: "Automated email sequence for new user onboarding",
                  trigger: "Event: User Registration",
                  status: "running",
                  executions: 1247,
                  lastRun: "12 minutes ago",
                  successRate: 97.8
                },
                {
                  name: "Data Backup & Sync",
                  description: "Backup critical data and sync with external storage",
                  trigger: "Schedule: Every 6 hours",
                  status: "running",
                  executions: 2890,
                  lastRun: "1 hour ago",
                  successRate: 99.9
                },
                {
                  name: "Anomaly Detection Alert",
                  description: "Monitor metrics and alert on anomalies",
                  trigger: "Condition: Threshold exceeded",
                  status: "paused",
                  executions: 89,
                  lastRun: "2 days ago",
                  successRate: 94.2
                }
              ].map((automation, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        automation.status === 'running' ? 'bg-green-400 animate-pulse' :
                        automation.status === 'paused' ? 'bg-yellow-400' :
                        'bg-red-400'
                      }`} />
                      <div>
                        <h4 className="font-semibold text-sm">{automation.name}</h4>
                        <p className="text-xs text-muted-foreground">{automation.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="btn-ghost-neon text-xs">
                        {automation.status === 'running' ? <Pause size={12} /> : <Play size={12} />}
                      </Button>
                      <Button size="sm" variant="outline" className="btn-ghost-neon text-xs">
                        <Settings size={12} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground mb-2">{automation.trigger}</div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span>{automation.executions} executions</span>
                    <span>Success: {automation.successRate}%</span>
                    <span>Last: {automation.lastRun}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automation Templates */}
          <div className="glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6">Popular Templates</h3>
            
            <div className="space-y-4">
              {[
                {
                  name: "Lead Scoring Automation",
                  description: "Automatically score and route leads based on behavior",
                  category: "Sales",
                  difficulty: "Medium",
                  estimatedTime: "2 hours"
                },
                {
                  name: "Slack Notification Bot",
                  description: "Send automated notifications to Slack channels",
                  category: "Communication",
                  difficulty: "Easy",
                  estimatedTime: "30 minutes"
                },
                {
                  name: "Customer Churn Prediction",
                  description: "Identify at-risk customers and trigger retention campaigns",
                  category: "AI/ML",
                  difficulty: "Hard",
                  estimatedTime: "4 hours"
                },
                {
                  name: "Invoice Processing",
                  description: "Automatically process and categorize invoices",
                  category: "Finance",
                  difficulty: "Medium",
                  estimatedTime: "1.5 hours"
                },
                {
                  name: "Social Media Scheduler",
                  description: "Schedule and publish content across social platforms",
                  category: "Marketing",
                  difficulty: "Easy",
                  estimatedTime: "45 minutes"
                }
              ].map((template, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{template.name}</h4>
                      <p className="text-xs text-muted-foreground">{template.description}</p>
                    </div>
                    <Button size="sm" className="btn-neon text-xs">
                      Use Template
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {template.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      template.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                      template.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {template.difficulty}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                      {template.estimatedTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automation Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Execution History */}
          <div className="lg:col-span-2 glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
              <BarChart3 size={20} className="text-primary" />
              Recent Executions
            </h3>
            
            <div className="space-y-3">
              {[
                {
                  automation: "User Onboarding Sequence",
                  trigger: "New user: sarah.johnson@company.com",
                  status: "success",
                  duration: "2.3s",
                  time: "2 minutes ago"
                },
                {
                  automation: "Daily Analytics Report",
                  trigger: "Scheduled execution",
                  status: "success",
                  duration: "45.7s",
                  time: "3 hours ago"
                },
                {
                  automation: "Data Backup & Sync",
                  trigger: "Scheduled execution",
                  status: "success",
                  duration: "12.1s",
                  time: "1 hour ago"
                },
                {
                  automation: "Lead Scoring Update",
                  trigger: "Contact form submission",
                  status: "failed",
                  duration: "1.2s",
                  time: "4 hours ago"
                },
                {
                  automation: "Slack Notification",
                  trigger: "Alert threshold exceeded",
                  status: "success",
                  duration: "0.8s",
                  time: "6 hours ago"
                }
              ].map((execution, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      execution.status === 'success' ? 'bg-green-400' :
                      execution.status === 'failed' ? 'bg-red-400' :
                      'bg-yellow-400'
                    }`} />
                    <div>
                      <div className="font-medium text-sm">{execution.automation}</div>
                      <div className="text-xs text-muted-foreground">{execution.trigger}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs font-medium ${
                      execution.status === 'success' ? 'text-green-400' :
                      execution.status === 'failed' ? 'text-red-400' :
                      'text-yellow-400'
                    }`}>
                      {execution.status}
                    </div>
                    <div className="text-xs text-muted-foreground">{execution.duration} • {execution.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Stats */}
          <div className="space-y-6">
            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-6">Performance</h3>
              
              <div className="space-y-4">
                {[
                  { metric: "Avg Execution Time", value: "8.4s", trend: "-1.2s" },
                  { metric: "Total Executions Today", value: "247", trend: "+34" },
                  { metric: "Error Rate", value: "1.3%", trend: "-0.5%" },
                  { metric: "Cost Savings", value: "$2,340", trend: "+$450" }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                    <div>
                      <div className="text-sm font-medium">{stat.metric}</div>
                      <div className="text-xs text-muted-foreground">{stat.trend} from yesterday</div>
                    </div>
                    <div className="text-lg font-bold text-primary">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-6">Quick Actions</h3>
              
              <div className="space-y-3">
                <Button className="w-full btn-neon justify-start">
                  <Plus size={16} className="mr-2" />
                  Create New Automation
                </Button>
                <Button variant="outline" className="w-full btn-ghost-neon justify-start">
                  <Settings size={16} className="mr-2" />
                  Manage Templates
                </Button>
                <Button variant="outline" className="w-full btn-ghost-neon justify-start">
                  <BarChart3 size={16} className="mr-2" />
                  View Analytics
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Automation;