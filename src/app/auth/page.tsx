import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { AuthView } from "@/modules/auth/ui/views/Auth-view";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  if (session?.user.email) {
    redirect("/");
  }

  return <AuthView />;
};
export default Page;
