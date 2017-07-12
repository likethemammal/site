import React, { Component } from 'react'
import _ from 'lodash'

import css from './Item.css'

export default class Item extends Component {
    render() {
        const { blurb, link, name } = this.props

        const stringBlurb = !_.isObject(blurb)
        const noHref = !link

        const blurbEl = stringBlurb ? <span
            className={css.blurb}
            dangerouslySetInnerHTML={{__html: blurb}}
        /> : <span className={css.blurb} >
            {blurb}
        </span>

        const nameAndLinkEl = <a
            href={link}
            className={css.link}
        >
            {name}
        </a>

        const nameEl = <span
            className={css.link}
        >
            {name}
        </span>

        return <li className={css.container}>
            {noHref ?  nameEl : nameAndLinkEl}
            {blurbEl}
        </li>
    }
}
