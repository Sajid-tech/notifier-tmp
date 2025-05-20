import { NotifierProvider } from './context/NotifierContext';
import { Notifier as NotifierComponent } from './components/Notifier';
import { useNotifier } from './hooks/useNotifier';
import { createNotifierService } from './services/NotifierService';
import './style.css';

const notifier = createNotifierService();

export {
  NotifierProvider,
  NotifierComponent,
  useNotifier,
};

export * from './types';
export default notifier;