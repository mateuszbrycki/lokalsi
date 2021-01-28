import React from 'react';
import * as ReactDOM from 'react-dom'
import './index.css'
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"

import store from 'store/store'
import AppContainer from "./AppContainer"

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <AppContainer />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
