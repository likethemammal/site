import React, { Component } from 'react'
import Section from './Section.js'

import { socials, section_order } from './assets'
import _ from 'lodash'

import FloatingCard from './FloatingCard'
import BottomCard from './BottomCard'

import css from './App.css'

import { isNearBottom } from '../utils'

const BOTTOM_OFFSET = 170

import SVG from './SVG'
import CodeMentorSVG from '../assets/codementor_contact_me.svg'

import LOW_RES_BACKGROUND_SRC from '../assets/low_res_background.jpg'

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
        const jekyll_data = window._jekyll_data
        const mounted = bottom !== void(0)
        const bg_styles = {
            backgroundImage: `url('dist/${LOW_RES_BACKGROUND_SRC}')`
        }

        const sections = section_order.map((key, i) => <Section
            {...{
                key: key,
                title: key,
                values: jekyll_data[key]
            }}
        >

        </Section>)

        const socialValues = _.map(socials, (({label, link, icon, blurb}) => ({
            link,
            name: label,
            blurb,
        })))

        const isOverwatchPath = window.location.pathname === '/overwatch/'

        return <div ref="view" className={css.container}>

            <div className={css.bg} style={bg_styles}/>

            <header className={css.header}>
                <h1 className={css.headerText}>
                    {`Chris Dolphin`}
                </h1>
            </header>

            <div className={css.inner}>
                {sections}
                <Section
                    title="professional"
                    values={jekyll_data['professional']}
                >
                    <div
                        className={css.codeMentorWrapper}
                    >
                        <a
                            className={css.codeMentor}
                            href="https://www.codementor.io/likethemammal"
                        >
                            <SVG raw={CodeMentorSVG}/>
                        </a>
                    </div>
                </Section>
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
