import { Activity, Cpu, HardDrive, MemoryStick, Network, Server, AlertTriangle, CheckCircle } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { Button } from "@/components/ui/button";

const Performance = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-sora mb-2">
              <span className="text-primary">Performance</span> Monitoring
            </h1>
            <p className="text-muted-foreground">
              Real-time system performance metrics and infrastructure monitoring.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/20 border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-400">All Systems Operational</span>
            </div>
            <Button className="btn-neon">
              <Activity size={16} className="mr-2" />
              View Alerts
            </Button>
          </div>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="CPU Usage"
            value="34.2%"
            change="-2.1%"
            changeType="positive"
            icon={Cpu}
          />
          <MetricCard
            title="Memory Usage"
            value="67.8%"
            change="+5.2%"
            changeType="neutral"
            icon={MemoryStick}
          />
          <MetricCard
            title="Disk Usage"
            value="89.3%"
            change="+1.2%"
            changeType="negative"
            icon={HardDrive}
          />
          <MetricCard
            title="Network I/O"
            value="2.4 GB/s"
            change="+12.5%"
            changeType="positive"
            icon={Network}
          />
        </div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <AnalyticsChart
            title="CPU & Memory Usage Over Time"
            type="area"
            dataKey="users"
            color="hsl(var(--primary))"
          />
          <AnalyticsChart
            title="Network Traffic"
            type="line"
            dataKey="value"
            color="hsl(var(--accent))"
          />
        </div>

        {/* Infrastructure Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Server Status */}
          <div className="glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
              <Server size={20} className="text-primary" />
              Server Status
            </h3>
            
            <div className="space-y-4">
              {[
                { name: "Web Server 01", status: "healthy", load: "23%", uptime: "99.9%" },
                { name: "Web Server 02", status: "healthy", load: "34%", uptime: "99.8%" },
                { name: "API Server 01", status: "warning", load: "78%", uptime: "99.7%" },
                { name: "Database Server", status: "healthy", load: "45%", uptime: "99.9%" },
                { name: "Cache Server", status: "healthy", load: "12%", uptime: "100%" }
              ].map((server, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        server.status === 'healthy' ? 'bg-green-400' :
                        server.status === 'warning' ? 'bg-yellow-400' :
                        'bg-red-400'
                      }`} />
                      <span className="font-semibold text-sm">{server.name}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      server.status === 'healthy' ? 'bg-green-500/20 text-green-400' :
                      server.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {server.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Load: {server.load}</span>
                    <span>Uptime: {server.uptime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Usage */}
          <div className="glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
              <Activity size={20} className="text-primary" />
              Resource Usage
            </h3>
            
            <div className="space-y-6">
              {[
                { name: "CPU Cores", used: 6, total: 16, percentage: 37.5 },
                { name: "RAM", used: 24, total: 64, percentage: 37.5, unit: "GB" },
                { name: "Storage", used: 1.2, total: 2, percentage: 60, unit: "TB" },
                { name: "Bandwidth", used: 450, total: 1000, percentage: 45, unit: "Mbps" }
              ].map((resource, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{resource.name}</span>
                    <span className="font-medium">
                      {resource.used}{resource.unit || ''} / {resource.total}{resource.unit || ''}
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        resource.percentage > 80 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                        resource.percentage > 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                        'bg-gradient-to-r from-primary to-accent'
                      }`}
                      style={{width: `${resource.percentage}%`}}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground text-right">
                    {resource.percentage}% used
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts & Notifications */}
          <div className="space-y-6">
            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
                <AlertTriangle size={20} className="text-yellow-500" />
                Active Alerts
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    severity: "warning",
                    title: "High Disk Usage",
                    message: "Disk usage on main server exceeded 85%",
                    time: "5 minutes ago"
                  },
                  {
                    severity: "info",
                    title: "Scheduled Maintenance",
                    message: "Database maintenance scheduled for tonight",
                    time: "2 hours ago"
                  },
                  {
                    severity: "warning",
                    title: "API Response Time",
                    message: "Average response time increased to 2.3s",
                    time: "1 hour ago"
                  }
                ].map((alert, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${
                    alert.severity === 'warning' ? 'bg-yellow-500/10 border-yellow-500/20' :
                    alert.severity === 'error' ? 'bg-red-500/10 border-red-500/20' :
                    'bg-blue-500/10 border-blue-500/20'
                  }`}>
                    <div className="flex justify-between items-start mb-1">
                      <span className={`text-sm font-medium ${
                        alert.severity === 'warning' ? 'text-yellow-500' :
                        alert.severity === 'error' ? 'text-red-500' :
                        'text-blue-500'
                      }`}>
                        {alert.title}
                      </span>
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{alert.message}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                Health Checks
              </h3>
              
              <div className="space-y-3">
                {[
                  { service: "API Gateway", status: "healthy", responseTime: "45ms" },
                  { service: "Database", status: "healthy", responseTime: "12ms" },
                  { service: "Cache Layer", status: "healthy", responseTime: "8ms" },
                  { service: "File Storage", status: "degraded", responseTime: "234ms" },
                  { service: "CDN", status: "healthy", responseTime: "23ms" }
                ].map((check, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        check.status === 'healthy' ? 'bg-green-400' :
                        check.status === 'degraded' ? 'bg-yellow-400' :
                        'bg-red-400'
                      }`} />
                      <span className="text-sm font-medium">{check.service}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{check.responseTime}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="glass-card-glow rounded-xl p-6">
          <h3 className="text-lg font-semibold font-sora mb-6">Detailed Performance Metrics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: "Avg Response Time", value: "127ms", trend: "-12ms", status: "good" },
              { metric: "Error Rate", value: "0.03%", trend: "-0.01%", status: "excellent" },
              { metric: "Throughput", value: "1,247 req/s", trend: "+234 req/s", status: "good" },
              { metric: "Availability", value: "99.97%", trend: "+0.02%", status: "excellent" },
              { metric: "Cache Hit Rate", value: "94.2%", trend: "+1.2%", status: "good" },
              { metric: "Queue Length", value: "23", trend: "-12", status: "good" },
              { metric: "DB Connections", value: "45/100", trend: "+5", status: "good" },
              { metric: "Memory Leaks", value: "0", trend: "0", status: "excellent" }
            ].map((metric, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-sm">{metric.metric}</h4>
                  <div className={`w-2 h-2 rounded-full ${
                    metric.status === 'excellent' ? 'bg-green-400' :
                    metric.status === 'good' ? 'bg-blue-400' :
                    'bg-yellow-400'
                  }`} />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                <div className={`text-xs ${
                  metric.trend.startsWith('+') && metric.metric !== 'Error Rate' ? 'text-green-400' :
                  metric.trend.startsWith('-') && metric.metric === 'Error Rate' ? 'text-green-400' :
                  metric.trend.startsWith('-') ? 'text-green-400' :
                  'text-muted-foreground'
                }`}>
                  {metric.trend} from last hour
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Performance;