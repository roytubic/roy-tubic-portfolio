import React from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'

import Website from './Website'

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    this.props.dispatch(fetchFruits())
  }

// The component will show a list of websites that I have created via preview picture, a link and brief description.

  render () {
    return (
      <div className='app'>
        <h1></h1>
        <ul>
         <Website />
        </ul>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
