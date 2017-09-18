import React from 'react'
import ReactDOM from 'react-dom'
import Search from 'components/search/index.js'
import Grid from 'components/grid/index.js'

// DEBUG
const sample = {
  'data': [
    {
      'id': 881443,
      'readable': true,
      'title': 'Autour De Moi Les Fous',
      'title_short': 'Autour De Moi Les Fous',
      'title_version': '',
      'link': 'http:\/\/www.deezer.com\/track\/881443',
      'duration': 335,
      'rank': 429258,
      'explicit_lyrics': false,
      'preview': 'http:\/\/e-cdn-preview-8.deezer.com\/stream\/8bfd857eed45bb627287403eeceee531-3.mp3',
      'artist': {
        'id': 463,
        'name': 'Saez',
        'link': 'http:\/\/www.deezer.com\/artist\/463',
        'picture': 'http:\/\/api.deezer.com\/artist\/463\/image',
        'picture_small': 'http:\/\/e-cdn-images.deezer.com\/images\/artist\/7536b831188ccd6bb0a35cf036996e69\/56x56-000000-80-0-0.jpg',
        'picture_medium': 'http:\/\/e-cdn-images.deezer.com\/images\/artist\/7536b831188ccd6bb0a35cf036996e69\/250x250-000000-80-0-0.jpg',
        'picture_big': 'http:\/\/e-cdn-images.deezer.com\/images\/artist\/7536b831188ccd6bb0a35cf036996e69\/500x500-000000-80-0-0.jpg',
        'picture_xl': 'http:\/\/e-cdn-images.deezer.com\/images\/artist\/7536b831188ccd6bb0a35cf036996e69\/1000x1000-000000-80-0-0.jpg',
        'tracklist': 'http:\/\/api.deezer.com\/artist\/463\/top?limit=50',
        'type': 'artist'
      },
      'album': {
        'id': 100098,
        'title': 'Debbie',
        'cover': 'http:\/\/api.deezer.com\/album\/100098\/image',
        'cover_small': 'http:\/\/e-cdn-images.deezer.com\/images\/cover\/b23d057cf7e6c92d1d861a8816954477\/56x56-000000-80-0-0.jpg',
        'cover_medium': 'http:\/\/e-cdn-images.deezer.com\/images\/cover\/b23d057cf7e6c92d1d861a8816954477\/250x250-000000-80-0-0.jpg',
        'cover_big': 'http:\/\/e-cdn-images.deezer.com\/images\/cover\/b23d057cf7e6c92d1d861a8816954477\/500x500-000000-80-0-0.jpg',
        'cover_xl': 'http:\/\/e-cdn-images.deezer.com\/images\/cover\/b23d057cf7e6c92d1d861a8816954477\/1000x1000-000000-80-0-0.jpg',
        'tracklist': 'http:\/\/api.deezer.com\/album\/100098\/tracks',
        'type': 'album'
      },
      'type': 'track'
    }
  ],
  'total': 1
}
// END DEBUG

export default function init () {
  let root = document.getElementById('root')

  ReactDOM.render(
    <div>
      <Search />
      <Grid data={sample.data} />
    </div>,
    root
  )
}
