import React from 'react';
import { createRoot } from 'react-dom/client';
import bridge from '@vkontakte/vk-bridge';

import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';

import App from './app/App';

bridge.send('VKWebAppInit');

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
