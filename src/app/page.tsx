import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function MainPage() {
  return (
    <div className="flex flex-col gap-20">
      <h1 className="text-4xl">Streams!</h1>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
