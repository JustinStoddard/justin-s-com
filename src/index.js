import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Loadable from 'react-loadable';
import Loader from './Loader';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import ArObject from './ArObject.js';

const MobileLoader = Loadable({
  loader: () => import('./components/mobile/Mobile'),
  loading: () => <Loader/>, //Tried to dynamically import the Loader but that didnt work :( .....Kind of ironic
});

const WebLoader = Loadable({
  loader: () => import('./components/web/App'),
  loading: () => <Loader/>,
});

//I'm doing this, this way because of the way Semantic-UI-React handles the responsive aspects of their styled components. Doing this is easier than putting "responsive" in front of every styled tag.
const renderApp = () => {
  if (window.location.pathname === "/webar") {
    return <div dangerouslySetInnerHTML={createMarkUp()}></div>
  } else {
    if (isMobile) {
      return <MobileLoader/>
    } else {
    return <WebLoader/>
    }
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
