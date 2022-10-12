const header = document.querySelector('header')

const stickHeader = () => {
    const scroll = window.scrollY;

    if (scroll>0) {
        header.classList.add('active')
    }
    else {
        header.classList.remove('active')
    }
};

window.addEventListener('scroll', stickHeader);




const menu= document.querySelector('.menu');
const burgerBtn= document.querySelector('.burger')
const burgerBtnActive= document.querySelector('.burger.active')

const burgerBtnSpans = document.querySelectorAll('.burger span');

burgerBtn.addEventListener('click', ()=> {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

burgerBtn.addEventListener("mouseenter", () =>{

burgerBtnSpans[0].style.backgroundColor = "#06060f";
burgerBtnSpans[1].style.backgroundColor = "#06060f";
burgerBtnSpans[2].style.backgroundColor = "#06060f";

})
burgerBtn.addEventListener("mouseleave", () =>{
  burgerBtnSpans[0].style.backgroundColor = "#e2ccea";
  burgerBtnSpans[1].style.backgroundColor = "#e2ccea";
  burgerBtnSpans[2].style.backgroundColor = "#e2ccea";

  })




const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    const key = e.target.dataset.key;

    const section =
      document.querySelector(`.${key}`).getBoundingClientRect().top +
      window.pageYOffset -
      63;

    menu.classList.remove('active');
    burgerBtn.classList.remove('active');

    window.scrollTo({ top: section, behavior: 'smooth' });
  })
);

