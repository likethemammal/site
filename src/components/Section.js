import React, { Component } from 'react'

import css from './Section.css'

import Item from './Item'

export default class Section extends Component {
    render() {

        const { values, title, children } = this.props
        const items = values.map((item, i) => <Item
            key={i}
            {...item}
        />)
        const hash = `#${title.toLowerCase()}`

        return <section
            id={hash}
            className={css.container}
        >
            <div className={css.heading}>
                <div className={css.title}>
                    <a href={hash} className={css.link}>
                        {title.toUpperCase()}
                    </a>
                </div>
            </div>
            <ul className={css.list}>
                {items}
            </ul>
            {children}
        </section>
    }
}
