import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuthStore } from '../stores/auth';
import { useUIStore } from '../stores/ui';


export default function Layout(){
const { user, logout } = useAuthStore();
const { sidebarOpen, toggleSidebar } = useUIStore();


return (
<div className="min-h-screen flex">
<aside className={`bg-white border-r ${sidebarOpen ? 'w-64' : 'w-16'} transition-width`}>
<div className="p-4">
<h2 className="font-bold">Acinpeg</h2>
</div>
<nav className="p-4">
<Link to="/student" className="block p-2">Student</Link>
<Link to="/instructor" className="block p-2">Instructor</Link>
</nav>
</aside>


<main className="flex-1 p-6 bg-gray-50">
<header className="flex justify-between items-center mb-6">
<div>
<button onClick={toggleSidebar} className="px-2 py-1 border rounded">Toggle</button>
</div>
<div>
<span className="mr-4">{user?.name}</span>
<button onClick={logout} className="px-3 py-1 border rounded">Logout</button>
</div>
</header>
<Outlet />
</main>
</div>
);
}