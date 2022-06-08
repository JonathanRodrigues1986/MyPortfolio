//Efeito Transição de tela
/* window.onload = () => {
    const anchors = document.querySelectorAll('a');
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 500);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
  
        console.log(transition_el);
  
        transition_el.classList.add('is-active');
  
        console.log(transition_el);
  
        setTimeout(() => {
          window.location.href = target;
        }, 500);
      })
    }
  } */

//Menu 
  "use strict";
  var clients = document.getElementById('clients');
  var services = document.getElementById('services');
  clients.addEventListener('click', function () {
      $(clients).toggleClass("active");
      $(".parent:not(#clients)").toggleClass("invisible");
  }, false);
  services.addEventListener('click', function () {
      $(services).toggleClass("active");
      $(".parent:not(#services)").toggleClass("invisible");
  }, false);