$('.headerslider').slick({
    dots: true,
  infinite: true,
 
  autoplay: true,
  autoplaySpeed: 1000,


  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="imgprev"><img src="img3/Layer 40 copy.png"></button>',
  nextArrow: '<button class="imgnext"><img src="img3/Layer 40 copy 2.png"></button>',
  });
  

  $('.slidermordeen').slick({
    
  dots: false,
  infinite: true,
 
  autoplay: true,
  autoplaySpeed: 900,


  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<button class="slide-arrow prev-arrow">  <i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"> <i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      }

]
  });

  $('.partnerslider').slick({
    
    dots: false,
    infinite: true,
   
    autoplay: true,
    autoplaySpeed: 900,
  
  
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button class="slide-arrow prev-arrow">  <i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"> <i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      }

]
    });



    function reveal() {
        
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
        

      window.addEventListener("scroll", reveal);

      // To check the scroll position on page load
      reveal();


      const animNum = (EL) => {
  
        if (EL._isAnimated) return; // Animate only once!
        EL._isAnimated = true;
        
        $(EL).prop('Counter', 0).animate({
          Counter: EL.dataset.num
        }, {
          duration: 3000,
          step: function(now) {
            const text = (Math.ceil(now)).toLocaleString('en-US');
            const html = text.split(",").map(n => `<span class="count">${n}</span>`).join(",");
            $(this).html(html);
          }
        });
      };
      
      const inViewport = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) animNum(entry.target);
        });
      };
      
      $("[data-num]").each((i, EL) => {
        const observer = new IntersectionObserver(inViewport);
        observer.observe(EL);
      });


