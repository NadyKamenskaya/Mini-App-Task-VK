import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useAge from './useAge';
import { ageFormSchema } from '../model/ageFormSchema';

type FormData = {
  name: string;
};

type Props = {
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const useAgeForm = ({ setIsClick }: Props) => {
  const { data, mutate, errorAxios, isPending, queryClient } = useAge();
  const methods = useForm<FormData>({ resolver: yupResolver(ageFormSchema) });

  const onSubmit = methods.handleSubmit(
    (formData: FormData) => {
      if (isPending) {
        queryClient.cancelQueries({ queryKey: ['age'] });
      } else if (data?.name !== formData.name) {
        mutate(formData.name);
      }

      setIsClick(false);
    }
  );

  return { ...methods, onSubmit, data, errorAxios, mutate, isPending, queryClient };
};

export default useAgeForm;
