$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    responsiveClass: true,
    autoplay:true,
    
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3 ,
            nav:false,
            loop:false
        }
    }
})

document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("myVideo");
    video.controls = false;
});