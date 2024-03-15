import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

type Props = {
  age: number,
  name: string,
};

const useAge = () => {
  const [errorAxios, setErrorAxios] = useState<string>('');

  const fetchAge = (name: string): Promise<Props> => axios
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

    useQueryClient();
    const { data, mutate } = useMutation({ mutationKey: ['age'], mutationFn: fetchAge });

    return { data, mutate, errorAxios };
};

export default useAge;
