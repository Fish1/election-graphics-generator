/* @refresh reload */
import { render } from 'solid-js/web';
import 'tailwindcss/tailwind.css';

import './index.css';
import App from './App';
import { Router } from '@solidjs/router';

render(() => {
  return (
    <Router>
      <App />
    </Router>
  );
},
document.getElementById('root') as HTMLElement);
