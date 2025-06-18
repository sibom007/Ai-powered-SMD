"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { Chrome, Loader, Shield, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

export function AuthView() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
      });
      // You can redirect or handle success here if needed
    } catch (error) {
      console.error("Google sign-in error:", error);
      // Optionally show error UI or toast here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 blur-3xl" />

        {/* Floating icons */}
        <div className="absolute top-20 left-20 text-primary/20">
          <Shield className="w-6 h-6 animate-pulse" />
        </div>
        <div className="absolute top-40 right-32 text-primary/20">
          <Zap
            className="w-5 h-5 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute bottom-32 left-32 text-primary/20">
          <Sparkles
            className="w-7 h-7 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* Main auth card */}
      <Card className="w-full max-w-md relative z-10 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4 pb-8">
          {/* Logo/Brand area */}
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>

          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold text-gray-900">
              AI Scam Detector
            </CardTitle>
            <CardDescription className="text-gray-600">
              Secure your digital life with AI-powered protection
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Google Sign In Button */}
          <Button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full h-12 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md group"
            variant="outline">
            {isLoading ? (
              <Loader className="animate-spin  w-6 h-6 text-primary" />
            ) : (
              <Chrome className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform" />
            )}
            Sign in to start protection{" "}
          </Button>

          {/* Divider with decorative elements */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                AI-Powered Security
              </span>
            </div>
          </div>

          {/* Security features */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>AI Detection</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Real-time Scan</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Threat Analysis</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Safe Browsing</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom decorative SVG - AI Circuit Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
        <svg
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
          className="w-full h-full">
          {/* Circuit board pattern */}
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse">
              <path
                d="M0 20h40M20 0v40"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.3"
                className="text-primary"
              />
              <circle
                cx="20"
                cy="20"
                r="2"
                fill="currentColor"
                opacity="0.5"
                className="text-primary"
              />
              <circle
                cx="0"
                cy="20"
                r="1"
                fill="currentColor"
                opacity="0.4"
                className="text-primary"
              />
              <circle
                cx="40"
                cy="20"
                r="1"
                fill="currentColor"
                opacity="0.4"
                className="text-primary"
              />
              <circle
                cx="20"
                cy="0"
                r="1"
                fill="currentColor"
                opacity="0.4"
                className="text-primary"
              />
              <circle
                cx="20"
                cy="40"
                r="1"
                fill="currentColor"
                opacity="0.4"
                className="text-primary"
              />
            </pattern>
          </defs>

          {/* Background waves with circuit overlay */}
          <path
            d="M0,160V120c50-20,100-40,200-30c100,10,150,40,250,20c100-20,150-10,250,10c100,20,150,0,250-10c100-10,150,20,250,0V160Z"
            className="fill-primary/10"
          />
          <path
            d="M0,160V140c60-15,120-25,240-15c120,10,180,25,300,10c120-15,180,5,300,15c120,10,180-10,300-5c120,5,180,15,300,0V160Z"
            className="fill-primary/20"
          />

          {/* Circuit pattern overlay */}
          <rect
            x="0"
            y="120"
            width="1200"
            height="40"
            fill="url(#circuit)"
            opacity="0.6"
          />

          {/* AI nodes/connections */}
          <g className="text-primary" opacity="0.4">
            <circle cx="100" cy="130" r="3" fill="currentColor">
              <animate
                attributeName="opacity"
                values="0.4;0.8;0.4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="300" cy="140" r="2" fill="currentColor">
              <animate
                attributeName="opacity"
                values="0.3;0.7;0.3"
                dur="1.5s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>
            <circle cx="500" cy="135" r="2.5" fill="currentColor">
              <animate
                attributeName="opacity"
                values="0.4;0.9;0.4"
                dur="1.8s"
                repeatCount="indefinite"
                begin="1s"
              />
            </circle>
            <circle cx="700" cy="145" r="2" fill="currentColor">
              <animate
                attributeName="opacity"
                values="0.3;0.6;0.3"
                dur="2.2s"
                repeatCount="indefinite"
                begin="0.3s"
              />
            </circle>
            <circle cx="900" cy="132" r="3" fill="currentColor">
              <animate
                attributeName="opacity"
                values="0.5;0.8;0.5"
                dur="1.7s"
                repeatCount="indefinite"
                begin="1.2s"
              />
            </circle>
            <circle cx="1100" cy="138" r="2" fill="currentColor">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="2.1s"
                repeatCount="indefinite"
                begin="0.8s"
              />
            </circle>

            {/* Connecting lines */}
            <path
              d="M100,130 L300,140 L500,135 L700,145 L900,132 L1100,138"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
              strokeDasharray="5,5">
              <animate
                attributeName="stroke-dashoffset"
                values="0;10"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
}
