const selectElem = selector => {
    const elem = document.querySelector(selector)
    if (elem) {
        return elem;
    }
    throw new Error(`Something wwent wrong, make sure that ${selector} exist or is typed correctly`)
}

const esc_link = selectElem('#esc-btn')
window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        e.preventDefault()
        esc_link.click()
    }
})