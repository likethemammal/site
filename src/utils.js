export const isNearBottom = (offset) => {
    const D = document

    const documentHeight = Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )

    const windowScroll = window.innerHeight
    const scroll = window.scrollY

    const isNearBottom = documentHeight - windowScroll - scroll < offset

    return isNearBottom
}