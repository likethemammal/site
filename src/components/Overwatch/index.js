import React, { Component } from 'react'

import _ from 'underscore'

import css from './Overwatch.css'
import './global.css'

import PageClamp from './PageClamp'
import Project from './Project'

import general from '@likethemammal/general-components'

const { SVG } = general.components

import {socials} from './assets'

export default class Overwatch extends Component {

    static defaultProps = {
        className: css.container,
    }

    render() {
        const { className } = this.props
        const jekyll_data = window._jekyll_data

        const { projects } = jekyll_data
        const projectEls = projects.map((project, i) => <Project {...project} key={i}/>)

        let firstSet = _.first(projectEls, 3)
        let lastSet = _.last(projectEls, 2)

        return <div className={className}>
            <img className={css.logo} src={'/dist/overwatch_logo.png'} />
            <div className={css.top_hat}>
                <PageClamp className={css.clamp}>
                    <span className={css.section_title}>projects</span>
                </PageClamp>
            </div>
            <div className={css.projects}>
                <PageClamp>
                    <div>
                        {firstSet.shift()}
                    </div>
                    <div>
                        {firstSet}
                    </div>
                </PageClamp>
                <div className={css.top_hat}>
                    <PageClamp className={css.clamp}>
                        <span className={css.section_title}>updates</span>
                    </PageClamp>
                </div>
                <div className={css.cta}>
                    <PageClamp>
                        <form
                            className={css.signup}
                            method="POST"
                            action="https://liveformhq.com/form/127beff6-19e4-4b53-b787-670d29ebac46"
                        >
                            <input
                                className={css.input}
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                            />
                            <button
                                className={css.button}
                                type="submit"
                            >
                                get the newsletter
                            </button>
                        </form>
                    </PageClamp>
                </div>
                <PageClamp>
                    <div>
                        {lastSet}
                    </div>
                </PageClamp>
                <div className={css.top_hat}>
                    <PageClamp className={css.clamp}>
                        <span className={css.section_title}>socials</span>
                    </PageClamp>
                </div>
                <div className={css.socials}>
                    {socials.map(({ color, icon, bg_color, link }, i) => {

                        const styles = {
                            borderColor: color,
                            backgroundColor: bg_color,
                        }

                        const svg_styles = {
                            width: 35,
                            paddingTop: 14,
                        }

                        return <a
                            key={i}
                            target="_blank"
                            href={link}
                            className={css.social}
                            style={styles}
                        >
                            <i className={css.icon}>
                                <SVG
                                    raw={icon}
                                    style={svg_styles}
                                />
                            </i>
                        </a>
                    })}
                </div>
            </div>
        </div>
    }
}