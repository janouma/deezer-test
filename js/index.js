import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'components/root/index.js'

export default function init () {
  let root = document.getElementById('root')

  ReactDOM.render(
    <Root />,
    root
  )
}
