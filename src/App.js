import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Content from './Components/Excercises/Content';
import { muscles, exercises } from './store';

export default class extends Component {
  states = {
    exercises
  }

  render() {
    return (
      <Fragment>
        <Header />
  
        <Content />
  
        <Footer
          muscles={muscles}
        />  
      </Fragment>
    );
  }
}
