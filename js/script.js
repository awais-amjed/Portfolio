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
    name: 'Math Magicians',
    description: 'Math Magicians is a Single Page Application (SPA) created in React that allows users to make simple calculations & Read some famous Math Quotes - with some witty gifs and a fun UI.',
    imageURL: './images/projects/math-magicians.png',
    technologies: ['React', 'SCSS', 'JavaScript', 'HTML5'],
    liveURL: 'https://awais-amjed-math-magicians.netlify.app/',
    sourceURL: 'https://github.com/awais-amjed/math-magicians',
    details: {
      organization: 'Microverse',
      role: 'React Module',
      year: '2022',
    },
  },
  {
    name: 'Meow',
    description: 'I love cats but don\'t have any so I thought why not make a webapp for cat breeds \\¶-¶/ I know right! Anyways I created this using ReactJS.',
    imageURL: './images/projects/meow.png',
    technologies: ['React', 'SCSS', 'JavaScript', 'HTML5'],
    liveURL: 'https://awais-amjed-meow.netlify.app/',
    sourceURL: 'https://github.com/awais-amjed/meow',
    details: {
      organization: 'Microverse',
      role: 'React Module',
      year: '2022',
    },
  },
  {
    name: 'Facebook 360',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    imageURL: './images/work-3-snapshot.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/awais-amjed/',
    details: {
      organization: 'Microverse',
      role: 'React Module',
      year: '2022',
    },
  },
  {
    name: 'Multi-Post Stories',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    imageURL: './images/work-4-snapshot.svg',
    technologies: ['html', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/awais-amjed/',
    details: {
      organization: 'Microverse',
      role: 'React Module',
      year: '2022',
    },
  },
];

const worksSection = document.getElementById('portfolio');

works.forEach((work) => {
  let techs = '';

  work.technologies.forEach((tech) => { techs += `<li class="tag">${tech}</li>`; });

  worksSection.innerHTML += `<div class="card">
  <div class="project-image">
      <img src="${work.imageURL}" alt="${work.name} Screenshot">
  </div>
  <div class="project-description">
      <h3>${work.name}</h3>
      <div class="project-details">
          <p>${work.details.organization}</p>
          <p class="dot">&#x2B24;</p>
          <p class="project-details-color">${work.details.role}</p>
          <p class="dot">&#x2B24;</p>
          <p class="project-details-color">${work.details.year}</p>
      </div>
      <p>${work.description}</p>
      <ul class="tags-section">
          ${techs}  
      </ul>
      <input class="alignment-start button" type="button" value="See Project" id="${work.name}">
  </div>
</div>
`;
});

works.forEach((work) => {
  let techs = '';

  work.technologies.forEach((tech) => { techs += `<li class="tag">${tech}</li>`; });

  document.getElementById(work.name).addEventListener(
    'click', () => {
      document.body.style.overflow = 'hidden';

      document.getElementById('popup-window').innerHTML
        += `<div class="blended-background"></div>
        <div class="popup-window-content">
            <div class="card">
                <div class="project-title">
                    <div>
                        <h3>${work.name}</h3>
                        <div class="project-details">
                            <p>${work.details.organization}</p>
                            <p class="dot">&#x2B24;</p>
                            <p class="project-details-color">${work.details.role}</p>
                            <p class="dot">&#x2B24;</p>
                            <p class="project-details-color">${work.details.year}</p>
                        </div>
                    </div>
                    <a href="" id="popup-close-button"><i class="fas fa-times"></i></a>
                </div>
                <img src="${work.imageURL}" alt="Work 4 Screenshot">
                <div class="project-description">
                    <p>${work.description}</p>
                    <div class="description-wrapper">
                        <ul class="tags-section">
                            ${techs}
                        </ul>
                        <div class="button-wrapper">
                            <a href="${work.liveURL}" target="_blank" class="alignment-start button">See Live <i class="fas fa-link"></i></a>
                            <a href="${work.sourceURL}" target="_blank" class="alignment-start button">See Source <i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

      document.getElementById('popup-close-button').addEventListener(
        'click', (event) => {
          event.preventDefault();
          document.getElementById('popup-window').innerHTML = '';
          document.body.style.overflow = 'auto';
        },
      );
    },
  );
});

// Validate email field to have only lowercase characters
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailField = contactForm.elements.email;

  if (emailField.value === emailField.value.toLowerCase()) {
    contactForm.submit();
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.innerText = 'Use lowercase for Email Address';

    contactForm.insertBefore(
      errorMessage,
      contactForm.querySelector('.button'),
    );
  }
});