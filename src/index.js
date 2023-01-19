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

function renderRamens(ramens) {
    ramens.forEach(ramen => {
        const ramenMenu = document.querySelector("#ramen-menu")
        const ramenDetail = document.querySelector("#ramen-detail")
        const detailImage = document.querySelector("#ramen-detail > img")
//        console.log(detailImage)
        
        const ramenImage = document.createElement("img")
        const ramenNameInsert = document.querySelector("#ramen-detail > h2");
        const restaurantNameInsert = document.querySelector("#ramen-detail > h3")
        const ratingInsert = document.querySelector("#rating-display")
        const commentInsert = document.querySelector("#comment-display")

        ramenImage.src = ramen.image
        ramenImage.addEventListener("click",
        (e) => {
            ramenNameInsert.textContent = ramen.name;
            restaurantNameInsert.textContent = ramen.restaurant;
            ratingInsert.textContent = ramen.rating;
            commentInsert.textContent = ramen.comment;
            detailImage.src = ramen.image;
        })

        ramenMenu.appendChild(ramenImage)
//        console.log(ramenImage)
    })

}

///submit form

function submitRamen(){
    const form = document.querySelector("#new-ramen");
//    console.log(form)
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        nameInput = e.target.name.value
        restaurantInput = e.target.restaurant.value
        ratingInput = e.target.rating.value
//        commentInput = e.target.new-comment.value
        imageInput = e.target.image.value

//        console.log(commentInput);

    newRamenObject = {
        name: nameInput,
        restaurant: restaurantInput,
        image: imageInput,
        rating: ratingInput,
        comment: "yeah I don't know"
    }
    renderRamens([newRamenObject]);
    })
}

submitRamen(); 