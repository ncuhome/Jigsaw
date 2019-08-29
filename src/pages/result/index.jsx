import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./resultpage'),
  loading: Loading
})

class ResultpageLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default ResultpageLoadable
