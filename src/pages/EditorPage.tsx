import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useArticle, useSaveDraft, useRequestAI } from '../hooks/articles';


export default function EditorPage(){
const { id } = useParams();
const navigate = useNavigate();
const { data: article } = useArticle(id === 'new' ? undefined : id);
const [content, setContent] = useState('');
const [title, setTitle] = useState('');
const saveDraft = useSaveDraft();
const requestAI = useRequestAI();


useEffect(() => {
if(article){ setContent(article.content); setTitle(article.title); }
}, [article]);


const onSave = async () => {
await saveDraft.mutateAsync({ id: article?.id, title, content });
navigate('/student');
};


const onGenerate = async () => {
if(!article?.id){
const a = await saveDraft.mutateAsync({ title, content });
requestAI.mutate({ articleId: a.id, type: 'summary' });
return;
}
requestAI.mutate({ articleId: article.id, type: 'summary' });
};


return (
<div className="grid grid-cols-3 gap-6">
<div className="col-span-2">
<input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded mb-3" placeholder="Title" />
<textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full h-[60vh] p-3 border rounded" />
<div className="mt-3 flex gap-3">
<button onClick={onSave} className="px-4 py-2 bg-blue-600 text-white rounded">Save Draft</button>
<button onClick={onGenerate} className="px-4 py-2 bg-purple-600 text-white rounded">Get AI Suggestions</button>
</div>
</div>


<aside className="col-span-1 bg-white border p-4 rounded shadow">
<h3 className="font-semibold mb-2">AI Suggestions</h3>
<div className="min-h-[200px]">(Suggestions will appear here)</div>
</aside>
</div>
);
}