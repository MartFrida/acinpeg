// import { useQuery } from "@tanstack/react-query";
// import  api  from "./axiosInstance";


// export function useUsers() {
//   return useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await api.get("/users");
//       return res.data;
//     },
//   });
// }

import api from './axiosInstance';
import type { User } from '../types';


export async function loginApi(email: string, password: string){
const { data } = await api.post<{ user: User; token: string }>('/auth/login', { email, password });
return data;
}


export async function current(){
const { data } = await api.get<User>('/auth/me');
return data;
}


