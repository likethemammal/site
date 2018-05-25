import React, { Component } from 'react'
import _ from 'lodash'

import css from './Item.css'

import {
    Tooltip,
} from 'react-tippy'

export default class Item extends Component {

    render() {
        const { blurb, link, name, image } = this.props

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
            target="_blank"
        >
            {name}
        </a>

        const nameEl = <span
            className={css.link}
        >
            {name}
        </span>

        return <Tooltip
            html={<img className={css.tooltip} src={image} />}
            trigger="mouseenter"
            position="right"
            distance={0}
            followCursor={true}
        >
            <li
                className={css.container}
            >
                {noHref ?  nameEl : nameAndLinkEl}
                {blurbEl}
            </li>
        </Tooltip>
    }
}
