import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

type Props = {
  age: number,
  name: string,
};

const useAge = () => {
  const [errorAxios, setErrorAxios] = useState<string>('');

  const fetchAge = async (name: string): Promise<Props> => axios
    .get('https://api.agify.io/', { params: { name } })
    .then((response) => {
      const age = response.data.age;
      const name = response.data.name;
      setErrorAxios('');

      return { name, age };
    })
    .catch((error) => {
      setErrorAxios(error.message);

      return error;
    });

    const queryClient = useQueryClient();
    const { data, mutate, isPending } = useMutation({ mutationKey: ['age'], mutationFn: fetchAge });

    return { data, mutate, errorAxios, isPending, queryClient };
};

export default useAge;
