import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { App } from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

reportWebVitals();
