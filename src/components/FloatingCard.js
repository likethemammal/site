import React, { Component } from 'react'

import _ from 'lodash'

import css from './FloatingCard.css'
import { socials } from './assets'
import Avatar from './Avatar'

import SVG from './SVG'

export default class FloatingCard extends Component {
    render() {

        const els = _.map(socials, (({ icon, label, link }, key) => {
            return <a
                key={key}
                href={link}
                className={css.link}
            >
                <i className={css.icon}>
                    <SVG raw={icon}/>
                </i>
                <span className={css.label}>{label}</span>
            </a>
        }))

        return <div className={css.container}>
            <Avatar className={css.avatar}/>
            <div className={css.socials}>
                {els}
            </div>
        </div>
    }
}