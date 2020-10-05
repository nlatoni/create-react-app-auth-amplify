import React from 'react';
import './App.css';
import { Authenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import AuthWrapper from './AuthWrapper';
import "./css/tailwind.css";

Amplify.configure(aws_exports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Authenticator hideDefault={true} amplifyConfig={aws_exports}>
          <AuthWrapper />
        </Authenticator>
      </header>
    </div>
  );
}

export default App;
