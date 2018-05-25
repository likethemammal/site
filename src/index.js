import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import './global.css'
import 'raf/polyfill'
import 'react-tippy/dist/tippy.css';

ReactDOM.render(
    <App />,
    document.getElementById('app')
)