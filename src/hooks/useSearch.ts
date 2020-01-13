import { useState, useCallback, useEffect } from "react";
import { api } from "../api";

export const useSearch = (term: string) => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getSearchResults = useCallback(async () => {
    try {
      const response = await api.get<{ businesses: Array<any> }>("/search", {
        params: {
          term,
          location: "Tokyo",
          limit: 50
        }
      });

      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something error occurred");
    }
  }, [term]);

  useEffect(() => {
    api
      .get<{ businesses: Array<any> }>("/search", {
        params: {
          term: "",
          location: "Tokyo",
          limit: 50
        }
      })
      .then(({ data }) => setResults(data.businesses));
  }, []);

  return { results, errorMessage, getSearchResults };
};
