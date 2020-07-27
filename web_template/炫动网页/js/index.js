var c = document.getElementById('canv'),
  $ = c.getContext('2d'),
  w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  t = 0, num = 930, u=180,
  s, a, b, 
  x, y, _x, _y,
  _t = 1 / 4;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

var anim = function() {
  window.requestAnimationFrame(anim);
  $.globalCompositeOperation = 'destination-out';
  $.fillStyle = 'hsla(0, 100%, 65%, .3)';
  $.fillRect(0, 0, w, h);
  $.globalCompositeOperation = 'lighter';
  for (var i = 0; i < 1; i++) {
    x = 0;
    $.beginPath();
    for (var j = 0; j < num; j++) {
      $.strokeStyle = 'hsla('+u*random(.01,.9)+',100%,60%,.3)';
      x += Math.sqrt(.9) * random(Math.atan(.99),Math.atan(200));
      y = x * Math.sin(i + 2 * t + x / 2) / 9;
      _x = x * Math.cos(b) + y * Math.sin(i);
      _y = x * Math.sin(b) + y * Math.cos(i);
      b = (j+i/2*.21) * Math.PI / 23;
      $.arc(w / 2 + _x, h / 2 + _y, 0.008, i*3, j+Math.atan(.002) * Math.PI);
    }
    $.lineWidth=random(.01,20);
    $.stroke();
  }
  t += _t;
  u-=8;
};
anim();

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);