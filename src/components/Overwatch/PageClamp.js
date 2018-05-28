import React, { Component } from 'react'

import css from './PageClamp.css'

export default class PageClamp extends Component {

    static defaultProps = {
        className: css.container,
    }

    render() {

        const { className, children } = this.props

        return <div className={className}>
            {children}
        </div>
    }
}