import React, { Fragment } from 'react';
import Routers from './Router';
import GlobalReset from './style/reset';
import { usePreFetch } from '@/lib/hooks/usePreFetch';

function App() {
  usePreFetch();

  return (
    <Fragment>
      <GlobalReset />
      <Routers />
    </Fragment>
  );
}

export default App;
