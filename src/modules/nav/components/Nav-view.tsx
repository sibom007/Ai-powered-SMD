import UserAvatar from "@/components/UserAvatar";
import { Shield } from "lucide-react";

export const NavView = () => {
  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-custom-foreground">SMD</h1>
            <p className="text-sm text-gray-600">Scam Message Detector</p>
          </div>
        </div>
        <div>
          <UserAvatar />
        </div>
      </div>
    </nav>
  );
};
