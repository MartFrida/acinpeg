import React from 'react';
import { useArticles } from '../hooks/articles';


export default function InstructorDashboard(){
const { data: articles } = useArticles();


return (
<div>
<h1 className="text-3xl font-bold">Instructor Dashboard</h1>
<div className="mt-6 grid gap-4">
{articles?.filter(a => a.status === 'submitted').map(s => (
<div key={s.id} className="p-4 bg-white border rounded shadow">
<h2 className="text-xl font-semibold">{s.title}</h2>
<p className="text-sm">Author: {s.authorId}</p>
<button className="mt-2 px-3 py-1 border rounded">Review</button>
</div>
))}
</div>
</div>
);
}