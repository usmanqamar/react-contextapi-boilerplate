import React from 'react';
import ReactDOM from 'react-dom';
import { StateInspector } from 'reinspect';
import App from './App.jsx';
import Provider from './store';

ReactDOM.render(
  <StateInspector name="App">
    <Provider>
      <App />
    </Provider>
  </StateInspector>,
  document.getElementById('app'),
);
