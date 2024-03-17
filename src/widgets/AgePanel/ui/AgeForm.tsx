import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

import { Button, FormField, FormItem } from '@vkontakte/vkui';
import { DebounceInput } from 'react-debounce-input';

import useAgeForm from '../hooks/useAgeForm';
import { styleDebounceInput } from '../styled/styled';
import { latinLetters } from '../../../shared/helpers/validations/validations';

const AgeForm = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [prevValue, setPrevValue] = useState<string>('');

  const { onSubmit, control, data, formState: { errors }, errorAxios, watch, mutate, isPending, queryClient } = useAgeForm({ setIsClick });
  const value = watch('name');

  useEffect(() => {
    setIsValid(true);

    if (value) {
      (value.match(latinLetters) !== null) ? setIsValid(true) : setIsValid(false);

      if (!isClick && prevValue !== value && value.match(latinLetters)) {      
        if (isPending) {
          queryClient.cancelQueries({ queryKey: ['age'] });
        } else {
          mutate(value);
        }
        setPrevValue(value);
      }
    }
  }, [value, isClick, isPending, errors, prevValue, queryClient, mutate]);

  return (
    <form onSubmit={onSubmit} autoComplete='off'>
      <FormItem
        htmlFor='name'
        status={errors.name?.message || (errorAxios.length > 0) || !isValid ? 'error' : 'valid'}
        bottom={errors.name?.message || (errorAxios.length > 0) || !isValid ? errors.name?.message || errorAxios || 'Допустим ввод только латинских букв' : data?.age}
        bottomId='name-type'
      >
        <FormField>
          <Controller
            render={({ field: { ref, ...field } }) => (
              <DebounceInput
                aria-labelledby='name-type'
                id='name'
                type='text'
                name='name'
                placeholder='Введите имя'
                debounceTimeout={!isClick ? 3000 : 0}
                value={field.value}
                onChange={field.onChange}
                autoFocus
                style={styleDebounceInput}
              />
            )}
            name='name'
            control={control}
          />
        </FormField>
      </FormItem>
      <FormItem>
        <Button
          type='submit'
          mode='outline'
          appearance='positive'
          size='l'
          rounded
          stretched
          onClick={() => setIsClick(true)}
        >
          Узнать возраст по имени
        </Button>
      </FormItem>
    </form>
  );
};

export default AgeForm;
