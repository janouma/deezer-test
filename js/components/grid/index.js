import React from 'react'

import './style.css'

export default class Grid extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      filtered: props.data
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      filtered: nextProps.data
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
            {header.map(name => (
               <td>
                 {name}
               </td>
             ))}
          </tr>
          {this.state.filtered.map(row => {
             const values = [
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

             return (<tr key={row.id}>
                       {values.map(value => (<td>
                                               {value}
                                             </td>))}
                     </tr>)
           })}
        </table>
      </div>
    )
  }

  _filter (keyWords) {
    const lowcaseWords = keyWords.toLowerCase()

    this.setState({
      filtered: this.props.data.filter(row => row.title.toLowerCase().includes(lowcaseWords))
    })
  }
}
