import { Outlet } from 'react-router';
import { Navbar } from './Navbar';

export function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30">
      <Navbar />
      
      {/* Main content with padding for sidebar on desktop and bottom nav on mobile */}
      <main className="lg:ml-64">
        <Outlet />
      </main>
    </div>
  );
}