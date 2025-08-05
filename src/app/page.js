'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const user = {
    name: 'roy',
    role: 'admin'
  }

  const handleGoDashboard = () => {
    if (user.role === 'admin') {
      router.push('/dashboard')
    }
  }

  return (
    <div className="flex justify-center items-center gap-2 flex-col h-screen">
      This is home page
      <button onClick={handleGoDashboard} className="bg-gray-300 text-black p-3 rounded-sm cursor-pointer">Go to Dashboard</button>
    </div>
  );
}
