// fetch request 

function ramen() {
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramenData => ramenData.forEach(ramens => renderRamens(ramens)))
        
    };
ramen();
//render function
function renderRamens(ramens) {
    let image = document.createElement('img');
    image.src = ramens.image;
    document.querySelector('#ramen-menu').appendChild(image);
}
renderRamens();
//add eventListener click form on ramen menu that adds details to details
function clickRamens() {
    let menu = document.querySelector('#ramen-menu');
    let details = document.querySelector('#ramen-detail');
    let image = document.querySelector('detail-image');
    let h2 = document.querySelector('name');
    let h3 = document.querySelector('restaurant');
    let rating = document.querySelector('#rating');
    let comment = document.querySelector('#comment-display');
    menu.addEventListener('click', () => {
        image.src = ramens.image
        h2.textContent = ramens.name
        h3.textContent = ramens.restaurant
        rating.textContent = ramens.rating
        comment.textContent = ramens.comment
    });

}
clickRamens();

//add eventListener submit form
function submitRamens() {
    const form = document.querySelector('#new-ramen')
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nameInput = event.target.name.value
        const restaurantInput = event.target.restaurant.value
        const imageInput = event.target.image.value
        const ratingInput = event.target.rating.value
        const commentInput = event.target.comment.value
        const newRamen = {
            name: nameInput,
            restaurant: restaurantInput,
            image: imageInput,
            rating: ratingInput,
            comment: commentInput
        }
        renderRamens(submitRamens)
    });
}

submitRamens();


