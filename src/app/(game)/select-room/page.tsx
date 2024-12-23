import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signOut } from "./sign-out-action";

export default async function SelectRoomPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/login");
  }

  if (error) {
    redirect("/error");
  }

  return (
    <div>
      <h1>Select Room</h1>
      <p />
      <div>Hello, {data.user.email}!</div>

      <Button onClick={signOut}>Logout</Button>
    </div>
  );
}
