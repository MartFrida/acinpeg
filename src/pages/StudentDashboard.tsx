import React from 'react';
import { Link } from 'react-router-dom';
import { useArticles } from '../hooks/articles';


export default function StudentDashboard(){
const { data: articles, isLoading } = useArticles();


return (
<div>
<div className="flex justify-between items-center">
<h1 className="text-3xl font-bold">Student Dashboard</h1>
<Link to="/editor/new" className="bg-green-600 text-white px-4 py-2 rounded">+ New Article</Link>
</div>


<div className="mt-6 grid gap-4">
{isLoading ? <div>Loading...</div> : articles?.map(a => (
<Link key={a.id} to={`/editor/${a.id}`} className="p-4 bg-white border rounded shadow hover:shadow-md">
<h2 className="text-xl font-semibold">{a.title}</h2>
<p className="text-sm">Status: {a.status}</p>
</Link>
))}
</div>
</div>
);
}