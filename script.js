const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'images/logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


async function getFilmsTitles() {
    try {
        const response = await fetch('https://ghibliapi.vercel.app/films');
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        data.forEach((movie) => {
            //Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // Create a h1 and set the text content to the film's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            // Create a p and set the text content to the film's description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300); // Limit description to 300 characters
            p.textContent = `${movie.description}...`;

            // Append the cards to the container element
            container.appendChild(card);

            // Each card will contain a h1 and a p
            card.appendChild(h1);
            card.appendChild(p);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des films :', error);
    }   
}
getFilmsTitles();





