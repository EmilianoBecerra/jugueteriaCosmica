import "./pollyfillLocationchange.js"


document.body.addEventListener("click", ev => {
    const element = ev.target.closest("a[to]");
    if (element) {
        ev.preventDefault()
        const to = element.getAttribute("to")
        history.pushState({}, null, to)
    }
})

const routes = []

export function addRoute(path, callback) {
    routes.push({ path, callback })
}

window.addEventListener("locationchange", ev => {
    routes.forEach(route => {
        const regExp = new RegExp("^" + route.path + "$");

        if (regExp.test(location.pathname)) {
            const matchs = location.pathname.match(regExp).slice(1)

            route.callback(matchs)
        }
    })

})