import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Loader';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import ArObject from './ArObject.js';

const WebLoader = Loadable({
  loader: () => import('./components/web/App'),
  loading: () => <Loader/>,
});

const renderApp = () => {
  if (window.location.pathname === "/webar") {
    return <div dangerouslySetInnerHTML={createMarkUp()}></div>
  } else {
    return <WebLoader/>
  }
};

const createMarkUp = () => {
  return {__html: ArObject.box}
};

setTimeout(() => {
  ReactDOM.render(
    <BrowserRouter>
      {renderApp()}
    </BrowserRouter>,
    document.getElementById('root')
  );
});
registerServiceWorker();
