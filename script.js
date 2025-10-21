// script.js

let project_cart = document.querySelector("#cart-container");
let latest_button = document.querySelector("#latest-button");
let sectionn = document.querySelector("#section");



projectsData.forEach((value) => {
  let cart_detail = document.createElement("div");

  cart_detail.classList.add("card");

  cart_detail.innerHTML = `
    <a href="${value.link}" class="card-image-link">
      <img src="${value.image}" alt="Project Image" class="card-image" />
    </a>
    <div class="card-content">
      <div class="card-title">
        <h1>Title: <span>${value.title || 'N/A'}</span></h1>
      </div>
      <div class="card-description">
        <h1>Description: <span>${value.description || 'N/A'}</span></h1>
      </div>
    </div>
  `;

  project_cart.append(cart_detail);
});



let popup = document.querySelector("#pop-up-about");
let Cross = document.querySelector("#cross");
let button = document.querySelector("#btn");
button.addEventListener('click',()=>{
popup.classList.add('flex')
popup.classList.remove('none')
console.log("hii")
})

Cross.addEventListener('click',()=>{
popup.classList.remove('flex')
console.log("hii")
})



function Scrollto() {
   sectionn.classList.remove('hidden');
   sectionn.classList.add('flex')
  window.scrollTo({
    top: 700,
    behavior: "smooth"
  });
}
