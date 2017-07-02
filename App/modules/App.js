import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from '../redux/store';

// COMPONENTS
import User from '../commons/components/User';
import Home from './Home';

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} />
          <Route exact path="/user" component={User} />
        </div>
      </BrowserRouter>
    </Provider>
  </AppContainer>
);

export default App;