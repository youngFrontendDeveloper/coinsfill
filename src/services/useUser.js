import useSWR from "swr";

const fetcher = (...args) => fetch( ...args ).then( res => res.json() );

export function useUser() {
  const { data, error, isLoading } = useSWR( "https://test-task.test211.workers.dev/login", fetcher );

  return {
    user: data,
    isLoading,
    isError: error
  };

}