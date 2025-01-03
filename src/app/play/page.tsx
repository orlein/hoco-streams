import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Play() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Current Game: River Rapids</h2>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Game Stream</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-indigo-200 h-40 rounded flex items-center justify-center">
            Game Visualization Here
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Players</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {['Alice', 'Bob', 'Charlie', 'You'].map((player) => (
              <li key={player} className="bg-white p-2 rounded shadow">
                {player}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Button className="w-full mt-4">Make Move</Button>
    </div>
  );
}
