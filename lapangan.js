function searchVenues() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const citySelect = document.getElementById('city-select').value;
    const venueCards = document.querySelectorAll('.venue-card');

    venueCards.forEach(card => {
        const venueName = card.getAttribute('data-name').toLowerCase();
        const venueCity = card.getAttribute('data-city');

        if ((searchInput === '' || venueName.includes(searchInput)) &&
            (citySelect === '' || venueCity === citySelect)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const venueCards = document.querySelectorAll('.venue-card');
    venueCards.forEach(card => {
        card.addEventListener('click', () => {
            const venueName = card.getAttribute('data-name');
            const venueCity = card.getAttribute('data-city');
            const venueDate = card.getAttribute('data-date');
            const venueTime = card.getAttribute('data-time');
            const venueLocation = card.getAttribute('data-location');
            const venuePrice = card.getAttribute('data-price');
            const venueImg = card.getAttribute('data-img');

            const url = `confirmation.html?venue=${encodeURIComponent(venueName)}&city=${encodeURIComponent(venueCity)}&date=${encodeURIComponent(venueDate)}&time=${encodeURIComponent(venueTime)}&location=${encodeURIComponent(venueLocation)}&price=${encodeURIComponent(venuePrice)}&img=${encodeURIComponent(venueImg)}`;

            window.location.href = 'confirmationVENUE.html';
        });
    });
});
