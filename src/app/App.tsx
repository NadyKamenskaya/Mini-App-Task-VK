import React, { useState } from 'react';
import { usePlatform } from '@vkontakte/vkui/dist/hooks/usePlatform';

import {
  AppRoot,
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  View
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import MiniApp from '../widgets/MiniApp/ui/MiniApp';
import FactPanel from '../widgets/FactPanel/ui/FactPanel';
import AgePanel from '../widgets/AgePanel/ui/AgePanel';

const App = () => {
  const platform = usePlatform();
  const [activePanel, setActivePanel] = useState<string>('main');

  return (
    <AppRoot mode='full'>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter='none' />}>
        <SplitCol autoSpaced>
            <View activePanel={activePanel}>
              <Panel id='main'>
                <MiniApp setActivePanel={setActivePanel} />
              </Panel>
              <Panel id='fact'>
                <FactPanel setActivePanel={setActivePanel} />
              </Panel>
              <Panel id='age'>
                <AgePanel setActivePanel={setActivePanel} />
              </Panel>
            </View>
          </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
