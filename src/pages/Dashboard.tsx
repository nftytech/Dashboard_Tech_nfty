import { 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Users, 
  Activity,
  Zap,
  Clock,
  AlertTriangle
} from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";

const recentActivity = [
  {
    id: 1,
    type: "insight",
    title: "New anomaly detected in user behavior",
    time: "2 minutes ago",
    status: "critical"
  },
  {
    id: 2,
    type: "data",
    title: "Daily data sync completed successfully",
    time: "15 minutes ago",
    status: "success"
  },
  {
    id: 3,
    type: "user",
    title: "New user registered from enterprise account",
    time: "1 hour ago",
    status: "info"
  },
  {
    id: 4,
    type: "automation",
    title: "ML model training completed with 94.2% accuracy",
    time: "2 hours ago",
    status: "success"
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-sora mb-2">
            Welcome back, <span className="text-primary">John</span>
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your AI analytics platform today.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Users"
            value="12,345"
            change="+12.5%"
            changeType="positive"
            icon={Users}
          />
          <MetricCard
            title="AI Insights Generated"
            value="1,892"
            change="+8.2%"
            changeType="positive"
            icon={Brain}
          />
          <MetricCard
            title="Data Processed"
            value="2.4TB"
            change="+15.3%"
            changeType="positive"
            icon={BarChart3}
          />
          <MetricCard
            title="Automation Success"
            value="98.7%"
            change="-0.1%"
            changeType="negative"
            icon={Zap}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <AnalyticsChart
            title="User Engagement Over Time"
            type="area"
            dataKey="users"
            color="hsl(var(--primary))"
          />
          <AnalyticsChart
            title="Revenue Analytics"
            type="line"
            dataKey="value"
            color="hsl(var(--accent))"
          />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
              <Activity size={20} className="text-primary" />
              Recent Activity
            </h3>
            
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'critical' ? 'bg-red-400' :
                    activity.status === 'success' ? 'bg-green-400' :
                    'bg-blue-400'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                Performance
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CPU Usage</span>
                  <span className="text-sm font-medium">34%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '34%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Memory</span>
                  <span className="text-sm font-medium">67%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '67%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Storage</span>
                  <span className="text-sm font-medium">89%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-500 to-red-500 h-2 rounded-full" style={{width: '89%'}}></div>
                </div>
              </div>
            </div>

            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-4 flex items-center gap-2">
                <AlertTriangle size={20} className="text-yellow-500" />
                Alerts
              </h3>
              
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <p className="text-sm font-medium text-yellow-500">High Storage Usage</p>
                  <p className="text-xs text-muted-foreground mt-1">Consider upgrading storage capacity</p>
                </div>
                
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="text-sm font-medium text-blue-500">Model Update Available</p>
                  <p className="text-xs text-muted-foreground mt-1">New AI model version ready for deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;