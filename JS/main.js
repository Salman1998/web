function myFunction(){
            document.getElementById('loading').style.display = 'none';
        }

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
        loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

function showSaid(){
    document.getElementById('addclass').classList.toggle('show-menu');
} 