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

        console.log(jekyll_data)

        const { projects } = jekyll_data

        let projects_withoutFirst = [...projects]

        projects_withoutFirst.shift()



        return <div className={className}>
            <PageClamp>
                <div>
                    <Project {...projects[0]} />
                </div>
                <div>
                    {projects_withoutFirst.map((project, i) => <Project {...project} key={i}/>)}
                </div>
            </PageClamp>
        </div>
    }
}