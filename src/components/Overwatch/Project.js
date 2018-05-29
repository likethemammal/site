import React, { Component } from 'react'

import css from './Project.css'


import general from '@likethemammal/general-components'

const { SVG } = general.components

import GITHUB_SVG from 'svg-icon/dist/svg/logos/github.svg'
import CODEPEN_SVG from 'svg-icon/dist/svg/logos/codepen.svg'



export default class Project extends Component {

    static defaultProps = {
        className: css.container,
    }

    render() {

        const { name, type, link } = this.props
        let svg

        switch (type) {
            case 'github':
                svg = GITHUB_SVG
                break;
            case 'codepen':
                svg = CODEPEN_SVG
                break;
        }

        return <div
            className={css.container}
        >
            <a
                target="_blank"
                className={css.heading}
                href={link}
            >
                <div className={css.icon}>
                    <SVG raw={svg}/>
                </div>
            </a>
            <div
                className={css.desc}
            >
                <h3 className={css.title}>
                    {name}
                </h3>
            </div>
        </div>
    }
}