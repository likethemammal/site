import React, { Component } from 'react'

import css from './Overwatch.css'
import './global.css'

import PageClamp from './PageClamp'
import Project from './Project'

export default class Overwatch extends Component {

    static defaultProps = {
        className: css.container,
    }

    render() {
        const { className } = this.props
        const jekyll_data = window._jekyll_data

        const { projects } = jekyll_data

        let projects_withoutFirst = [...projects]

        projects_withoutFirst.shift()


        return <div className={className}>
            <div className={css.projects}>
                <PageClamp>
                    <div>
                        <Project {...projects[0]} />
                    </div>
                    <div>
                        {projects_withoutFirst.map((project, i) => <Project {...project} key={i}/>)}
                    </div>
                </PageClamp>
            </div>
            <div className={css.cta}>
                <PageClamp>
                    <form
                        method="POST"
                        action="https://liveformhq.com/form/127beff6-19e4-4b53-b787-670d29ebac46"
                    >
                        <input type="email" name="email" placeholder="Your email"/>
                            <button type="submit">Send</button>
                    </form>
                </PageClamp>
            </div>
        </div>
    }
}