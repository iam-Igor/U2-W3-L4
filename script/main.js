const searchbar = document.getElementById("searchbar");
let indexBarValue = searchbar.value;

console.log(indexBarValue);

const generateCards = function (detail) {
  const cardContainer = document.getElementById("cards-container");

  detail.photos.forEach((element) => {
    const card = document.createElement("div");
    card.innerHTML = `<div class="col">
   <div class="card mb-4 shadow-sm">
     <img
       src=" ${element.src.landscape}"
       class="bd-placeholder-img card-img-top"
     />
     <div class="card-body">
       <h5 class="card-title">Lorem Ipsum</h5>
       <p class="card-text">
         This is a wider card with supporting text below as a natural
         lead-in to additional content. This content is a little bit
         longer.
       </p>
       <div
         class="d-flex justify-content-between align-items-center"
       >
         <div class="btn-group">
           <button
             type="button"
             class="btn btn-sm btn-outline-secondary"
           >
             View
           </button>
           <button
             
             class="btn btn-sm btn-outline-secondary hideBtn"
           >
             Hide
           </button>
         </div>
         <small class="text-muted">id: ${element.id}</small>
       </div>
     </div>
   </div>
 </div>
   
   
   `;

    cardContainer.appendChild(card);

    // HIDE CARDS
    const hideButton = document.querySelectorAll(".hideBtn");
    hideButton.forEach((btn) => {
      btn.addEventListener("click", function () {
        const card2 = this.closest(".card");
        card2.classList.add("swing");
      });
    });

    // SECONDARY PAGE

    const secondaryBtn = document.getElementById("load-secondary");
    secondaryBtn.addEventListener("click", function () {
      location.assign(detail.next_page);
    });
  });
};

fetch("https://api.pexels.com/v1/search?query=videogames", {
  headers: {
    Authorization: "yJLe58wdcJk7SzlU9TNot1JNebbnlGGDW6SYwRsbUFiR2C0C5DzdsWav",
  },
})
  .then((res) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    } else {
      throw new Error("error");
    }
  })

  .then((detail) => {
    console.log(detail);

    const primaryBtn = document.getElementById("load-primary");
    primaryBtn.addEventListener("click", function () {
      generateCards(detail);
    });
  })

  .catch((err) => {
    alert(err);
  });
