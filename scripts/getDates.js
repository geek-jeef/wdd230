const currentYear = new Date().getFullYear();
const footer = document.getElementsByTagName("footer")[0];

let yearParagraph = document.createElement("p");
yearParagraph.textContent = `© ${currentYear} | TUMBA Guy-Jeef | Lomé, TOGO`;
let lastUpdated = document.createElement("p");
lastUpdated.setAttribute("id","lastModified");
lastUpdated.textContent = `Last Updated : ${document.lastModified}`;

footer.appendChild(yearParagraph);
footer.appendChild(lastUpdated);