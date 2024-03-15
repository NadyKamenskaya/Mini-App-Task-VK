import React from 'react';
import { Controller } from 'react-hook-form';

import { Button, FormItem, Input } from '@vkontakte/vkui';
import useAgeForm from '../hooks/useAgeForm';

const AgeForm = () => {
  const { onSubmit, control, data, formState: { errors }, errorAxios } = useAgeForm();

  return (
    <form onSubmit={onSubmit} autoComplete='off'>
      <FormItem
        htmlFor='name'
        status={errors.name?.message || (errorAxios.length > 0) ? 'error' : 'valid'}
        bottom={errors.name?.message || (errorAxios.length > 0) ? errors.name?.message || errorAxios : data?.age}
        bottomId='name-type'
      >
        <Controller
          render={(props) => (
            <Input
              aria-labelledby='name-type'
              id='name'
              type='text'
              name='name'
              placeholder='Введите имя'
              onChange={props.field.onChange}
              getRef={props.field.ref}
              autoFocus
            />
          )}
          name="name"
          control={control}
        />
      </FormItem>
      <FormItem>
        <Button
          type='submit'
          mode='outline'
          appearance='positive'
          size='l'
          rounded
          stretched
        >
          Узнать возраст по имени
        </Button>
      </FormItem>
    </form>
  );
};

export default AgeForm;
