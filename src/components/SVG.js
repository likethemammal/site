import React, { Component } from 'react'

import css from './SVG.css'

const SVG_PREFIX = 'data:image/svg+xml;utf8,'

export default class SVG extends Component {

    static defaultProps = {
        className: css.image,
    }

    render() {

        const { raw, className } = this.props

        return <div
            className={className}
            dangerouslySetInnerHTML={{__html: raw}}
        />
    }
}