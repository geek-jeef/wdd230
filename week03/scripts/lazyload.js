const currentYear = new Date().getFullYear();
const footer = document.getElementsByTagName("footer")[0];

let yearParagraph = document.createElement("p");
yearParagraph.textContent = `© ${currentYear} | TUMBA Guy-Jeef | Lomé, TOGO`;
let lastUpdated = document.createElement("p");
lastUpdated.setAttribute("id","lastModified");
lastUpdated.textContent = `Last Updated : ${document.lastModified}`;

footer.appendChild(yearParagraph);
footer.appendChild(lastUpdated);

const images = document.querySelectorAll("[data-src]");
function preloadImage(img) {
    const src= img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
    img.removeAttribute("data-src");
    img.classList.toggle("preloaded");
}
const imgOptions={
    threshold: 0,
    rootMargin:  "0px 0px -200px 0px"
};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            preloadImage(entry.target);
        }

    })
}, imgOptions);
images.forEach(image => {
    imgObserver.observe(image);
})