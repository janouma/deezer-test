import React from 'react'

import './style.css'

function getValues (row) {
  return [
    row.id,
    row.readable ? 'yes' : 'no',
    row.title,
    row.link,
    row.duration,
    row.rank,
    row.explicit_lyrics,
    row.preview,
    row.artist.name,
    row.album.title,
    row.type
  ]
}

export default class Grid extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      filtered: props.data.map(getValues)
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      filtered: nextProps.data.map(getValues)
    })
  }

  render () {
    const header = [
      'id',
      'readable',
      'title',
      'link',
      'duration',
      'rank',
      'explicit lyrics',
      'preview',
      'artist',
      'album',
      'type'
    ]

    return (
      <div>
        <p>
          <input type='text' placeholder='filter' onInput={e => this._filter(e.target.value)} />
        </p>
        <table className='dzr-grid'>
          <tr>
            {header.map((name, index) => (
               <td>
                 <button className='col' onClick={() => this._sortBy(index)}>
                   {name}
                 </button>
               </td>
             ))}
          </tr>
          {this.state.filtered.map(values => {
             return (
               <tr key={values[0]}>
                 {values.map(value => {
                    return (
                      <td>
                        {value}
                      </td>
                    )
                  })}
               </tr>
             )
           })}
        </table>
      </div>
    )
  }

  _filter (keyWords) {
    const lowcaseWords = keyWords.toLowerCase()

    this.setState({
      filtered: this.props.data
        .map(getValues)
        .filter(row => row[2].toLowerCase().includes(lowcaseWords))
    })
  }

  _sortBy (index) {
    const filtered = Array.from(this.state.filtered)

    filtered.sort((a, b) => {
      if (a[index] < b[index]) {
        return -1
      }

      if (a[index] > b[index]) {
        return 1
      }

      return 0
    })

    this.setState({filtered})
  }
}
