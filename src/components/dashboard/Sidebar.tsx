import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  Brain,
  Database,
  Home,
  Settings,
  TrendingUp,
  Users,
  Zap,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "AI Insights", url: "/insights", icon: Brain },
  { title: "Data Sources", url: "/data", icon: Database },
  { title: "Performance", url: "/performance", icon: TrendingUp },
  { title: "Users", url: "/users", icon: Users },
  { title: "Automation", url: "/automation", icon: Zap },
  { title: "Settings", url: "/settings", icon: Settings },
];

export const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`glass-card h-screen transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} border-r border-border/50`}>
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <a href="https://nftytech.com/" className="block">
              <img
                src="/lo2g.png"
                alt="NftyTech Logo"
                className="w-16 h-auto object-contain"
              />
            </a>


          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-muted-foreground hover:text-primary"
          >
            {isCollapsed ? <Menu size={18} /> : <X size={18} />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive(item.url)
              ? 'bg-primary/20 text-primary border border-primary/30 shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
          >
            <item.icon size={18} />
            {!isCollapsed && (
              <span className="font-medium text-sm">{item.title}</span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User section */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="glass-card-glow rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">JD</span>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">John Doe</p>
                <p className="text-xs text-muted-foreground truncate">john@nftytech.com</p>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <Button
              variant="ghost"
              size="sm"
              className="w-full mt-3 text-muted-foreground hover:text-primary"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <LogOut size={16} className="mr-2" />
              Sign Out
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
