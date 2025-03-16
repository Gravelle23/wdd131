document.addEventListener('DOMContentLoaded', function () {
    const lastModifiedElement = document.getElementById('lastModified');

    const lastModifiedDate = new Date(document.lastModified);
    
    const formattedDate = lastModifiedDate.toLocaleString();

    lastModifiedElement.textContent = `Last modified: ${formattedDate}`;
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const popupMenu = document.getElementById('popup-menu');
    const closeMenu = document.getElementById('close-menu');
    
    hamburgerIcon.addEventListener('click', function () {
        popupMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', function () {
        popupMenu.classList.remove('active');
    });
});

