import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Group, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import AgeForm from './AgeForm';

type Props = {
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const AgePanel = ({ setActivePanel }: Props) => {
  const queryClient = new QueryClient();
  
  return (
    <>
      <PanelHeader
        delimiter='spacing'
        before={<PanelHeaderBack onClick={() => setActivePanel('main')} />}
      >
        Узнать возраст по имени
      </PanelHeader>
      <Group>
        <QueryClientProvider client={queryClient}>
          <AgeForm />
        </QueryClientProvider>
      </Group>
    </>
  );
};

export default AgePanel;
