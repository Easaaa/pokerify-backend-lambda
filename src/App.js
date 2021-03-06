import React, { Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import logo from './logo.svg';
import './App.css';

const HELLO = gql`
  query {
    hello
  }
`;

const LambdaDemo = () => {
  const { data } = useQuery(HELLO);
  return <div>A greeting from the server: {data && data.hello} </div>;
};

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LambdaDemo />
      </div>
    );
  }
}

export default App;
