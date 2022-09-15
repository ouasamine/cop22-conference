const speakers = [{
  name: 'H.E. Dr. Hakima El Haite',
  position: 'Minister Delegate in Charge of Environment of the Minister of Energy, Mining, Water and Environment of Morocco',
  desc: 'PHD in Environmental Engineering from the Scool of Mines of Saint Etienne and a Degree in political communication, University of Washington.',
  img: './img/hakima-el-haite-900x600.jpg',
},
{
  name: 'H. E. Siti Nurbaya Bakar',
  position: 'Minister of Environment and Forestry, Republic of Indonesia',
  desc: "Master's degree at the International Institute for Aerospace Survey and Earth Sciences, Netherlands and Ph.D. from the Bogor Institute of Agriculture.",
  img: './img/siti-nurbaya-900x600.jpg',
},
{
  name: 'Erik Solheim',
  position: 'Executive Director of United Nations Environment Programme-UNEP',
  desc: 'Graduated from the University of Oslo in 1980 with a cand.mag. degree after studying history, sociology and political science.',
  img: './img/erik-solheim-900x600.jpg',
},
{
  name: 'Mafalda Duarte',
  position: 'CEO of Climate Investment Funds (CIF)',
  desc: 'Master’s in Economic Policy Management, Development Economics and International Development, Columbia University.',
  img: './img/mafalda-duarte-900x600.jpg',
},
{
  name: 'Bea Perez',
  position: 'Head of Global Office of Sustainability',
  desc: 'Bea holds a Bachelor of Science degree in Marketing from the University of Maryland.',
  img: './img/bea-perez-900x600.jpg',
},
{
  name: 'Lisa Walker',
  position: 'CEO of Ecosphere +',
  desc: ' Lisa worked in the oil and gas sector for >17 years and has been closely involved in all aspects of climate change strategy development & implementation.',
  img: './img/lisa-walker-900x600.jpg',
},

{
  name: 'Lisa Davis',
  position: 'Siemens Oil & Gas Responsible',
  desc: 'Bachelor of Science (B.S.), Chemical Engineering, University of California.',
  img: './img/lisa-davis-900x600.jpg',
},
{
  name: 'M. Mustapha Bakkoury',
  position: 'Chairman of the Management Board of Masen and President of the Casablanca-Settat Region, Morocco',
  desc: 'Master’s degree in banking and finance, Ecole des Ponts et Chaussées, Paris.',
  img: './img/mustapha-bakkoury-900x600.png',
}];

const speakersContainer = document.querySelector('#speakers > div');

speakers.forEach((speaker) => {
  speakersContainer.innerHTML += `
  <div class="speaker">
  <img src="${speaker.img}" alt="${speaker.name} Image">
  <div class="text">
    <h3>${speaker.name}</h3>
    <p class="position">${speaker.position}</p>
    <div class="h-line"></div>
    <p class="exp">${speaker.desc}</p>
  </div>
  </div>
  `;
});