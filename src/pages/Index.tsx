import { useState } from "react";
import { AuthForm } from "@/components/auth/AuthForm";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const toggleAuthMode = () => {
    setAuthMode(prev => prev === "login" ? "signup" : "login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
      
      {/* Floating decoration elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse-neon" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-glow" />
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/5 rounded-full blur-lg animate-pulse-neon" style={{ animationDelay: "1s" }} />
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <AuthForm mode={authMode} onToggleMode={toggleAuthMode} />
      </div>
      
      {/* Logo watermark */}
      <div className="absolute bottom-8 left-8 opacity-30">
        <p className="text-sm text-muted-foreground font-sora">
          Powered by <span className="text-primary font-semibold">NftyTech</span>
        </p>
      </div>
    </div>
  );
};

export default Index;
