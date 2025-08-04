import { Database, Plus, RefreshCw, Settings, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";

const DataSources = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-sora mb-2">
              <span className="text-primary">Data Sources</span> Management
            </h1>
            <p className="text-muted-foreground">
              Connect, monitor, and manage all your data sources in one place.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="btn-ghost-neon">
              <RefreshCw size={16} className="mr-2" />
              Sync All
            </Button>
            <Button className="btn-neon">
              <Plus size={16} className="mr-2" />
              Add Data Source
            </Button>
          </div>
        </div>

        {/* Data Source Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Active Sources"
            value="24"
            change="+3"
            changeType="positive"
            icon={Database}
          />
          <MetricCard
            title="Data Processed Today"
            value="847GB"
            change="+12.5%"
            changeType="positive"
            icon={RefreshCw}
          />
          <MetricCard
            title="Sync Success Rate"
            value="98.7%"
            change="+0.3%"
            changeType="positive"
            icon={CheckCircle}
          />
          <MetricCard
            title="Failed Syncs"
            value="3"
            change="-2"
            changeType="positive"
            icon={AlertTriangle}
          />
        </div>

        {/* Data Sources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Active Data Sources */}
          <div className="glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
              <Database size={20} className="text-primary" />
              Active Data Sources
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  name: "Google Analytics",
                  type: "Web Analytics",
                  status: "Connected",
                  lastSync: "2 minutes ago",
                  records: "2.3M",
                  health: "healthy"
                },
                {
                  name: "Salesforce CRM",
                  type: "Customer Data",
                  status: "Connected", 
                  lastSync: "5 minutes ago",
                  records: "847K",
                  health: "healthy"
                },
                {
                  name: "PostgreSQL Database",
                  type: "Transactional Data",
                  status: "Connected",
                  lastSync: "1 minute ago",
                  records: "5.7M",
                  health: "healthy"
                },
                {
                  name: "Stripe Payments",
                  type: "Financial Data",
                  status: "Syncing",
                  lastSync: "Syncing now",
                  records: "234K",
                  health: "syncing"
                },
                {
                  name: "HubSpot Marketing",
                  type: "Marketing Data",
                  status: "Error",
                  lastSync: "2 hours ago",
                  records: "1.2M",
                  health: "error"
                }
              ].map((source, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        source.health === 'healthy' ? 'bg-green-400' :
                        source.health === 'syncing' ? 'bg-yellow-400 animate-pulse' :
                        'bg-red-400'
                      }`} />
                      <div>
                        <h4 className="font-semibold text-sm">{source.name}</h4>
                        <p className="text-xs text-muted-foreground">{source.type}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="btn-ghost-neon text-xs">
                      <Settings size={12} className="mr-1" />
                      Configure
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Records: {source.records}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={10} />
                      <span>{source.lastSync}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Source Categories */}
          <div className="space-y-6">
            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-6">Available Integrations</h3>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Google Ads", category: "Marketing", status: "Available" },
                  { name: "Facebook Ads", category: "Marketing", status: "Available" },
                  { name: "MongoDB", category: "Database", status: "Available" },
                  { name: "Shopify", category: "E-commerce", status: "Coming Soon" },
                  { name: "Mailchimp", category: "Email", status: "Available" },
                  { name: "Zendesk", category: "Support", status: "Available" },
                  { name: "Slack", category: "Communication", status: "Available" },
                  { name: "Jira", category: "Project Mgmt", status: "Beta" }
                ].map((integration, index) => (
                  <div key={index} className="p-3 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors cursor-pointer">
                    <div className="text-sm font-medium mb-1">{integration.name}</div>
                    <div className="text-xs text-muted-foreground mb-2">{integration.category}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      integration.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                      integration.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {integration.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-6">Sync Schedule</h3>
              
              <div className="space-y-4">
                {[
                  { source: "Google Analytics", frequency: "Every 15 minutes", nextSync: "In 3 minutes" },
                  { source: "Salesforce CRM", frequency: "Every 30 minutes", nextSync: "In 12 minutes" },
                  { source: "PostgreSQL", frequency: "Real-time", nextSync: "Continuous" },
                  { source: "Stripe Payments", frequency: "Every hour", nextSync: "In 45 minutes" }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                    <div>
                      <div className="text-sm font-medium">{schedule.source}</div>
                      <div className="text-xs text-muted-foreground">{schedule.frequency}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-primary font-medium">{schedule.nextSync}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data Quality Monitoring */}
        <div className="glass-card-glow rounded-xl p-6">
          <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
            <CheckCircle size={20} className="text-primary" />
            Data Quality Monitoring
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "Data Completeness",
                value: "97.8%",
                status: "excellent",
                description: "Missing values in datasets"
              },
              {
                metric: "Data Freshness",
                value: "99.2%",
                status: "excellent", 
                description: "Data updated within SLA"
              },
              {
                metric: "Schema Compliance",
                value: "94.5%",
                status: "good",
                description: "Data matches expected schema"
              },
              {
                metric: "Duplicate Detection",
                value: "1.2%",
                status: "warning",
                description: "Duplicate records identified"
              }
            ].map((quality, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-sm">{quality.metric}</h4>
                  <div className={`w-2 h-2 rounded-full ${
                    quality.status === 'excellent' ? 'bg-green-400' :
                    quality.status === 'good' ? 'bg-blue-400' :
                    'bg-yellow-400'
                  }`} />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{quality.value}</div>
                <p className="text-xs text-muted-foreground">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataSources;