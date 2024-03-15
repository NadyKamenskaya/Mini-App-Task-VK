import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useAge from './useAge';
import { ageFormSchema } from '../model/ageFormSchema';

type FormData = {
  name: string;
};

const useAgeForm = () => {
  const { data, mutate, errorAxios } = useAge();
  const methods = useForm<FormData>({ resolver: yupResolver(ageFormSchema) });

  const onSubmit = methods.handleSubmit(
    async (formData: FormData) => {
      if (data?.name !== formData.name) {
        mutate(formData.name);
      }
    }
  );

  return { ...methods, onSubmit, data, errorAxios };
};

export default useAgeForm;
