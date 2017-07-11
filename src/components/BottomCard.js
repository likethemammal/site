import React, { Component } from 'react'

import css from './BottomCard.css'
import Avatar from './Avatar'
import SVG from './SVG'
import {
    PROFILE_DESC
} from './assets'

import svg from '../assets/stackoverflow.svg'

export default class BottomCard extends Component {
    render() {

        return <div className={css.container}>
            <Avatar/>
            <div className={css.blurb}>
                {PROFILE_DESC}
            </div>
            <div className={css.icon}>
                <SVG raw={svg}/>
            </div>
        </div>
    }
}