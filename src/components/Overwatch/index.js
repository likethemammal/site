import React, { Component } from 'react'

import css from './Overwatch.css'
import './global.css'

import PageClamp from './PageClamp'
import general from '@likethemammal/general-components'

const { SVG } = general.components

import GITHUB_SVG from 'svg-icon/dist/svg/logos/github.svg'
import CODEPEN_SVG from 'svg-icon/dist/svg/logos/codepen.svg'

export default class Avatar extends Component {

    static defaultProps = {
        className: css.container,
    }

    render() {
        const { className } = this.props
        const jekyll_data = window._jekyll_data

        console.log(jekyll_data)

        const { projects } = jekyll_data

        let projects_withoutFirst = [...projects]
        let svg

        projects_withoutFirst.shift()



        return <div className={className}>
            <PageClamp>
                <div>
                    <div
                        className={css.project_container}
                    >
                        <div
                            className={css.project}
                        >
                            {projects[0].name}
                            <SVG raw={svg}/>
                        </div>
                    </div>
                </div>
                <div>
                    {projects_withoutFirst.map(({ name, type }, i) => {

                        switch (type) {
                            case 'github':
                                svg = GITHUB_SVG
                                break;
                            case 'codepen':
                                svg = CODEPEN_SVG
                                break;
                        }

                        return <div
                            key={i}
                            className={css.project_container}
                        >
                            <div
                                className={css.project}
                            >
                                {name}
                                <div className={css.icon}>
                                    <SVG raw={svg}/>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </PageClamp>
        </div>
    }
}