"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Navbar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout');
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Expense Tracker
        </Link>
        <div className="flex space-x-4">
          <Link href="/dashboard">
            <button className="text-white hover:underline">Dashboard</button>
          </Link>
          <button onClick={handleLogout} className="text-white hover:underline">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;