import React from 'react'

export default class Search extends React.Component {
  render () {
    return <form onSubmit={e => this._search(e)}>
             <input type='text' placeholder='type in key words' onInput={e => this.query = e.target.value} />
           </form>
  }

  _search (e) {
    e.preventDefault()
    this.props.search(this.query)
  }
}
