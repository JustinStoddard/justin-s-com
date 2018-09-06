import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import App from './components/web/App';
import Mobile from './components/mobile/Mobile';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () => {
  if (isMobile) {
    return <Mobile />
  } else {
    return <App />
  }
}

ReactDOM.render(
  <BrowserRouter>
    {renderApp()}
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
