import React, { Component } from 'react'

import css from './BottomCard.css'
import Avatar from './Avatar'
import {
    PROFILE_DESC
} from './assets'

export default class BottomCard extends Component {
    render() {

        return <section
            id="bio"
            className={css.container}
        >
            <div className={css.content}>
                <div className={css.inner}>
                    <div className={css.avatarContainer}>
                        <Avatar/>
                    </div>
                    <div className={css.blurb}>
                        {PROFILE_DESC}
                    </div>
                </div>
            </div>
        </section>
    }
}