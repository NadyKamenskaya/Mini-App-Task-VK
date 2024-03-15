import React, { useEffect, useRef } from 'react';

import { Button, FormItem, Textarea } from '@vkontakte/vkui';

import useFact from '../hooks/useFact';

const Fact = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const { data, refetch } = useFact();

  useEffect(() => {
    if (ref.current && data) {
      const positionOfRange = data.indexOf(' ');

      ref.current.value = data;
      ref.current.focus();
      ref.current.setSelectionRange(positionOfRange, positionOfRange);
    }
  }, [data]);

  return (
    <>
      <FormItem top='Рандомный факт'>
        <Textarea getRef={ref} placeholder='Здесь появится факт' />
      </FormItem>
      <Button
        mode='outline'
        appearance='positive'
        size='l'
        rounded
        stretched
        onClick={() => refetch()}
      >
        Нажми на меня, чтобы получить рандомный факт
      </Button>      
    </>
  );
};

export default Fact;
