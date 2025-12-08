export type Role = 'alumno' | 'profesor' | 'admin';


export interface User { id: string; name: string; email: string; role: Role; token?: string }


export interface Article {
id: string;
title: string;
content: string;
authorId: string;
status: 'draft' | 'submitted' | 'reviewed';
tags?: string[];
aiSuggestions?: AIJob[];
createdAt?: string;
}


export interface AIJob { id: string; type: string; result?: string; status: 'pending' | 'done' }

export interface AISuggestionsResponse {
  suggestions: string[];
  message?: string;
}