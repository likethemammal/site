import React, { Component } from 'react'
import _ from 'lodash'

import css from './Item.css'

export default class Item extends Component {
    render() {
        const { blurb, link, name } = this.props

        const stringBlurb = !_.isObject(blurb)

        const blurbEl = stringBlurb ? <span
            className={css.blurb}
            dangerouslySetInnerHTML={{__html: blurb}}
        /> : <span className={css.blurb} >
            {blurb}
        </span>

        return <li className={css.container}>
            <a
                href={link}
                className={css.link}
            >
                {name}
            </a>
            {blurbEl}
        </li>
    }
}
