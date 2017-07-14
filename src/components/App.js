import React, { Component } from 'react'
import Section from './Section.js'

import { socials, section_order } from './assets'
import _ from 'lodash'

import FloatingCard from './FloatingCard'
import BottomCard from './BottomCard'

import css from './App.css'

import { isNearBottom } from '../utils'

const BOTTOM_OFFSET = 170


export default class App extends Component {
    state = {
        bottom: void(0),
    }

    onScroll = () => {

        this.setState({
            bottom: isNearBottom(BOTTOM_OFFSET)
        })

    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)

        this.setState({
            bottom: isNearBottom(BOTTOM_OFFSET)
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false)
    }

    render() {

        const { bottom } = this.state
        const data = window._jekyll_data
        const mounted = bottom !== void(0)

        const sections = section_order.map((key, i) => <Section
            {...{
                key: key,
                title: key,
                values: data[key]
            }}
        />)

        const socialValues = _.map(socials, (({label, link, icon, blurb}) => ({
            link,
            name: label,
            blurb,
        })))

        return <div ref="view" className={css.container}>

            <div className={css.bg} />

            <header className={css.header}>
                <h1 className={css.headerText}>
                    {`Chris Dolphin`}
                </h1>
            </header>

            <div className={css.inner}>
                {sections}
                <Section
                    title="socials"
                    values={socialValues}
                />
                <BottomCard />

            </div>

            {mounted && <div className={!bottom ? css.gradient : css.hidden}>
                <div className={css.fade} />

                <div className={css.floatingWrapper}>
                    <div className={css.floatingContent}>
                        <div className={css.floatingInner}>
                            <FloatingCard />
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    }
}