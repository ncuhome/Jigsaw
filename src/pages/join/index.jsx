import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./joinpage'),
  loading: Loading
})

class joinpageLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default joinpageLoadable
