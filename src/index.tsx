import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import { appStore } from './store/appStore.ts';
import Cat from './components/Cat/index.tsx';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <ReduxProvider store={appStore}>
    <Cat />
  </ReduxProvider>
);
