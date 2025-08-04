import { Brain, Lightbulb, Zap, AlertCircle, TrendingUp, Target } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";

const AIInsights = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-sora mb-2">
              <span className="text-primary">AI Insights</span> & Predictions
            </h1>
            <p className="text-muted-foreground">
              Intelligent analysis and machine learning-powered recommendations for your business.
            </p>
          </div>
          
          <Button className="btn-neon">
            <Brain size={16} className="mr-2" />
            Generate New Insights
          </Button>
        </div>

        {/* AI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Insights Generated"
            value="1,847"
            change="+23.1%"
            changeType="positive"
            icon={Brain}
          />
          <MetricCard
            title="Prediction Accuracy"
            value="94.7%"
            change="+2.3%"
            changeType="positive"
            icon={Target}
          />
          <MetricCard
            title="Anomalies Detected"
            value="12"
            change="+4"
            changeType="neutral"
            icon={AlertCircle}
          />
          <MetricCard
            title="Optimization Suggestions"
            value="67"
            change="+15"
            changeType="positive"
            icon={Lightbulb}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Insights */}
          <div className="lg:col-span-2 glass-card-glow rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
              <Lightbulb size={20} className="text-primary" />
              Latest AI Insights
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "User Engagement Pattern Shift Detected",
                  description: "Peak activity hours have shifted from 2-4 PM to 10 AM-12 PM over the last 30 days. Consider adjusting content publishing schedule.",
                  confidence: 96,
                  impact: "High",
                  category: "User Behavior"
                },
                {
                  id: 2,
                  title: "Revenue Optimization Opportunity",
                  description: "AI model predicts 18% revenue increase by implementing dynamic pricing for premium features during low-usage hours.",
                  confidence: 89,
                  impact: "High",
                  category: "Revenue"
                },
                {
                  id: 3,
                  title: "Churn Risk Prediction",
                  description: "47 users show high probability of churning within next 14 days. Proactive engagement campaign recommended.",
                  confidence: 92,
                  impact: "Medium",
                  category: "Retention"
                },
                {
                  id: 4,
                  title: "Feature Usage Correlation",
                  description: "Users who engage with automation features have 3.2x higher retention rate. Expand automation onboarding.",
                  confidence: 88,
                  impact: "Medium",
                  category: "Product"
                }
              ].map((insight) => (
                <div key={insight.id} className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                        {insight.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Confidence</div>
                      <div className="font-bold text-primary">{insight.confidence}%</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      insight.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                      insight.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {insight.impact} Impact
                    </span>
                    <Button size="sm" variant="outline" className="btn-ghost-neon text-xs">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Model Status */}
          <div className="space-y-6">
            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
                <Zap size={20} className="text-primary" />
                Model Performance
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: "User Behavior Prediction", accuracy: 94, status: "Active" },
                  { name: "Revenue Forecasting", accuracy: 89, status: "Active" },
                  { name: "Churn Prediction", accuracy: 92, status: "Training" },
                  { name: "Content Optimization", accuracy: 87, status: "Active" }
                ].map((model, index) => (
                  <div key={index} className="p-3 rounded-lg bg-secondary/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{model.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        model.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {model.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Accuracy</span>
                      <span>{model.accuracy}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-1.5 rounded-full transition-all duration-500" 
                        style={{width: `${model.accuracy}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card-glow rounded-xl p-6">
              <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                Predictions
              </h3>
              
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="text-sm font-medium text-primary mb-1">Next 7 Days</div>
                  <div className="text-xs text-muted-foreground">Expected 12% increase in user engagement</div>
                </div>
                
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="text-sm font-medium text-blue-400 mb-1">Next 30 Days</div>
                  <div className="text-xs text-muted-foreground">Revenue forecast: $45,200 (+8.3%)</div>
                </div>
                
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <div className="text-sm font-medium text-purple-400 mb-1">Next Quarter</div>
                  <div className="text-xs text-muted-foreground">User base growth: +2,300 users</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Recommendations */}
        <div className="glass-card-glow rounded-xl p-6">
          <h3 className="text-lg font-semibold font-sora mb-6 flex items-center gap-2">
            <Target size={20} className="text-primary" />
            Recommended Actions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Optimize Content Schedule",
                description: "Publish content during new peak hours (10 AM-12 PM)",
                priority: "High",
                effort: "Low"
              },
              {
                title: "Launch Retention Campaign",
                description: "Target 47 at-risk users with personalized offers",
                priority: "High",
                effort: "Medium"
              },
              {
                title: "Expand Automation Features",
                description: "Develop more automation tools to improve retention",
                priority: "Medium",
                effort: "High"
              },
              {
                title: "Implement Dynamic Pricing",
                description: "Test variable pricing for premium features",
                priority: "Medium",
                effort: "Medium"
              },
              {
                title: "Enhance Onboarding",
                description: "Guide new users toward high-value features",
                priority: "Medium",
                effort: "Low"
              },
              {
                title: "A/B Test UI Changes",
                description: "Test engagement improvements on key pages",
                priority: "Low",
                effort: "Low"
              }
            ].map((action, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                <h4 className="font-semibold text-sm mb-2">{action.title}</h4>
                <p className="text-xs text-muted-foreground mb-3">{action.description}</p>
                <div className="flex gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    action.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                    action.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {action.priority}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                    {action.effort} Effort
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIInsights;