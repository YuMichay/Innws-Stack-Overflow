import { useState, useEffect } from "react";
import { getSnippet } from "../api/snippets";
import { Snippet } from "../types/snippets";

export const useSnippet = (id?: string) => {
  const [snippet, setSnippet] = useState<Snippet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchSnippet = async () => {
      try {
        const data = await getSnippet(+id);
        setSnippet(data);
      } catch (err) {
        setError("Failed to fetch snippet");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSnippet();
  }, [id]);

  return {
    snippet,
    comments: snippet?.comments || [],
    loading,
    error,
  };
};
