import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import RedBox from 'redbox-react';

import App from './modules/App';

const MOUNT_NODE = document.getElementById('app');


const renderRoots = () => {
  render(
    <App />,
    MOUNT_NODE,
  );
};

if (module.hot) {
  const renderError = error => {
    render(<RedBox error={error} />, MOUNT_NODE);
  };

  const reRenderRoots = () => {
    try {
      renderRoots();
    } catch (e) {
      renderError(e);
    }
  };

  module.hot.accept('./modules/App', () => {
    setImmediate(() => {
      unmountComponentAtNode(MOUNT_NODE);
      reRenderRoots();
    });
  });
}

renderRoots();