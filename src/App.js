import React from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Content from './Components/Layout/Content';

function App() {
  return (
    <div className="App">
      <Header />

      <Content />

      <Footer />  
    </div>
  );
}

export default App;
