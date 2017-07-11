import React, { Component } from 'react'

import _ from 'lodash'

import css from './FloatingCard.css'
import { socials } from './assets'
import Avatar from './Avatar'

import svg from '../assets/stackoverflow.svg'
import SVG from './SVG'

export default class FloatingCard extends Component {
    render() {

        const els = _.map(socials, (({ icon, label, link }, key) => {
            return <a
                key={key}
                href={link}
                className={css.link}
            >
                <i className={`${css.icon} ${icon}`} />
                <span className={css.label}>{label}</span>
            </a>
        }))

        return <div className={css.container}>
            <Avatar/>
            {els}
            <div className={css.icon}>
                <SVG raw={svg}/>
            </div>
        </div>
    }
}