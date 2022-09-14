const speaker_1 = {
  name: "H.E. Dr. Hakima El Haite",
  position: "Minister Delegate in Charge of Environment of the Minister of Energy, Mining, Water and Environment of Morocco",
  desc: "PHD in Environmental Engineering from the Scool of Mines of Saint Etienne and a Degree in political communication, University of Washington.",
  img: "./img/hakima-el-haite-900x600.jpg"
};
const speaker_2 = {
  name: "H. E. Siti Nurbaya Bakar",
  position: "Minister of Environment and Forestry, Republic of Indonesia",
  desc: "Master's degree at the International Institute for Aerospace Survey and Earth Sciences, Netherlands and Ph.D. from the Bogor Institute of Agriculture.",
  img: "./img/siti-nurbaya-900x600.jpg"
};
const speaker_3 = {
  name: "Erik Solheim",
  position: "Executive Director of United Nations Environment Programme-UNEP",
  desc: "Graduated from the University of Oslo in 1980 with a cand.mag. degree after studying history, sociology and political science.",
  img: "./img/erik-solheim-900x600.jpg"
};

const speakers = [speaker_1,speaker_2,speaker_3];
const speakersContainer = document.querySelector("#speakers > div");

speakers.forEach((speaker) => {
  speakersContainer.innerHTML += `
  <div class="speaker">
  <img src="${speaker.img}">
  <div class="text">
    <h3>${speaker.name}</h3>
    <p class="position">${speaker.position}</p>
    <div class="h-line"></div>
    <p class="exp">${speaker.desc}</p>
  </div>
  </div>
  `;
});