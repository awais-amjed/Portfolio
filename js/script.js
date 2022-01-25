const mobileMenu = document.querySelector('.mobile-menu');
const linksInMobileMenu = document.querySelectorAll('.mobile-menu-content li a');
const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');

openButton.addEventListener('click', (event) => {
  event.preventDefault();
  mobileMenu.style.display = 'block';
});

closeButton.addEventListener('click', (event) => {
  event.preventDefault();
  mobileMenu.style.display = 'none';
});

linksInMobileMenu.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

const works = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageURL: './images/work-1-snapshot.svg',
    technologies: ['html', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/awais-amjed/',
  },
  {
    name: 'Uber Navigation',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    imageURL: './images/work-2-snapshot.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/awais-amjed/',
  },
  {
    name: 'Facebook 360',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    imageURL: './images/work-3-snapshot.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/awais-amjed/',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    imageURL: './images/work-4-snapshot.svg',
    technologies: ['html', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/awais-amjed/',
  },
];

const worksSection = document.getElementById('portfolio');

works.forEach((work) => {
  let techs = '';

  work.technologies.forEach((tech) => { techs += `<li class="tag">${tech}</li>`; });

  worksSection.innerHTML += `<div class="card">
  <div class="project-image">
      <img src="${work.imageURL}" alt="Work 1 Screenshot">
  </div>
  <div class="project-description">
      <h3>${work.name}</h3>
      <div class="project-details">
          <p>CANOPY</p>
          <p class="dot">&#x2B24;</p>
          <p class="project-details-color">Back End Dev</p>
          <p class="dot">&#x2B24;</p>
          <p class="project-details-color">2015</p>
      </div>
      <p>${work.description}</p>
      <ul class="tags-section">
          ${techs}  
      </ul>
      <input class="alignment-start button" type="button" value="See Project">
  </div>
</div>
`;
});
