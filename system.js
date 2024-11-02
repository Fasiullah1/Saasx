var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    autoplay:true,
    outoplaytimeout:3000,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

let mybutton =document.getElementById('mybtn');
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop>500||document.documentElement.scrollTop>500){
    mybutton.style.display="block";
  }
  else{
    mybutton.style.display="none";
  }
}
function topfunction(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}

var loader =document.getElementById('loader');
window.addEventListener('load', function(){
  loader.style.display="none";
})

let percent = document.querySelectorAll('.progess_par');

percent.forEach((id) => {
    let value = id.innerHTML;
    id.style.width = `${value}%`;
    id.textContent = ' ';
    id.dataset.text = id.dataset.text + '%';
})

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}