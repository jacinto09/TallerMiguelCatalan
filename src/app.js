const coche = document.getElementById('coche');
const burger = document.getElementById('burger');
const menu = document.querySelector('#myMenu');
const buttonR = document.querySelector('.btn-r');
const buttonL = document.querySelector('.btn-l');
const contador1 = document.querySelector('.contador1');
const email = document.querySelector('.fa-envelope');
const emailOculto = document.querySelector('.email-oculto');
// full page 
new fullpage('#fullpage', {
	//options here
   navigation: true,
   anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu',
	autoScrolling:true,
	scrollHorizontally: true,
   
   
   
});
// slides
new Splide( '.splide',{
   height : '40vh',
   perPage: 1 ,
   type   : 'loop',
   cover: 'true'
}).mount();;


// responsive menu
burger.addEventListener('click',()=>{
   menu.classList.toggle('show');
});


buttonR.addEventListener('click', function (e) {
   coche.src = "/Imagenes/foto1.jpg";
});
buttonL.addEventListener('click', function (e) {
      coche.src = "/Imagenes/foto2.jpg";
   });

   function toggleMenu(event){
      document.getElementById('myMenu').classList.toggle ='show'
   };


