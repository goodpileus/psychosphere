window.onload = function() {
  console.log(':-)');
	document.body.style.pointerEvents = "all";
	document.getElementById("wrapper").style.opacity = "1";
	$(".sun").toggleClass("show");
}

// random list //
var random = document.querySelector('.random');
for (var i = random.children.length; i >=0; i--) {
	random.appendChild(random.children[Math.random() * i | 0]);
}

var random2 = document.querySelector('.random2');
for (var i = random2.children.length; i >=0; i--) {
	random2.appendChild(random2.children[Math.random() * i | 0]);
}

// ADVANCE SLIDES
// ---------------------------------------------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
 showDivs(slideIndex += n);
}

function showDivs(n) {
 var i;
 var x = document.getElementsByClassName("slide");
 if (n > x.length) {slideIndex = 1}
 if (n < 1) {slideIndex = x.length} ;
 for (i = 0; i < x.length; i++) {
   x[i].style.opacity = "0";
   x[i].style.zIndex = "0";
 }
 x[slideIndex-1].style.opacity = "1";
 x[slideIndex-1].style.zIndex = "999";
}



var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("slide2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";
    x[i].style.zIndex = "0";
  }
  x[slideIndex2-1].style.opacity = "1";
  x[slideIndex2-1].style.zIndex = "999";
}

// setTimeout(function(){
//   var interval = setInterval(timer, 5000);
//
//   function timer() {
//     plusDivs(+1);
//   }
// }, 5000);

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            //left
						plusDivs(1);
            plusDivs2(1);
            break;
        case 39:
            //right
						plusDivs(1);
            plusDivs2(1);
            break;
    }
};

$("#smell").hover(function(){
  $('.smell-text').css("opacity", 1);
  }, function(){
  $('.smell-text').css("opacity", 0);
});

$( ".slide-wrap" ).click(function() {
	plusDivs(1);
  plusDivs2(1);
});

$( ".bar" ).click(function() {
	$(".bar").toggleClass("grow");
	$(".sun").toggleClass("show");
});
