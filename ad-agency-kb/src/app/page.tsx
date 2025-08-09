// Server component wrapper; renders client dashboard inside

import dynamic from 'next/dynamic';
const ClientDashboard = dynamic(() => import('@/components/ClientDashboard').then(m => m.ClientDashboard), { ssr: false });

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Agency KB</h1>
      </div>
      <ClientDashboard />
    </div>
  );
} 