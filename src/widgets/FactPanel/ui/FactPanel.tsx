import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Group, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import Fact from './Fact';

type Props = {
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const FactPanel = ({ setActivePanel }: Props) => {
  const queryClient = new QueryClient();
  
  return (
    <>
      <PanelHeader
        delimiter='spacing'
        before={<PanelHeaderBack onClick={() => setActivePanel('main')} />}
      >
        Получить рандомный факт
      </PanelHeader>
      <Group>
        <QueryClientProvider client={queryClient}>
          <Fact />
        </QueryClientProvider>
      </Group>
    </>
  );
};

export default FactPanel;
