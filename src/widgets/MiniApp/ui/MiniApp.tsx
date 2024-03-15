import { Button, Group, PanelHeader } from "@vkontakte/vkui";
import React from "react";

type Props = {
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const MiniApp = ({ setActivePanel }: Props) => {
  return (
    <>
      <PanelHeader>
        Главная
      </PanelHeader>
      <Group>
        <Button
          mode='outline'
          appearance='accent-invariable'
          size='l'
          rounded
          style={{ marginRight: '20px' }}        
          onClick={() => setActivePanel('fact')}
        >
          Получить рандомный факт
        </Button>
        <Button
          mode='outline'
          appearance='accent-invariable'
          size='l'
          rounded
          style={{ marginRight: '20px' }}     
          onClick={() => setActivePanel('age')}
        >
          Узнать возраст по имени
        </Button>
      </Group>
    </>
  );
};

export default MiniApp;
