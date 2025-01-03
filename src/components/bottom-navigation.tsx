'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Play, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Lobby', href: '/' },
  { icon: Users, label: 'Rooms', href: '/rooms' },
  { icon: Play, label: 'Play', href: '/play' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-indigo-800 text-white max-w-screen-sm mx-auto">
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex flex-col items-center p-2 ${
                pathname === item.href ? 'text-yellow-300' : 'text-indigo-100'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
