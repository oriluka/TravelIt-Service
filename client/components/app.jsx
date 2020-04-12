/* eslint-disable func-style */
import React from 'react';
import Host from './host.jsx';
import Neighborhood from './neighborhood.jsx';
import Properties from './properties.jsx';
import ThingsToDo from './thingsToDo.jsx';
import './app.module.css';

function App(props) {
  return (
    <div>
      <div>
        <Host data={props.host}/>
      </div>
      <div>
        <Neighborhood data={props.host} api={props.api}/>
      </div>
      <div>
        <Properties data={props.area}/>
      </div>
      <div>
        <ThingsToDo data={props.area}/>
      </div>
    </div>
  );
}

export default App;