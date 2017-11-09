(function () {
  var a1 = document.getElementById('a1'),
      a2 = document.getElementById('a2'),
      a3 = document.getElementById('a3'),
      a4 = document.getElementById('a4');
  a1.onclick = function () {
    a2.checked = false;
    a3.checked = false;
    a4.checked = false;
  };
  a2.onclick = function () {
    a1.checked = false;
    a3.checked = false;
    a4.checked = false;
  };
  a3.onclick = function () {
    a1.checked = false;
    a2.checked = false;
    a4.checked = false;
  };
  a4.onclick = function () {
    a1.checked = false;
    a2.checked = false;
    a3.checked = false;
  };
})();

(function () {
  var descr = document.getElementById('descr'),
      featrs = document.getElementById('featrs'),
      dims = document.getElementById('dims');
  descr.onclick = function () {
    featrs.checked = false;
    dims.checked = false;
  };
  featrs.onclick = function () {
    descr.checked = false;
    dims.checked = false;
  };
  dims.onclick = function () {
    featrs.checked = false;
    descr.checked = false;
  };
})();

(function () {
  var b1 = document.getElementById('b1'),
      b2 = document.getElementById('b2'),
      b3 = document.getElementById('b3'),
      b4 = document.getElementById('b4');
  b1.onclick = function () {
    b2.checked = false;
    b3.checked = false;
    b4.checked = false;
  };
  b2.onclick = function () {
    b1.checked = false;
    b3.checked = false;
    b4.checked = false;
  };
  b3.onclick = function () {
    b1.checked = false;
    b2.checked = false;
    b4.checked = false;
  };
  b4.onclick = function () {
    b1.checked = false;
    b2.checked = false;
    b3.checked = false;
  };
})();

(function () {
  var descr1 = document.getElementById('descr1'),
      featrs1 = document.getElementById('featrs1'),
      dims1 = document.getElementById('dims1');
  descr1.onclick = function () {
    featrs1.checked = false;
    dims1.checked = false;
  };
  featrs1.onclick = function () {
    descr1.checked = false;
    dims1.checked = false;
  };
  dims1.onclick = function () {
    featrs1.checked = false;
    descr1.checked = false;
  };
})();

(function () {
  var c1 = document.getElementById('c1'),
      c2 = document.getElementById('c2'),
      c3 = document.getElementById('c3'),
      c4 = document.getElementById('c4');
  c1.onclick = function () {
    c2.checked = false;
    c3.checked = false;
    c4.checked = false;
  };
  c2.onclick = function () {
    c1.checked = false;
    c3.checked = false;
    c4.checked = false;
  };
  c3.onclick = function () {
    c1.checked = false;
    c2.checked = false;
    c4.checked = false;
  };
  c4.onclick = function () {
    c1.checked = false;
    c2.checked = false;
    c3.checked = false;
  };
})();

(function () {
  var descr2 = document.getElementById('descr2'),
      featrs2 = document.getElementById('featrs2'),
      dims2 = document.getElementById('dims2');
  descr2.onclick = function () {
    featrs2.checked = false;
    dims2.checked = false;
  };
  featrs2.onclick = function () {
    descr2.checked = false;
    dims2.checked = false;
  };
  dims2.onclick = function () {
    featrs2.checked = false;
    descr2.checked = false;
  };
})();

(function () {
  var d1 = document.getElementById('d1'),
      d2 = document.getElementById('d2'),
      d3 = document.getElementById('d3'),
      d4 = document.getElementById('d4');
  d1.onclick = function () {
    d2.checked = false;
    d3.checked = false;
    d4.checked = false;
  };
  d2.onclick = function () {
    d1.checked = false;
    d3.checked = false;
    d4.checked = false;
  };
  d3.onclick = function () {
    d1.checked = false;
    d2.checked = false;
    d4.checked = false;
  };
  d4.onclick = function () {
    d1.checked = false;
    d2.checked = false;
    d3.checked = false;
  };
})();

(function () {
  var descr3 = document.getElementById('descr3'),
      featrs3 = document.getElementById('featrs3'),
      dims3 = document.getElementById('dims3');
  descr3.onclick = function () {
    featrs3.checked = false;
    dims3.checked = false;
  };
  featrs3.onclick = function () {
    descr3.checked = false;
    dims3.checked = false;
  };
  dims3.onclick = function () {
    featrs3.checked = false;
    descr3.checked = false;
  };
})();


//SLIDER OUR TEAM BEGINNER
(function () {
  document.getElementById('slider-left').onclick = sliderLeft;
  document.getElementById('slider-right').onclick = sliderRight;
  var left = 0;
  var polosa = document.getElementById('polosa');

  function sliderLeft(){
  	left = left - 246;
  	if (left < - 984) {
  		left = 0;
  	}
  	polosa.style.left = left + 'px';
  }

  function sliderRight() {
  	left = left + 246;
  	if (left > 0) {
  		left = - 984;
  	}
  	polosa.style.left = left + 'px';
  }

})();
//SLIDER OUR TEAM END


//SLIDER SURFERS BEGINNER

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//SLIDER SURFERS END
