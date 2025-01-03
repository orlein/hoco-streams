import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Player Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Games Played: 42</p>
          <p>Win Rate: 65%</p>
          <p>Favorite Room: Ocean Currents</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {['Stream Master', 'Rapid Responder', 'Flow Champion'].map(
              (achievement) => (
                <li key={achievement} className="bg-white p-2 rounded shadow">
                  {achievement}
                </li>
              )
            )}
          </ul>
        </CardContent>
      </Card>
      <Button className="w-full mt-4">Edit Profile</Button>
    </div>
  );
}
