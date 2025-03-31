import { useEffect, useState } from "react";

import { Snippet } from "../types/snippets";
import { getSnippets } from "../api/snippets";
import { useProfile } from "../../entities/user/api/getProfileInfo";

export const useMySnippets = (page: number) => {
  const [mySnippets, setMySnippets] = useState<Snippet[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const id = useProfile().data?.id;

  useEffect(() => {
    const fetchSnippets = async () => {
      setLoading(true);
      setError(null);

      try {
        let allSnippets: Snippet[] = [];
        let currentPage = 1;
        let totalPagesFetched = 1;

        do {
          const response = await getSnippets(currentPage);
          if (response) {
            allSnippets = [...allSnippets, ...response.data];
            totalPagesFetched = response.meta.totalPages;
            currentPage++;
          } else {
            break;
          }
        } while (currentPage <= totalPagesFetched);

        const filteredSnippets = allSnippets.filter(snippet => snippet.user.id === id);

        setMySnippets(filteredSnippets);
        setTotalPages(Math.ceil(filteredSnippets.length / 10));
        
      } catch (err) {
        console.error("Failed to fetch snippets", err);
        setError("Failed to load snippets");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSnippets();
    }
  }, [id, page]);

  return { mySnippets, loading, error, totalPages };
}