import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Content from './Components/Excercises/Content';
import { muscles, exercises } from './store';

export default class extends Component {
  state = {
    exercises
  }

  getExercisesByMuscles() {
    return Object.entries(
       this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    return (
      <Fragment>
        <Header />
  
        <Content
          exercises = {exercises}
        />
  
        <Footer
          muscles={muscles}
        />  
      </Fragment>
    );
  }
}
