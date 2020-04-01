/* eslint-disable func-style */
function carouselSlider(carouselClass, entryClass, prevButtonClass, nextButtonClass, maxNextClick, hiddenClass) {
  const entries = document.querySelectorAll(`.${entryClass}`);
  const carousel = document.querySelector(`.${carouselClass}`);
  const prevButt = document.querySelector(`.${prevButtonClass}`);
  const nextButt = document.querySelector(`.${nextButtonClass}`);
  const size = entries[0].clientWidth;
  let counter = 0;


  nextButt.addEventListener('click', handleNext);
  prevButt.addEventListener('click', handlePrev);


  function handleNext() {
    counter++;
    entries.forEach(entry => {
      entry.style.transition = 'transform 0.4s ease-in-out';
      entry.style.transform = `translateX(-${size * counter}px)`;
    });
    if (counter === maxNextClick) {
      nextButt.classList.toggle(hiddenClass);
    }
    if (counter === 1) {
      prevButt.classList.remove(hiddenClass);
    }
  }


  function handlePrev() {
    counter--;
    entries.forEach(entry => {
      entry.style.transition = 'transform 0.4s ease-in-out';
      entry.style.transform = `translateX(-${size * counter}px)`;
    });
    if (counter === 0) {
      prevButt.classList.toggle(hiddenClass);
    }

    if (counter === maxNextClick - 1) {
      nextButt.classList.remove(hiddenClass);
    }
  }
}

export default carouselSlider;