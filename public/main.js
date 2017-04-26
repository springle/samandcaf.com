$(document).ready(function() {
	// TweenMax.from(".header-image", .5, {x: -300, scale:0, delay:.5});
	// TweenMax.from(".title", .5, {y: -300, delay:.5})
	// TweenMax.from(".card", .5, {y:1000, delay:.5})
	// TweenMax.from(".carousel", .5, {y:1000, delay:.5})
});

$(document).ready(function(){
  $('.carousel').carousel();
});

// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();

$(document).ready(function(){
	var ctx = document.querySelector("canvas").getContext("2d"),
    dashLen = 220, dashOffset = dashLen, speed = 50,
    txt = "sam&caf", x = 10, i = 0;

	ctx.font = "50px Calibri"; 
	ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 4/5;
	ctx.strokeStyle = ctx.fillStyle = "#fc9241";

	(function loop() {
	  ctx.clearRect(x, 0, 60, 150);
	  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
	  dashOffset -= speed;                                         // reduce dash length
	  ctx.strokeText(txt[i], x, 100);                               // stroke letter

	  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
	  else {
	    ctx.fillText(txt[i], x, 100);                               // fill final letter
	    dashOffset = dashLen;                                      // prep next char
	    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
	    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
	    ctx.rotate(Math.random() * 0.005);                         // random rotation
	    if (i < txt.length) requestAnimationFrame(loop);
	  }
	})();
});