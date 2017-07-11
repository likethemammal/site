import React, { Component } from 'react'

import css from './Avatar.css'
import {
    PROFILE_IMAGE_SRC
} from './assets'

export default class Avatar extends Component {
    render() {
        return <img
            src={PROFILE_IMAGE_SRC}
            className={css.container}
        />
    }
}