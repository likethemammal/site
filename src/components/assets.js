import SVG_STACKOVERFLOW from '../assets/stackoverflow.svg'
import SVG_TWITTER from '../assets/twitter.svg'
import SVG_GITHUB from '../assets/github.svg'
import SVG_EMAIL from '../assets/gmail.svg'

export const socials = {
    github: {
        label: 'Github',
        link: 'https://github.com/likethemammal',
        icon: SVG_GITHUB,
        color: '#3A3939',
    },
    twitter: {
        label: 'Twitter',
        link: 'https://twitter.com/likethemammal',
        icon: SVG_TWITTER,
        color: '#1DA1F2',
    },
    email: {
        label: 'Email',
        link: 'mailto:dolphin@likethemammal.com',
        icon: SVG_EMAIL,
        color: '#D14836',
    },
    stackoverflow: {
        label: 'StackOverflow',
        link: 'https://stackoverflow.com/users/2687479/chris-dolphin?tab=answers',
        icon: SVG_STACKOVERFLOW,
        color: '#FE7A16',
    }
}

export const PROFILE_IMAGE_SRC = 'https://avatars1.githubusercontent.com/u/3430841'

export const PROFILE_DESC = `My name is Chris. I'm a developer, longboarder, chillwave-lover, and doer of things. I build games, lead dev teams, and I'm passionate about web tech.`
