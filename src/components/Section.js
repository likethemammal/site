import React, { Component } from 'react'

import _ from 'lodash'
import css from './Section.css'

export default class Section extends Component {
    render() {

        const { values, title } = this.props
        const items = values.map(({
            name,
            link,
            blurb
        }, i) => {

            const stringBlurb = !_.isObject(blurb)

            const blurbEl = stringBlurb ? <span
                className={css.blurb}
                dangerouslySetInnerHTML={{__html: blurb}}
            /> : <span className={css.blurb} >
                {blurb}
            </span>

            return <div key={i}>
                <a
                    href={link}
                    className={css.link}
                >
                    {name}
                </a>
                {blurbEl}
            </div>
        })

        return <div className={css.container}>
            <div className={css.title}>
                {title.toUpperCase()}
            </div>
            {items}
        </div>
    }
}