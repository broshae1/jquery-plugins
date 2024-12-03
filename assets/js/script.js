/* Gallery Carousel */

new Splide( '#image-carousel',{
    heightRatio: 0.5,
    type: 'loop'
} ).mount();

/* animate on scroll*/

AOS.init({
    duration: 1000
});