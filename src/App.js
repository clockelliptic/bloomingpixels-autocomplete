import React, { useContext, } from 'react';
import './App.css';
import { Slider, Slide } from './Components/react-fullslide'
import {DarkSlide, LightSlide, MapSlide } from './Components/Slides'


export default function App() {

  return (
    <>
    <Slider orientation={'x'} navDotPos={'bottom'} transDuration={0.8} navDotColor={'rgba(100, 100, 100, 1)'}>

      <Slide>
        <LightSlide />
      </Slide>

      <Slide>
        <DarkSlide />
      </Slide>

      <Slide>
        <MapSlide />
      </Slide>

    </Slider>
    </>
  );
}