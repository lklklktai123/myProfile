import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { ErrorContextProvider } from './Context/error-context';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <ErrorContextProvider>
      <Suspense fallback={<span>Loading...</span>}>
        <App />
      </Suspense>
    </ErrorContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
