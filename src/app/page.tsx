"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();

  console.log("🚀 ~ Home ~ session:", session);
  const handleLogin = async () => {
    authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div>
      {session?.user.email ? (
        <div className="text-4xl font-bold text-center">
          {session.user.email}
        </div>
      ) : (
        <Button className="text-center" onClick={handleLogin}>
          login
        </Button>
      )}
    </div>
  );
}
