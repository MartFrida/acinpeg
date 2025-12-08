import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginApi } from '../api/authApi';
import type { User } from '../types';

interface LoginVariables {
  email: string;
  password: string;
}

export function useLogin() {
  const qc = useQueryClient();

  return useMutation<User, Error, LoginVariables>({
    mutationFn: async ({ email, password }) => {
      const data = await loginApi(email, password); // { user: User, token: string }
      return { ...data.user, token: data.token }; // тип User с добавленным token
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess: (user) => {
      // пример: можно обновить Zustand store
      qc.invalidateQueries({ queryKey: ['currentUser'] });
      // например, setUser(user);
    },
  });
}
