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
