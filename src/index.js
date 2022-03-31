import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
// import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './App/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';

import store from './redux';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <App/>
          </QueryClientProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
