import React from 'react';
import { UserProvider } from './UserContext'
import './App.css';
import HomePage from './HomePage'

function App() {
  const user = { name: 'Rutenis', loggedIn: true }

  return (
    <UserProvider value={user}>
      <HomePage />
    </UserProvider>
  );
}

export default App;
