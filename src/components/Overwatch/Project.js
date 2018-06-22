import React, { Component } from 'react'

import css from './Project.css'


import general from '@likethemammal/general-components'

const { SVG } = general.components

import GITHUB_SVG from 'svg-icon/dist/svg/logos/github-icon.svg'
import CODEPEN_SVG from 'svg-icon/dist/svg/logos/codepen.svg'



export default class Project extends Component {

    static defaultProps = {
        className: css.container,
    }

    render() {

        const { name, type, link, blurb, banner } = this.props
        let svg
        let icon_style

        const banner_style = {
            backgroundImage: `url(${banner})`
        }

        switch (type) {
            case 'github':
                svg = GITHUB_SVG
                icon_style = {
                    width: 25,
                }
                break;
            case 'codepen':
                svg = CODEPEN_SVG
                icon_style = {
                    width: 75,
                }
                break;
        }

        return <div
            className={css.container}
        >
            <a
                target="_blank"
                className={css.heading}
                href={link}
                style={banner_style}
            >
                <div className={css.icon} style={icon_style}>
                    <SVG raw={svg}/>
                </div>
            </a>
            <div
                className={css.desc}
            >
                <h3 className={css.title}>
                    {name}
                </h3>
                <p className={css.blurb} dangerouslySetInnerHTML={{__html:blurb}} />
            </div>
        </div>
    }
}