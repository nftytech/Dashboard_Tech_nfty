import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export const MetricCard = ({ title, value, change, changeType, icon: Icon }: MetricCardProps) => {
  const changeColor = {
    positive: "text-green-400",
    negative: "text-red-400",
    neutral: "text-muted-foreground"
  }[changeType];

  return (
    <div className="glass-card-glow rounded-xl p-6 transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 rounded-lg bg-primary/20">
          <Icon size={20} className="text-primary" />
        </div>
        <span className={`text-sm font-medium ${changeColor}`}>
          {change}
        </span>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold font-sora mb-1">{value}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
  );
};