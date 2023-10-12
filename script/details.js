const addressBarContent = new URLSearchParams(location.search);

const eventId = addressBarContent.get("eventid");

const mainRow = document.getElementById("main-row");

const generateCard = function (detail) {
  console.log(detail);
  mainRow.innerHTML = `<div class="col-6 card mb-3">
    <img src="${detail.src.large}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${detail.alt}</h5>
      <p class="card-text">"Artist:${detail.photographer}"</p>
      <p class="card-text">"Website:${detail.photographer_url}"</small></p>
    </div>
  </div>`;
};

fetch("https://api.pexels.com/v1/photos/" + eventId, {
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
    generateCard(detail);
  })

  .catch((err) => {
    alert(err);
  });
