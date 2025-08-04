import { BarChart3, TrendingUp, Calendar, Filter, Download } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { Button } from "@/components/ui/button";

const Analytics = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-sora mb-2">
              <span className="text-primary">Analytics</span> Dashboard
            </h1>
            <p className="text-muted-foreground">
              Comprehensive insights into your platform performance and user behavior.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="btn-ghost-neon">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
            <Button className="btn-neon">
              <Download size={16} className="mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Time Period Selector */}
        <div className="glass-card rounded-xl p-4 mb-8">
          <div className="flex items-center gap-4">
            <Calendar size={20} className="text-primary" />
            <span className="font-medium">Time Period:</span>
            <div className="flex gap-2">
              {['7D', '30D', '90D', '1Y'].map((period) => (
                <Button 
                  key={period}
                  variant={period === '30D' ? "default" : "outline"}
                  size="sm"
                  className={period === '30D' ? "btn-neon text-xs" : "btn-ghost-neon text-xs"}
                >
                  {period}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Page Views"
            value="847K"
            change="+18.2%"
            changeType="positive"
            icon={BarChart3}
          />
          <MetricCard
            title="Unique Visitors"
            value="234K"
            change="+12.5%"
            changeType="positive"
            icon={TrendingUp}
          />
          <MetricCard
            title="Bounce Rate"
            value="23.4%"
            change="-5.2%"
            changeType="positive"
            icon={TrendingUp}
          />
          <MetricCard
            title="Avg. Session Duration"
            value="4m 32s"
            change="+8.7%"
            changeType="positive"
            icon={TrendingUp}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <AnalyticsChart
            title="Traffic Overview"
            type="area"
            dataKey="users"
            color="hsl(var(--primary))"
          />
          <AnalyticsChart
            title="Conversion Funnel"
            type="line"
            dataKey="value"
            color="hsl(var(--accent))"
          />
        </div>

        {/* Detailed Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Pages */}
          <div className="glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6">Top Performing Pages</h3>
            <div className="space-y-4">
              {[
                { page: "/dashboard", views: "45.2K", change: "+12%" },
                { page: "/analytics", views: "32.1K", change: "+8%" },
                { page: "/insights", views: "28.9K", change: "+15%" },
                { page: "/automation", views: "21.3K", change: "+5%" },
                { page: "/settings", views: "18.7K", change: "+3%" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <div>
                    <p className="font-medium text-sm">{item.page}</p>
                    <p className="text-xs text-muted-foreground">{item.views} views</p>
                  </div>
                  <span className="text-xs text-green-400 font-medium">{item.change}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6">Traffic Sources</h3>
            <div className="space-y-4">
              {[
                { source: "Direct", percentage: "42%", color: "bg-primary" },
                { source: "Google Search", percentage: "28%", color: "bg-blue-500" },
                { source: "Social Media", percentage: "18%", color: "bg-purple-500" },
                { source: "Email", percentage: "8%", color: "bg-green-500" },
                { source: "Others", percentage: "4%", color: "bg-gray-500" }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.source}</span>
                    <span className="font-medium">{item.percentage}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full transition-all duration-500`} 
                         style={{width: item.percentage}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Analytics */}
          <div className="glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6">Real-time Data</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary animate-pulse-neon">1,247</div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Current Sessions</span>
                  <span className="font-medium">892</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Page Views/min</span>
                  <span className="font-medium">156</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Events/min</span>
                  <span className="font-medium">423</span>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-primary">Traffic Spike Detected</p>
                <p className="text-xs text-muted-foreground mt-1">+28% increase in the last hour</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;