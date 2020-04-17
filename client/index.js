/* eslint-disable func-style */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import API from '../config.js';
const axios = require('axios');
const appDom = document.querySelector('#thao');
const config = API.GoogleAPI;
let areaData;
let hostData;
let zipCode;

function imageSlideClick(className) {
  const el = document.querySelector('.' + className);
}

var hostInfo;
// Get a random host
axios.get('http://localhost:3004/hostrandom')
  // then get the area based on the random host zipcode
  .then((host)=> {
    hostInfo = host.data;
    // return axios.get('http://localhost:3004/things', hostInfo);
    return axios.get(`http://localhost:3004/things?zip=${hostInfo.zip}`);
  })
  .then((stuff) => {
    ReactDOM.render(<App area={stuff.data} host={hostInfo} api={config} />, appDom);
  })
  .catch((err) => {
    console.log('An error has occured trying to retreive data: ' + err);
  });


// axios.get('http://localhost:3004/stuff')
//   .then(res => {
//     areaData = res.data[0];
//   })
//   .catch(err => console.log(err))
//   .then(() => {
//     axios.get('http://localhost:3004/host', {
//       params: {
//         zip: zipCode
//       }
//     })
//       .then(res => {
//         hostData = res.data[0];
//       })
//       .catch(err => console.log(err))
//       .then(() => {
//         ReactDOM.render(<App area={areaData} host={hostData} api={config}/>, appDom);
//       });
//   })
// });