const currentYear = new Date().getFullYear();
const footer = document.getElementsByTagName("footer")[0];

let yearParagraph = document.createElement("p");
yearParagraph.textContent = `© ${currentYear} | TUMBA Guy-Jeef | Lomé, TOGO`;
let lastUpdated = document.createElement("p");
lastUpdated.setAttribute("id","lastModified");
lastUpdated.textContent = `Last Updated : ${document.lastModified}`;

footer.appendChild(yearParagraph);
footer.appendChild(lastUpdated);

const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#hamburger');
const navbar = document.querySelector('nav');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
    navbar.classList.toggle('noDisplay');
});

const modeButton = document.querySelector("#mode");
const html = document.querySelector("html");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
        html.classList.toggle('dark');
		modeButton.textContent = "☀️";
	} else {
		html.classList.toggle('dark');
		modeButton.textContent = "🌙";
	}
});
