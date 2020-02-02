import React from 'react';
import { Autocomplete } from './Components'
import './App.css';
import { Slider, Slide } from './Components/react-fullslide'
import logo from './logo.svg'

export default function App() {
  return (
    <>
    <Slider orientation={'y'} navDotPos={'left'} transDuration={0.8} navDotColor={'rgba(100, 100, 100, 1)'}>
      <Slide>
        <div
          style={{
            position: "relative",
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            background: '#fff',
          }}
        >

          <div className="message-alert">
            Please scroll or swipe to navigate examples.
          </div>
          <div className="logo-box" />
          <div style={{flex: 1, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center'}}>
            <Autocomplete themeClass={"light"} />
          </div>

        </div>
      </Slide>
      <Slide>
        <div
          style={{
            position: "relative",
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            background: '#111',
          }}
        >
          <div className="logo-box" />
          <div style={{flex: 1,  width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center'}}>
            <Autocomplete themeClass={"dark"} />
          </div>
        </div>
      </Slide>
    </Slider>
    </>
  );
}


