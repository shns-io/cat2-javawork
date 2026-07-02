let bannerImage = document.querySelector("#bannerImage");
let bannerCaption = document.querySelector("#bannerCaption");

bannerImage.addEventListener("click", function(){

    bannerCaption.classList.toggle("hidden");
    bannerImage.classList.toggle("banner-clicked");
        });

const products = [
    {
        name: "Fresh milk",
        price: "Kshs 80 per litre"
    },

    {
        name: "Sweetened mala",
        price: "Kshs 100 per carton"
    },
         {
        name: "Powdered milk ",
        price: "Kshs 100 per satchet"
        },

    {
        name: "Yoghurt",
        price: "Kshs 150"
    }

];

let productList = document.querySelector("#productList");

products.forEach(function(product){

    let li = document.createElement("li");
    li.textContent = product.name + " ; goes for ; " + product.price;
    productList.appendChild(li);

});