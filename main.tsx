import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Home from './app/page';
import 'katex/dist/katex.min.css';
import './app/globals.css';

createRoot(document.getElementById('root')!).render(<StrictMode><Home /></StrictMode>);
