import React from 'react'
import Search from 'components/search/index.js'
import Grid from 'components/grid/index.js'
import api from 'utils/api.js'

export default class Root extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render () {
    return (
      <div>
        <Search search={query => this._search(query)} />
        <Grid data={this.state.data} />
      </div>
    )
  }

  async _search (query) {

    // DEBUG
    console.debug('searching for:', query)
    // END DEBUG

    const results = await api.get(`http://api.deezer.com/search/track?q=${query}`)

    // DEBUG
    console.debug('results:', results)
    // END DEBUG

    this.setState({
      data: results.data
    })
  }
}
