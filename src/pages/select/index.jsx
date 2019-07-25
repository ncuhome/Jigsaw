import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./selectpage'),
  loading: Loading
})

class SelectLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default SelectLoadable
