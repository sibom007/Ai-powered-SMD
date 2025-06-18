import { auth } from "@/lib/auth";
import { LobbyView } from "@/modules/lobby/components/ui/Lobby-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user.email) {
    redirect("/auth");
  }

  return <LobbyView />;
}

export default Page;
