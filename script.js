// script.js

let project_cart = document.querySelector("#cart-container");
let latest_button = document.querySelector("#latest-button");
let sectionn = document.querySelector("#section");
latest_button.addEventListener('click',()=>{
sectionn.classList.toggle('none')
})


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
