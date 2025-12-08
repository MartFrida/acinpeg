import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../api/articlesApi";
import type { AISuggestionsResponse, Article } from "../types";

export function useArticles() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: api.fetchArticles,
    staleTime: 1000 * 60 * 2, // 2 минуты
    refetchOnWindowFocus: false, // чтобы не раздражало дерганием запросов
  });
}

export function useArticle(id?: string) {
  return useQuery({
    queryKey: ["article", id],
    queryFn: () => api.fetchArticle(id!),
    enabled: !!id,
  });
}

export function useSaveDraft() {
  const qc = useQueryClient();

  return useMutation<Article, Error, Partial<Article>>({
    mutationFn: api.saveDraft,

    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}

export function useRequestAI() {
  const qc = useQueryClient();
  return useMutation<
    AISuggestionsResponse, // тип данных
    Error, // ошибка
    { articleId: string; type?: string } // тело запроса
  >({
    mutationFn: ({ articleId, type }) => api.requestAISuggestions(articleId, type),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['articles'] }),
  });
}
