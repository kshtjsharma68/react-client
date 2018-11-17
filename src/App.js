// src/js/component/App.js

import React, { Component } from 'react';
import Routers from './js/components/router';


export default class App extends Component {
  render() {
    return (
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
            <Routers />
          </div>
        </div>
      );
  }
}  