import React, { Component } from 'react'

import css from './Avatar.css'
import {
    PROFILE_IMAGE_SRC
} from './assets'

export default class Avatar extends Component {

    static defaultProps = {
        className: css.container,
    }

    render() {
        const { className } = this.props

        return <img
            src={PROFILE_IMAGE_SRC}
            className={className}
        />
    }
}