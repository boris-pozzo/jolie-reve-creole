import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';


import App from '../components/App';


const reRender = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

reRender(App)

if (module.hot) {
  module.hot.accept('../components/App', () => { reRender(App) })
}