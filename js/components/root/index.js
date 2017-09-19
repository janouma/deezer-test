import React from 'react'
import Search from 'components/search/index.js'
import Grid from 'components/grid/index.js'
import api from 'utils/api.js'

const BATCH_SIZE = 10
const SCROLL_RESET_DELAY = 500

export default class Root extends React.Component {
  constructor (props) {
    super(props)

    this.pageSize = BATCH_SIZE
    this.wait = false

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
    if (query) {
      this.query = query
      this.pageSize = BATCH_SIZE
    }

    const results = await api.get(`http://api.deezer.com/search/track?q=${query || this.query}&limit=${this.pageSize}`)

    this.setState ({
      data: results.data
    })
  }

  _detectEndScroll () {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight && !this.wait) {
      this.wait = true

      if (this.query) {
        this.pageSize += BATCH_SIZE
        this._search()
      }

      window.setTimeout(() => (this.wait = false), SCROLL_RESET_DELAY)
    }
  }
}
