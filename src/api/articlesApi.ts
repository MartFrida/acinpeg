// import { useQuery } from "@tanstack/react-query";
// import  api  from "./axiosInstance";


// export function useArticles() {
//   return useQuery({
//     queryKey: ["articles"],
//     queryFn: async () => {
//       const res = await api.get("/articles");
//       return res.data;
//     },
//   });
// }

import api from './axiosInstance';
import type { AISuggestionsResponse, Article } from '../types';


export async function fetchArticles(){
const { data } = await api.get<Article[]>('/articles');
return data;
}


export async function fetchArticle(id: string){
const { data } = await api.get<Article>(`/articles/${id}`);
return data;
}


export async function saveDraft(article: Partial<Article>){
const { data } = await api.post<Article>('/articles', article);
return data;
}


export async function requestAISuggestions(articleId: string, type?: string): Promise<AISuggestionsResponse>{
const { data } = await api.post(`/articles/${articleId}/ai`, { type });
return data;
}