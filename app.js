// Top Slides

const slideTop = document.querySelectorAll('.slide-a');
const prevBtnTop = document.querySelector('#prev-a');
const nextBtnTop = document.querySelector('#next-a');

const auto = true;
const intervalTime = 5000;
const intervalTimeB = 4000;
let slideInterval;

const nextSlideTop = () => {
  currentTop = document.querySelector('.current-a');
  currentTop.classList.remove('current-a')
  if(currentTop.nextElementSibling) {
    currentTop.nextElementSibling.classList.add('current-a');
  } else {
    slideTop[0].classList.add('current-a');
  }
  setTimeout(() => currentTop.classList.remove('current-a'));
}

const prevSlideTop= () => {
  currentTop = document.querySelector('.current-a');
  currentTop.classList.remove('current-a')
  if(currentTop.previousElementSibling) {
    currentTop.previousElementSibling.classList.add('current-a');
  } else {
    slideTop[slideTop.length - 1].classList.add('current-a');
  }
  setTimeout(() => currentTop.classList.remove('current-a'));
}

nextBtnTop.addEventListener('click', e => {
  nextSlideTop();
});

prevBtnTop.addEventListener('click', e => {
  prevSlideTop();
});


// Bottom Slides
const slideBottom = document.querySelectorAll('.slide-b');
const prevBtnBottom = document.querySelector('#prev-b');
const nextBtnBottom = document.querySelector('#next-b');

const nextSlideBottom = () => {
  currentBottom = document.querySelector('.current-b');
  currentBottom.classList.remove('current-b')
  if(currentBottom.nextElementSibling) {
    currentBottom.nextElementSibling.classList.add('current-b');
  } else {
    slideBottom[0].classList.add('current-b');
  }
  setTimeout(() => currentBottom.classList.remove('current-b'));
}

const prevSlideBottom= () => {
  currentBottom = document.querySelector('.current-b');
  currentBottom.classList.remove('current-b')
  if(currentBottom.previousElementSibling) {
    currentBottom.previousElementSibling.classList.add('current-b');
  } else {
    slideBottom[slideBottom.length - 1].classList.add('current-b');
  }
  setTimeout(() => currentBottom.classList.remove('current-b'));
}

nextBtnBottom.addEventListener('click', e => {
  nextSlideBottom();
});

prevBtnBottom.addEventListener('click', e => {
  prevSlideBottom();
});


if(auto) {
  slideInterval = setInterval(nextSlideTop, intervalTime);
};

if(auto) {
  slideInterval = setInterval(nextSlideBottom, intervalTimeB);
};