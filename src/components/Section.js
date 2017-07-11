import React, { Component } from 'react'

import css from './Section.css'

import Item from './Item'

export default class Section extends Component {
    render() {

        const { values, title } = this.props
        const items = values.map((item, i) => <Item
            key={i}
            {...item}
        />)

        return <section
            id={`#${title.toLowerCase()}`}
            className={css.container}
        >
            <div className={css.heading}>
                <div className={css.title}>
                    {title.toUpperCase()}
                </div>
            </div>
            <ul className={css.list}>
                {items}
            </ul>
        </section>
    }
}
