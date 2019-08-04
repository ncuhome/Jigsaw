import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./roompage'),
  loading: Loading
})

class addpageLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default addpageLoadable
