import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function MainPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Welcome to Streams</h2>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Quick Play</CardTitle>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Join Random Room</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Active Games</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {["Waterfall", "Ocean Currents", "River Rapids"].map((room) => (
              <li key={room} className="bg-white p-2 rounded shadow">
                <span className="font-medium">{room}</span>
                <span className="float-right text-sm text-gray-500">
                  3/8 players
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
