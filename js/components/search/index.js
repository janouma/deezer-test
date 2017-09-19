import React from 'react'

export default class Search extends React.Component {
  render () {
    return (
      <form onSubmit={e => this._search(e)}>
        <p>
          <input type='text' placeholder='search' onInput={e => this.query = e.target.value} />
        </p>
      </form>
    )
  }

  _search (e) {
    e.preventDefault()
    this.props.search(this.query)
  }
}
