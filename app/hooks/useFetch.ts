import { useCallback, useState } from 'react';

interface UseFetchResponse<Data> {
  sendRequest: (
    url: string,
    method?: string,
    body?: any,
    headers?: Record<string, string>,
  ) => Promise<Data | string>;
  clearError: () => void;
  error: string | null;
  isLoading: boolean;
}

const useFetch = <Data = any>(): UseFetchResponse<Data> => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(
    async (
      url: string,
      method: string = 'GET',
      body: any = null,
      headers: Record<string, string> = {},
    ) => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { method, body, headers });
        const responseData = await response.json();
        if (!response.ok) {
          return responseData;
        }
        setIsLoading(false);
        return responseData;
      } catch (err: any) {
        setError(err.message || 'An error occurred.');
        setIsLoading(false);
      }
    },
    [],
  );

  const clearError = () => {
    setError(null);
  };

  return { sendRequest, clearError, error, isLoading };
};

export default useFetch;
