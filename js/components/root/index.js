import React from 'react'
import Search from 'components/search/index.js'
import Grid from 'components/grid/index.js'
import api from 'utils/api.js'

const PAGE_SIZE = 25

export default class Root extends React.Component {
  constructor (props) {
    super(props)

    this.offset = 0

    this.state = {
      data: []
    }
  }

  componentDidMount () {
    window.addEventListener(
      'scroll',
      () => this._detectEndScroll()
    )
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
    const results = await api.get(`http://api.deezer.com/search/track?q=${query}&index=${this.offset}&limit=${PAGE_SIZE}`)

    this.setState ({
      data: results.data
    })
  }

  _detectEndScroll () {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      // DEBUG
      console.debug('end scroll detected')
      // END DEBUG
    }
  }
}
