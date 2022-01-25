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
