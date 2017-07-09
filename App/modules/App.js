import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from '../redux/store';

// COMPONENTS
import User from '../commons/components/User';
import Header from './Header';
import DatePicker from './DatePicker';
import Slider from '../commons/components/Slider';

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/datepicker" component={DatePicker} />
          <Route path="/slider" component={Slider} />
          <Route exact path="/user" component={User} />
        </div>
      </BrowserRouter>
    </Provider>
  </AppContainer>
);

export default App;