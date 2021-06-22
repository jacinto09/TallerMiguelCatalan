
const menu = document.getElementById('myMenu');
const buttonr = document.getElementById('b-reparacion');
const buttona = document.getElementById('b-aceite');
const buttonan = document.getElementById('b-analisis');
const buttonf= document.getElementById('b-frenos');
const buttoncerrar_r = document.getElementById('cerrar-r');
const buttoncerrar_a = document.getElementById('cerrar-a');
const buttoncerrar_an = document.getElementById('cerrar-an');
const buttoncerrar_f = document.getElementById('cerrar-f');

// full page 
new fullpage('#fullpage', {
	//options here
   navigation: true,
   anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu:['#myMenu', '.footer'],
	autoScrolling:true,
	
   
   
   
});
// slides
new Splide( '.splide',{
   height : '40vh',
   perPage: 1 ,
   type   : 'loop',
   cover: 'true'
}).mount();

// functions

buttonr.addEventListener('click', () =>{
   document.getElementById('descripcion-r').classList.toggle('detallesr');
});
buttoncerrar_r.addEventListener('click',() =>{
   document.getElementById('descripcion-r').classList.remove('detallesr');
});


buttona.addEventListener('click', () =>{
   document.getElementById('descripcion-a').classList.toggle('detallesr');
});
buttoncerrar_a.addEventListener('click',() =>{
   document.getElementById('descripcion-a').classList.remove('detallesr');
});


buttonan.addEventListener('click', () =>{
   document.getElementById('descripcion-an').classList.toggle('detallesr');
});
buttoncerrar_an.addEventListener('click',() =>{
   document.getElementById('descripcion-an').classList.remove('detallesr');
});


buttonf.addEventListener('click', () =>{
   document.getElementById('descripcion-f').classList.toggle('detallesr');
});
buttoncerrar_f.addEventListener('click',() =>{
   document.getElementById('descripcion-f').classList.remove('detallesr');
});







