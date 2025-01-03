import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function RoomsPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/login");
  }

  if (error) {
    redirect("/error");
  }

  const rooms = [
    { name: "Waterfall", players: 3, maxPlayers: 8 },
    { name: "Ocean Currents", players: 5, maxPlayers: 10 },
    { name: "River Rapids", players: 2, maxPlayers: 6 },
    { name: "Gentle Stream", players: 4, maxPlayers: 8 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Game Rooms</h2>
      <Button className="w-full mb-4">Create New Room</Button>
      <div className="space-y-4">
        {rooms.map((room) => (
          <Card key={room.name}>
            <CardHeader>
              <CardTitle>{room.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Players: {room.players}/{room.maxPlayers}
              </p>
              <Button className="w-full mt-2">Join Room</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
