// ready activa las funciones una vez se cargue el DOM
// moment libreria para fechas
//validamos que solo se cargue en la pagina del index
//el indexof devuelve uun indice y validamos su existencia des 0 o -1
$(document).ready(function () {
if(window.location.href.indexOf('index') > -1){



   //slider
   $('.imagenes').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
   });
}

   //post
   //   arreglo de JSON con post
   if(window.location.href.indexOf('index') > -1){
   var posts = [
      {
         title: 'post1',
         date: new Date(),
         content: 'Lorem ipsum dolor sit amet consecteturadipisicing elit. Dolorum nam  fugit '
      },
      {
         title: 'post2',
         date: new Date(),
         content: 'Lorem ipsum dolor sit amet consecteturadipisicing elit. Dolorum nam  fugit '
      },

      {
         title: 'post3',
         date: new Date(),
         content: 'Lorem ipsum dolor sit amet consecteturadipisicing elit. Dolorum nam  fugit '
      },
      {
         title: 'post4',
         date: new Date(),
         content: 'Lorem ipsum dolor sit amet consecteturadipisicing elit. Dolorum nam  fugit '
      },
      {
         title: 'post5',
         date: new Date(),
         content: 'Lorem ipsum dolor sit amet consecteturadipisicing elit. Dolorum nam  fugit '
      },

   ];


   posts.forEach((item, index) => {
      var poster = `
       <article class="post">
       <h2>${item.title}</h2>

       <span class="date">${item.date}</span>

       <p>
       ${item.content}
       </p>
       <a href="#" class="buton">Leer mas</a>
       <br>
   </article>
    `;


      // agregarlos
      $("#posts").append(poster);
   });

   }
   //selector tema

   var estilos = $("#tema");

   $("#to-green").click(function () {
      estilos.attr("href", "css/.green.css");
   });
   $("#to-red").click(function () {
      estilos.attr("href", "css/red.css");
   });
   $("#to-blue").click(function () {
      estilos.attr("href", "css/blue.css");
   });


   //boton subir

   $(".subir").click(function (e) {
      e.preventDefault();
      $('html,body').animate({
         scrollTop: 0
      }, 2500);
      return false;
   })

   //localsotrage login

   $("#login form").submit(function(){
		var form_name = $("#form_name").val();
//guardamos en el local storage lo ingresado
		localStorage.setItem("form_name", form_name);

	});
//almacenamos en una varuiable el valor del localstorage
	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

      //ocultamos el login
		$("#login").hide();

      //limpiamos el localstorage y recargamos la pagina para mostrar el login
		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});

	}

   // Acordeon

	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}
   	// Reloj
      if(window.location.href.indexOf('index') > -1){
		setInterval(function(){
				var reloj = moment().format("hh:mm:ss");
				$('#reloj').html(reloj);
		}, 1000);
   }
	
		// Validación
      if(window.location.href.indexOf('contact') > -1){
	
         $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
         });
   
         $.validate({
             lang: 'es',
             errorMessagePosition: 'top',
             scrollToTopOnError: true
         });
   
      }

});



