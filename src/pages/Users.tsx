import { Users, UserPlus, UserMinus, Search, Filter, MoreHorizontal, Shield, Crown, Clock } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UsersPage = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-sora mb-2">
              <span className="text-primary">Users</span> Management
            </h1>
            <p className="text-muted-foreground">
              Manage user accounts, permissions, and monitor user activity across the platform.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="btn-ghost-neon">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
            <Button className="btn-neon">
              <UserPlus size={16} className="mr-2" />
              Invite User
            </Button>
          </div>
        </div>

        {/* User Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Users"
            value="12,847"
            change="+234"
            changeType="positive"
            icon={Users}
          />
          <MetricCard
            title="Active Users (30d)"
            value="8,923"
            change="+12.5%"
            changeType="positive"
            icon={Users}
          />
          <MetricCard
            title="New Signups"
            value="89"
            change="+23%"
            changeType="positive"
            icon={UserPlus}
          />
          <MetricCard
            title="Churn Rate"
            value="2.3%"
            change="-0.5%"
            changeType="positive"
            icon={UserMinus}
          />
        </div>

        {/* Search and Filters */}
        <div className="glass-card rounded-xl p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users by name, email, or ID..."
                className="input-neon pl-10"
              />
            </div>
            <div className="flex gap-2">
              {['All', 'Active', 'Premium', 'Trial', 'Inactive'].map((filter) => (
                <Button 
                  key={filter}
                  variant={filter === 'All' ? "default" : "outline"}
                  size="sm"
                  className={filter === 'All' ? "btn-neon text-xs" : "btn-ghost-neon text-xs"}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="glass-card-glow rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold font-sora mb-6">User Directory</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">User</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Plan</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Last Active</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Usage</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    name: "Sarah Johnson",
                    email: "sarah.johnson@company.com",
                    avatar: "SJ",
                    status: "active",
                    plan: "premium",
                    lastActive: "2 minutes ago",
                    usage: 85
                  },
                  {
                    id: 2,
                    name: "Michael Chen",
                    email: "michael.chen@startup.io",
                    avatar: "MC",
                    status: "active",
                    plan: "pro",
                    lastActive: "1 hour ago",
                    usage: 62
                  },
                  {
                    id: 3,
                    name: "Emily Rodriguez",
                    email: "emily.r@enterprise.com",
                    avatar: "ER",
                    status: "inactive",
                    plan: "enterprise",
                    lastActive: "3 days ago",
                    usage: 23
                  },
                  {
                    id: 4,
                    name: "David Park",
                    email: "david.park@gmail.com",
                    avatar: "DP",
                    status: "trial",
                    plan: "trial",
                    lastActive: "30 minutes ago",
                    usage: 45
                  },
                  {
                    id: 5,
                    name: "Lisa Thompson",
                    email: "lisa.thompson@agency.com",
                    avatar: "LT",
                    status: "active",
                    plan: "pro",
                    lastActive: "5 minutes ago",
                    usage: 78
                  }
                ].map((user) => (
                  <tr key={user.id} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-foreground">{user.avatar}</span>
                        </div>
                        <div>
                          <div className="font-medium text-sm">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        user.status === 'active' ? 'bg-green-500/20 text-green-400' :
                        user.status === 'trial' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1">
                        {user.plan === 'premium' && <Crown size={12} className="text-yellow-500" />}
                        {user.plan === 'enterprise' && <Shield size={12} className="text-purple-500" />}
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          user.plan === 'premium' ? 'bg-yellow-500/20 text-yellow-400' :
                          user.plan === 'enterprise' ? 'bg-purple-500/20 text-purple-400' :
                          user.plan === 'pro' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {user.plan}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={10} />
                        {user.lastActive}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="w-16">
                        <div className="text-xs text-muted-foreground mb-1">{user.usage}%</div>
                        <div className="w-full bg-secondary rounded-full h-1">
                          <div 
                            className={`h-1 rounded-full transition-all duration-500 ${
                              user.usage > 80 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                              user.usage > 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                              'bg-gradient-to-r from-primary to-accent'
                            }`}
                            style={{width: `${user.usage}%`}}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Button size="sm" variant="outline" className="btn-ghost-neon text-xs">
                        <MoreHorizontal size={12} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Activity */}
          <div className="glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6">Recent Activity</h3>
            
            <div className="space-y-4">
              {[
                {
                  user: "Sarah Johnson",
                  action: "Created new automation",
                  time: "2 minutes ago",
                  type: "creation"
                },
                {
                  user: "Michael Chen",
                  action: "Updated dashboard settings",
                  time: "15 minutes ago",
                  type: "update"
                },
                {
                  user: "Emily Rodriguez",
                  action: "Exported analytics report",
                  time: "1 hour ago",
                  type: "export"
                },
                {
                  user: "David Park",
                  action: "Upgraded to Pro plan",
                  time: "2 hours ago",
                  type: "upgrade"
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'creation' ? 'bg-green-400' :
                    activity.type === 'update' ? 'bg-blue-400' :
                    activity.type === 'export' ? 'bg-purple-400' :
                    'bg-yellow-400'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock size={10} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Plan Distribution */}
          <div className="glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6">Plan Distribution</h3>
            
            <div className="space-y-4">
              {[
                { plan: "Free", users: 4567, percentage: 35.5, color: "bg-gray-500" },
                { plan: "Pro", users: 3421, percentage: 26.6, color: "bg-blue-500" },
                { plan: "Premium", users: 2890, percentage: 22.5, color: "bg-yellow-500" },
                { plan: "Enterprise", users: 1969, percentage: 15.4, color: "bg-purple-500" }
              ].map((planData, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${planData.color}`} />
                      {planData.plan}
                    </span>
                    <span className="font-medium">{planData.users.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className={`${planData.color} h-2 rounded-full transition-all duration-500`}
                      style={{width: `${planData.percentage}%`}}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground text-right">
                    {planData.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Permissions */}
          <div className="glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6">Permission Overview</h3>
            
            <div className="space-y-4">
              {[
                { role: "Super Admin", users: 3, permissions: ["Full Access"] },
                { role: "Admin", users: 12, permissions: ["User Management", "Analytics"] },
                { role: "Manager", users: 45, permissions: ["Team Analytics", "Reports"] },
                { role: "User", users: 11234, permissions: ["Basic Access"] },
                { role: "Viewer", users: 1553, permissions: ["Read Only"] }
              ].map((role, index) => (
                <div key={index} className="p-3 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">{role.role}</span>
                    <span className="text-xs text-muted-foreground">{role.users} users</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.map((permission, pIndex) => (
                      <span key={pIndex} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                        {permission}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UsersPage;