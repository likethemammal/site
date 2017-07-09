import React, { Component } from 'react'

import css from './FloatingCard.css'
import Avatar from './Avatar'
import {
    PROFILE_DESC
} from './assets'

export default class FloatingCard extends Component {
    render() {

        return <div className={css.container}>
            <Avatar/>
            <div className={css.blurb}>
                {PROFILE_DESC}
            </div>
        </div>
    }
}