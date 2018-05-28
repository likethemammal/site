import React from 'react'
import ReactDOM from 'react-dom'

import Overwatch from './components/Overwatch'

import 'raf/polyfill'
import 'react-tippy/dist/tippy.css';

ReactDOM.render(
    <Overwatch />,
    document.getElementById('app')
)