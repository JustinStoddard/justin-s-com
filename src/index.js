import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Loadable from 'react-loadable';
import Loader from './Loader';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

const MobileLoader = Loadable({
  loader: () => import('./components/mobile/Mobile'),
  loading: () => <Loader />,
})

const WebLoader = Loadable({
  loader: () => import('./components/web/App'),
  loading: () => <Loader />,
})

const renderApp = () => {
  if (isMobile) {
    return <MobileLoader />
  } else {
    return <WebLoader />
  }
}

ReactDOM.render(
  <BrowserRouter>
    {renderApp()}
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
