import React, { Component } from 'react'

import css from './Avatar.css'
import {
    PROFILE_IMAGE_SRC
} from './assets'

export default class Avatar extends Component {
    render() {
        return <div className={css.container}>
            <img
                src={PROFILE_IMAGE_SRC}
                className={css.image}
            />
        </div>
    }
}