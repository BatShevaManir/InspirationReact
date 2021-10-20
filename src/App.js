import React from 'react';
import './App.css';
import Home from "../src/components/homePage/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import Store from './redux/Store/Store';

function App() {
  return (
    <Provider store={Store}>

      <Home />
    </Provider>
  );
}

export default App;
