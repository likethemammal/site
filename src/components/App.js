import React, { Component } from 'react'
import Section from './Section.js'

import { socials } from './assets'
import _ from 'lodash'

import FloatingCard from './FloatingCard'
import BottomCard from './BottomCard'

import css from './App.css'


export default class App extends Component {

    render() {

        const data = window._jekyll_data

        const sections = Object.keys(data).map((key, i) => <Section
            {...{
                key: key,
                title: key,
                values: data[key]
            }}
        />)

        const socialValues = _.map(socials, (({label, link, icon}) => ({
            link,
            name: label,
            blurb: <a href={link}>{link}</a>,
        })))

        return <div className={css.container}>

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
                <FloatingCard />
            </div>
        </div>
    }
}