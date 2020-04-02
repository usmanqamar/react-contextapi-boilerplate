import React from 'react';
import { hot } from 'react-hot-loader/root';
import HelloWorld from './components/hello-world';
import Counter from './components/counter';
import Map from './components/map';

function App() {
  return (
    <>
      <HelloWorld title="Hello World" />
      <Counter />
      <Map />
    </>
  );
}

export default hot(App);
