import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Expense Tracker</h1>
      <h3 className="text-2xl font-bold mb-8">Built by MANAS KUSH</h3>
      <div className="space-x-4">
        <Link href="/login">
          <button className="bg-violet-500 text-white px-8 py-4 rounded-xl hover:bg-violet-600">
            Login
          </button>
        </Link>
        <Link href="/register">
        <button 
          className="bg-lime-500 text-white px-8 py-4 rounded-xl hover:bg-lime-600">
          Register
</button>
          
        </Link>
      </div>
    </div>
  );
}