import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import stein from './stein.svg';
import saks from './saks.svg';
import papir from './papir.svg';
import './App.css';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    // background: '#FEA900',
  },
  slide2: {
    // background: '#B3DC4A',
  },
  slide3: {
    // background: '#6AC0FF',
  },
};

const MyComponent = ({index}) => (
  <SwipeableViews index={index}>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      	<img className="ikon" src={stein} alt="Stein"/>
	<br/>
	Stein
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
      	<img className="ikon" src={saks} alt="Saks"/>
	<br/>
	Saks
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
      	<img className="ikon" src={papir} alt="Papir"/>
	<br/>
	Papir
    </div>
  </SwipeableViews>
);

// export default MyComponent;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Stein, saks, papir</h1>
        </header>
        <div className="App-intro">
            <b>Du</b>
	    <br/>
	    <MyComponent index={2}/>
	    
	    <br/>	    
	    <b>Datamaskin</b>
	    <br/>
    	    <MyComponent index={0}/>
	    <br/>
	    <button className="knapp">
	      Spill
	    </button>
         </div>
      </div>
    );
  }
}

export default App;
