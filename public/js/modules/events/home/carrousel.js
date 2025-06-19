
export const carrousel = () => {
    const elem = document.querySelector("#imgs");
    const img = ["/img/logo/jugueteria1.png", "/img/logo/jugueteria2.png", "/img/logo/jugueteria3.png", "/img/logo/cartel.png"];
    let imgs;

    if (elem) {
        let i = 0;
        imgs = setInterval(() => {
            elem.setAttribute("src", `${img[i % img.length]}`);
            i++;
        }, 2000)
    }
}

