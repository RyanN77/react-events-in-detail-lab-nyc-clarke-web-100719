import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

ReactDOM.render(


  <div>
    <CoordinatesButton onReceiveCoordinates={ mouse => console.log(mouse) } />
    <DelayedButton onDelayedClick={ event => console.log(event) } delay={3000} />
  </div>,

  document.getElementById('global')
);
