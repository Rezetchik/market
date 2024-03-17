import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import '@vkontakte/vkui/dist/vkui.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <AdaptivityProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AdaptivityProvider>
  </ConfigProvider>,
);
