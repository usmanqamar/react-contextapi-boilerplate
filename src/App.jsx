import React from 'react';
import { hot } from 'react-hot-loader/root';
import HelloWorld from './components/hello-world';
import Counter from './components/counter';

function App() {
  return (
    <>
      <HelloWorld title="Hello World" />
      <Counter />
    </>
  );
}

export default hot(App);
