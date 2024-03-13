const slider = document.querySelectorAll(".slide");
let counter = 0;

slider.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

// let slideImage = () => {
//     slider.forEach(
//         (slide) => {
//             slide.style.transform = `translateX(-${counter * 100}%)`;
//         }
//     )
// }

document.querySelector('.No1').addEventListener('click', function () {
    document.querySelector(".inner1 div p").textContent = "Grand Theft Auto VI";
    document.querySelector(".inner1 div h1").textContent = "Trailer 1";
    document.querySelector('.vid1').style.margin = "0 0 0 0%";
    document.querySelector('.vid2').style.margin = "0 0 0 100%";
    document.querySelector('.vid3').style.margin = "0 0 0 200%";
    document.querySelector('.vid4').style.margin = "0 0 0 300%";
});
document.querySelector('.No2').addEventListener('click', function () {
    document.querySelector(".inner1 div p").textContent = "Grand Theft Auto Online";
    document.querySelector(".inner1 div h1").textContent = "The Chop Shop";
    document.querySelector('.vid1').style.margin = "0 0 0 -110%";
    document.querySelector('.vid2').style.margin = "0 0 0 -100%";
    document.querySelector('.vid3').style.margin = "0 0 0 0%";
    document.querySelector('.vid4').style.margin = "0 0 0 100%";
});
document.querySelector('.No3').addEventListener('click', function () {
    document.querySelector(".inner1 div p").textContent = "Grand Theft Auto Online";
    document.querySelector(".inner1 div h1").textContent = "Andreas Mercenary";
    document.querySelector('.vid1').style.margin = "0 0 0 -210%";
    document.querySelector('.vid2').style.margin = "0 0 0 -200%";
    document.querySelector('.vid3').style.margin = "0 0 0 -200%";
    document.querySelector('.vid4').style.margin = "0 0 0 0%";
});
document.querySelector('.No4').addEventListener('click', function () {
    document.querySelector(".inner1 div p").textContent = "Grand Theft Auto Online";
    document.querySelector(".inner1 div h1").textContent = "Halloween in GTA";
    document.querySelector('.vid1').style.margin = "0 0 0 -310%";
    document.querySelector('.vid2').style.margin = "0 0 0 -300%";
    document.querySelector('.vid3').style.margin = "0 0 0 -300%";
    document.querySelector('.vid4').style.margin = "0 0 0 -300%";
});