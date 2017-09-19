import React from 'react'

import './style.css'

export default function Grid ({data}) {
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
    <table className='dzr-grid'>
      <tr>
        {header.map(name => (
           <td>
             {name}
           </td>
         ))}
      </tr>
      {data.map(row => {
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
                  {values.map(value => (<td>{value}</td>))}
                </tr>)
       })}
    </table>
  )
}
