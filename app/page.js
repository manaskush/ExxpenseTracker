import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Expense Tracker</h1>
      <div className="space-x-4">
        <Link href="/login">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link href="/register">
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Register
</button>
          
        </Link>
      </div>
    </div>
  );
}