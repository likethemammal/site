import React, { Component } from 'react'

import _ from 'lodash'

import css from './FloatingCard.css'
import { socials } from './assets'
import Avatar from './Avatar'

import SVG from './SVG'

export default class FloatingCard extends Component {
    render() {

        const els = _.map(socials, (({ icon, label, link, color }, key) => {

            return <a
                key={key}
                href={link}
                className={css.link}
            >
                <div
                    className={css.iconContainer}
                    style={{background: color}}
                >
                    <i className={css.icon}>
                        <SVG raw={icon}/>
                    </i>
                </div>
                <span className={css.label}>{label}</span>
            </a>
        }))

        return <div className={css.container}>
            <div className={css.content}>
                <Avatar className={css.avatar}/>
                <div className={css.inner}>
                    <div className={css.socials}>
                        {els}
                    </div>
                </div>
            </div>
        </div>
    }
}