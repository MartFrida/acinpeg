import {create} from 'zustand';
import type { User } from '../types';
import { persist } from 'zustand/middleware';

interface AuthState { user: User | null; setUser: (u: User | null) => void; logout: () => void }


export const useAuthStore = create<AuthState>()(persist((set) => ({
user: null,
setUser: (u) => { if(u) localStorage.setItem('token', u.token || ''); set({ user: u }); },
logout: () => { localStorage.removeItem('token'); set({ user: null }); }
}), { name: 'acinpeg-auth' }));