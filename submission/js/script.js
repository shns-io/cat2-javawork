//1.

let bannerImage = document.querySelector("#bannerImage");
let bannerCaption = document.querySelector("#bannerCaption");

bannerImage.addEventListener("click", function(){

    bannerCaption.classList.toggle("hidden");
    bannerImage.classList.toggle("banner-clicked");
        });

//2. 
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

//3.
let orderInput = document.querySelector("#orderInput");
let addOrderButton = document.querySelector("#orderListForm button");
let orderItems = document.querySelector("#orderItems");

addOrderButton.addEventListener("click", function(event){
    event.preventDefault();

    if(orderInput.value != ""){

  let li = document.createElement("li");
        let button = document.createElement("button");

        li.textContent = orderInput.value;

        button.textContent = "౨ৎ  Delete ౨ৎ ";
        button.addEventListener("click", function(){
            li.remove();

                });

 li.appendChild(button);
        orderItems.appendChild(li);
        orderInput.value = "";

    }

    else{

        alert("Nothing you wanna order? =( Nothing at all?");

    }

});

//4.

let orderForm = document.querySelector("#orderForm");
let formMessage = document.querySelector("#formMessage");

orderForm.addEventListener("submit", function(event){

    event.preventDefault();
     let email = document.querySelector("#email");
    let location = document.querySelector("#location");

    if(email.value == "" || location.value == ""){

        formMessage.textContent =
        "Please fill all fields smiley face !";

    }

    else{

        formMessage.textContent =
        "Thank you for the orderr. Hope to see you oftenn.";

    email.value = "";
    location.value = ""; 

    }

});