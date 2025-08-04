import { Settings, User, Bell, Shield, Database, Palette, Globe, Key } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-sora mb-2">
            <span className="text-primary">Settings</span> & Configuration
          </h1>
          <p className="text-muted-foreground">
            Customize your account, preferences, and platform configuration.
          </p>
        </div>

        {/* Settings Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Menu */}
          <div className="glass-card rounded-xl p-4">
            <nav className="space-y-2">
              {[
                { id: "profile", label: "Profile", icon: User, active: true },
                { id: "notifications", label: "Notifications", icon: Bell, active: false },
                { id: "security", label: "Security", icon: Shield, active: false },
                { id: "integrations", label: "Integrations", icon: Database, active: false },
                { id: "appearance", label: "Appearance", icon: Palette, active: false },
                { id: "api", label: "API Keys", icon: Key, active: false },
                { id: "general", label: "General", icon: Globe, active: false }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${
                    item.active
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Settings */}
            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
                <User size={20} className="text-primary" />
                Profile Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value="John"
                    className="input-neon"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value="Doe"
                    className="input-neon"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@company.com"
                    value="john.doe@company.com"
                    className="input-neon"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    value="+1 (555) 123-4567"
                    className="input-neon"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input
                    id="bio"
                    placeholder="Tell us about yourself..."
                    value="AI Analytics enthusiast and data science leader"
                    className="input-neon"
                  />
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <Button className="btn-neon">Save Changes</Button>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
                <Bell size={20} className="text-primary" />
                Notification Preferences
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Email Notifications",
                    description: "Receive email updates for important events",
                    enabled: true
                  },
                  {
                    title: "Push Notifications", 
                    description: "Get browser notifications for real-time alerts",
                    enabled: true
                  },
                  {
                    title: "Weekly Reports",
                    description: "Automated weekly analytics reports via email",
                    enabled: false
                  },
                  {
                    title: "Security Alerts",
                    description: "Immediate notifications for security events",
                    enabled: true
                  },
                  {
                    title: "Marketing Updates",
                    description: "News about new features and product updates",
                    enabled: false
                  }
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div>
                      <div className="font-medium text-sm">{setting.title}</div>
                      <div className="text-xs text-muted-foreground">{setting.description}</div>
                    </div>
                    <Switch defaultChecked={setting.enabled} />
                  </div>
                ))}
              </div>
            </div>

            {/* Security Settings */}
            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
                <Shield size={20} className="text-primary" />
                Security & Privacy
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      placeholder="Enter current password"
                      className="input-neon"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Enter new password"
                      className="input-neon"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div>
                      <div className="font-medium text-sm">Two-Factor Authentication</div>
                      <div className="text-xs text-muted-foreground">Add an extra layer of security to your account</div>
                    </div>
                    <Button variant="outline" className="btn-ghost-neon text-xs">
                      Enable 2FA
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div>
                      <div className="font-medium text-sm">Session Management</div>
                      <div className="text-xs text-muted-foreground">View and manage active sessions</div>
                    </div>
                    <Button variant="outline" className="btn-ghost-neon text-xs">
                      Manage Sessions
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* API Keys */}
            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
                <Key size={20} className="text-primary" />
                API Keys & Integrations
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    name: "Production API Key",
                    key: "nft_prod_••••••••••••7a8b",
                    created: "Created on Mar 15, 2024",
                    lastUsed: "Last used 2 hours ago"
                  },
                  {
                    name: "Development API Key", 
                    key: "nft_dev_••••••••••••2c4d",
                    created: "Created on Feb 28, 2024",
                    lastUsed: "Last used yesterday"
                  }
                ].map((apiKey, index) => (
                  <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-sm">{apiKey.name}</div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="btn-ghost-neon text-xs">
                          Copy
                        </Button>
                        <Button size="sm" variant="outline" className="btn-ghost-neon text-xs">
                          Revoke
                        </Button>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono bg-background/50 px-2 py-1 rounded">
                      {apiKey.key}
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {apiKey.created} • {apiKey.lastUsed}
                    </div>
                  </div>
                ))}
                
                <Button className="btn-neon">
                  <Key size={16} className="mr-2" />
                  Generate New API Key
                </Button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="glass-card rounded-xl p-6 border-red-500/30">
              <h3 className="text-lg font-semibold font-sora mb-6 text-red-400">Danger Zone</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <div>
                    <div className="font-medium text-sm text-red-400">Delete Account</div>
                    <div className="text-xs text-muted-foreground">Permanently delete your account and all data</div>
                  </div>
                  <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/20 text-xs">
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;