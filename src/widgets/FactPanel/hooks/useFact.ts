import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const useFact = () => {
  const fetchFact = (): Promise<string> => axios
    .get('https://catfact.ninja/fact')
    .then((response) => {
      const data = response.data.fact;

      return data;
    });

  useQueryClient();
  const { data, refetch } = useQuery({ queryKey: ['fact'], queryFn: fetchFact, enabled: false });

  return { data, refetch };
};

export default useFact;
