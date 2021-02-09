import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./sortpage'),
  loading: Loading
})

class SortpageLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default SortpageLoadable
