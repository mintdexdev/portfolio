import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from '@/app/App.jsx'
import { ViewportSizeProvider } from '@/context/ViewportSize.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViewportSizeProvider>
      <App />
    </ViewportSizeProvider>
  </StrictMode>,
);