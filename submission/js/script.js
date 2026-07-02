let bannerImage = document.querySelector("#bannerImage");
let bannerCaption = document.querySelector("#bannerCaption");


bannerImage.addEventListener("click", function(){

    bannerCaption.classList.toggle("hidden");
    bannerImage.classList.toggle("banner-clicked");

});