
let main = document.getElementsByTagName('main');
let sliders = main[0].getElementsByClassName('slider');

window.addEventListener('scroll', function hiddenShow(evt){
  
  

  if (window.scrollY >= 10  && window.scrollY < 19){
    
    sliders[0].classList.add('opacity-100');
  } else if(window.scrollY >= 20 && window.scrollY < 29)
  {
    sliders[1].classList.add('opacity-100');
  } else if(window.scrollY >= 30){
    main[0].classList.remove('hightMain');
    sliders[2].classList.add('opacity-100');
  }
  

})

