import React from 'react';
import ReactDOM from 'react-dom';
import { StateInspector } from 'reinspect';
import App from './App.jsx';
import Provider from './store';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <StateInspector name="App">
    <ErrorBoundary>
      <Provider>
        <App />
      </Provider>
    </ErrorBoundary>
  </StateInspector>,
  document.getElementById('app'),
);
