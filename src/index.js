//dom content loaded 
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
// fetch request 

function ramenFetch() {
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramenData => renderRamens(ramenData))
        
    };
ramenFetch();

//variables
const menu = document.querySelector('#ramen-menu');
const details = document.querySelector('#ramen-detail');
const image = document.querySelector('detail-image');
const h2 = document.querySelector('name');
const h3 = document.querySelector('restaurant');
const rating = document.querySelector('#rating');
const comment = document.querySelector('#comment-display');

//render function
function renderRamens(ramens){
    ramens.forEach(ramen => {
        const ramenImage = document.createElement('img');
        ramenImage.src = ramen.image;
        ramenImage.addEventListener('click', () => {
            image.src = ramen.image;
            h2.textContent = ramen.name;
            h3.textContent = ramen.restaurant;
            rating.textContent = ramen.rating;
            comment.textContent = ramen.comment;
    });
    menu.append(ramenImage);
    });
};
   

// renderRamens();
// //add eventListener click form on ramen menu that adds details to details
// // function clickRamens() {
// //     menu.addEventListener('click', () => {
// //         image.src = ramen.image
// //         h2.textContent = ramen.name
// //         h3.textContent = ramen.restaurant
// //         rating.textContent = ramen.rating
// //         comment.textContent = ramen.comment
// //     });

// // }
// // clickRamens();

// //add eventListener submit form
// // function submitRamens() {
// //     const form = document.querySelector('#new-ramen')
// //     form.addEventListener('submit', function (event) {
// //         event.preventDefault();
// //         const nameInput = event.target.name.value
// //         const restaurantInput = event.target.restaurant.value
// //         const imageInput = event.target.image.value
// //         const ratingInput = event.target.rating.value
// //         const commentInput = event.target.comment.value
// //         const newRamen = {
// //             name: nameInput,
// //             restaurant: restaurantInput,
// //             image: imageInput,
// //             rating: ratingInput,
// //             comment: commentInput
// //         }
// //         renderRamens(newRamen)
// //     });
// // }

// // submitRamens();


// fetch("http://localhost:3000/ramens")
//   .then((r) => r.json())
//   .then((data) => renderRamen(data));

// const ramenMenu = document.querySelector("#ramen-menu");
// const detailImage = document.querySelector(".detail-image");
// const ramenName = document.querySelector(".name");
// const restaurant = document.querySelector('.restaurant')
// const ramenRating = document.querySelector('#rating-display')
// const ramenComment = document.querySelector('#comment-display')

// function renderRamen(ramens) {
//   ramens.forEach((ramen) => {
//     const img = document.createElement("img");
//     img.src = ramen.image;
//     img.addEventListener("click", () => {
//       detailImage.src = ramen.image;
//       ramenName.textContent = ramen.name;
//       restaurant.textContent = ramen.restaurant;
//       ramenRating.textContent = ramen.rating;
//       ramenComment.textContent = ramen.comment;
//     });
//     ramenMenu.append(img);
//   });
// }
