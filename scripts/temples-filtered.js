document.addEventListener('DOMContentLoaded', function () {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleString();
    lastModifiedElement.textContent = `Last modified: ${formattedDate}`;

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Fort Lauderdale Florida Temple",
            location: "Fort Lauderdale, Florida",
            dedicated: "2014, May, 4",
            area: 30500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-lauderdale-florida/800x500/fort-lauderdale-florida-temple-1220610-wallpaper.jpg"
        },
        {
            templeName: "Columbia River Washington Temple",
            location: "Richland, Washington",
            dedicated: "2001, November, 18",
            area: 16880,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-river-washington/800x800/columbia-river-temple-lds-424634-wallpaper.jpg"
        },
        {
            templeName: "Durban South Africa Temple",
            location: "Blackburn, South Africa",
            dedicated: "2020, February, 16",
            area: 19860,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/800x500/7-760a7137d9c6b9de08fa46c5cf540cb997d62c50.jpg"
        }
    ];

    function createTempleCard(temple) {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-item');
        
        templeCard.innerHTML = ` 
            <figure>
                <img src="${temple.imageUrl}" alt="${temple.templeName} image" loading="lazy" />
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area} sq. ft.</p>
                </figcaption>
            </figure>
        `;
        return templeCard;
    }

    function displayTemples(filteredTemples) {
        const templeGrid = document.getElementById('temple-grid');
        templeGrid.innerHTML = '';
        filteredTemples.forEach(temple => {
            const templeCard = createTempleCard(temple);
            templeGrid.appendChild(templeCard);
        });
    }

    function filterOld() {
        return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    }

    function filterNew() {
        return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    }

    function filterLarge() {
        return temples.filter(temple => temple.area > 90000);
    }

    function filterSmall() {
        return temples.filter(temple => temple.area < 10000);
    }

    document.getElementById('home').addEventListener('click', (e) => {
        e.preventDefault(); 
        displayTemples(temples);
        updateActiveLink('home');
    });

    document.getElementById('old').addEventListener('click', (e) => {
        e.preventDefault();
        displayTemples(filterOld()); 
        updateActiveLink('old');
    });

    document.getElementById('new').addEventListener('click', (e) => {
        e.preventDefault();
        displayTemples(filterNew()); 
        updateActiveLink('new');
    });

    document.getElementById('large').addEventListener('click', (e) => {
        e.preventDefault();
        displayTemples(filterLarge());
        updateActiveLink('large');
    });

    document.getElementById('small').addEventListener('click', (e) => {
        e.preventDefault();
        displayTemples(filterSmall()); 
        updateActiveLink('small');
    });

    function updateActiveLink(activeId) {
        const links = document.querySelectorAll('nav ul li a');
        links.forEach(link => link.classList.remove('active')); 
        document.getElementById(activeId).classList.add('active'); 
    }

    const hamburgerIcon = document.getElementById('hamburger-icon');
    const popupMenu = document.getElementById('popup-menu');
    const closeMenu = document.getElementById('close-menu');

    hamburgerIcon.addEventListener('click', () => {
        popupMenu.classList.add('open'); 
    });


    closeMenu.addEventListener('click', () => {
        popupMenu.classList.remove('open'); 
    });

    document.addEventListener('click', (event) => {
        if (!popupMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            popupMenu.classList.remove('open'); 
        }
    });

    displayTemples(temples);

    document.getElementById('current-year').textContent = new Date().getFullYear();
});
