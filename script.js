$(document).ready(function(){
    $(window).scroll(function(){
        // barra de navegación pegajosa en el script de desplazamiento
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // botón de desplazamiento hacia arriba mostrar/ocultar secuencia de comandos
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // guion deslizable
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // eliminando el desplazamiento suave al hacer clic en el botón deslizable hacia arriba
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // aaplicando nuevamente desplazamiento suave en los elementos del menú, haga clic
        $('html').css("scrollBehavior", "smooth");
    });

    // alternar secuencia de comandos de menú/barra de navegación
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // guión de animación de texto de escritura
    var typed = new Typed(".typing", {
        strings: ["Universitario", "Estudiante", "Programador", "Diseñador", "Trabajador Independiente"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Universitario", "Estudiante", "Programador", "Diseñador", "Trabajador Independiente"], 
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // guion carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});