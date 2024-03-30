const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => {
    const response = await fetch(url)
    data = await response.json()
    displayProphets(data.prophets);
};

const displayProphets = (prophets) => {

    prophets.forEach(prophet => {

        let card = document.createElement('section');
        let fullName = document.createElement('h2');


        let birthYear = document.createElement('p');
        birthYear.textContent = `Birth Year: ${prophet.birthYear}`;

        let deathYear = document.createElement('p');
        deathYear.textContent = `Death Year: ${prophet.deathYear}`;

        let portrait = document.createElement('img');


        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');



        card.appendChild(fullName);
        card.appendChild(birthYear);
        card.appendChild(deathYear);
        card.appendChild(portrait);

        cards.appendChild(card);

    });

}
getProphetData();