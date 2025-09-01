// Primer ejemplo de slide

/* window.swiper = new Swiper({
    el: '.slider__contenedor', // va a ser la clase padre que contendra los elementos
    slideClass: 'slider__slide', // va a ser la clase de los elementos hijos
    createElements: true, // nos genera el resto del código HTML
    autoplay:{ // para que arranque el slide de imagenes
        delay: 5000 // el tiempo que tardará en inicializar el carrusel en segundos, cada 1000 es un segundo
    },
    loop: true, // Cuando se acabe el carrusel de imagenes vuelve a empezar en la primera imagen
    //spaceBetween: 20 // sirve para separar la imagenes y el número se convertirá en px
    pagination: true, // Sirve para poner paginación, me mostrará la cantida de imagenes con puntos.
    navigation: true // Sirve para colocar las flechas de navegación.
}); */

// Slide con efecto de cubo

var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
    },
    pagination: {
    el: ".swiper-pagination",
    },
    autoplay:{
        delay: 5000
    },
    loop: true,
    speed: 1600
});