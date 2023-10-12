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
       <h5 class="card-title">${element.alt}</h5>
       <p class="card-text">
         ${element.photographer}
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
  });
};

const primaryBtn = document.getElementById("load-primary");

primaryBtn.addEventListener("click", function () {
  const searchbar = document.getElementById("searchbar");
  let indexBarValue = searchbar.value;

  fetch("https://api.pexels.com/v1/search?query=" + indexBarValue, {
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
      generateCards(detail);
    })

    .catch((err) => {
      alert(err);
    });
});

const secondaryBtn = document.getElementById("load-secondary");
secondaryBtn.addEventListener("click", function () {
  const searchbar = document.getElementById("searchbar");
  let indexBarValue = searchbar.value;

  fetch("https://api.pexels.com/v1/search/?page=2&query=" + indexBarValue, {
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
      generateCards(detail);
    })

    .catch((err) => {
      alert(err);
    });
});
