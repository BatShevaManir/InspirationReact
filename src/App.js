import React from 'react';
import Home from "../src/components/homePage/home";
import { Provider } from 'react-redux';

import Store from './redux/Store/Store';

function App() {
  return (
    <Provider store={Store}>
      {/* hi sara */}
      <Home />
    </Provider>
  );
}

export default App;
