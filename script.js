// const like = document.querySelectorAll('.likeBtn')
// for (item of like) {
//     item.addEventListener('click', function () {
//         let counterliked = parseInt(document.querySelector('.likeIcon .likedNum').innerHTML)
//         counterliked += 1;

//         document.querySelector('.likeIcon .likedNum').innerHTML = counterliked;
//     })
// }



let quantityCircle = parseInt(document.querySelectorAll('.quantity'))
if (counterliked = 0) {
    quantityCircle.style = none
}




// const cart = document.querySelectorAll('.cartIcon')
// for (item of cart) {
//     item.addEventListener('click', function () {
//         let counterBought = parseInt(document.querySelector('.cartIcon .cartNum').innerHTML)
//         counterBought += 1;

//         document.querySelector('.cartIcon .cartNum').innerHTML = counterBought;
//     })
// }

/////////////active btn///////////////////////
const likeButton = document.querySelectorAll('.likeBtn');

for (item of likeButton) {

    item.addEventListener('click', function () {
        let likecounter = parseInt(document.querySelector('.likeIcon .likedNum'))
        const liked = this.checked;
        if (liked) {
            likecounter += 1;
        }
        else {
            likecounter -= 1;
        }

        document.querySelector('.likeIcon .likedNum').innerHTML = likecounter;
    })
}
///////////////////////////////////////////



///////////////////////////////////
// this.classList.toggle('active')

// document.querySelector('.likeIcon .likedNum').innerHTML = document.getElementsByClassName('.active').length;