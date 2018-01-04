////////////////////////  arrow down scroll  //////////////////////

var obj = document.getElementById('1');
var arrow = document.getElementsByClassName('arrow__link');

var i = 0;
var t;
var y = 0;
function scroll(elem){
	var box = elem.getBoundingClientRect();
	var topY = box.top + pageYOffset;
	
	if(i < topY){
		window.scrollBy(0,topY/20);
		t = setTimeout('scroll(obj)',10);	
		i+=(topY/20)-1;
		y++;
	} else {
		clearTimeout(t);
		i = 0;
	}	
}

arrow[0].addEventListener('click',function(e){
	e.preventDefault();
	scroll(obj);
});


////////////////////////  arrow down scroll  //////////////////////
/*var arrowDown = document.getElementsByClassName('up__link');

var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}

arrowDown[0].addEventListener('click',function(e){
	e.preventDefault();
	up();
});*/


////////////////////  menu display   /////////////////////////////////


var hamburger = document.getElementsByClassName('hamburger');
var menu = document.getElementsByClassName('menu-setion');

hamburger[0].addEventListener('click', function(e){
	e.preventDefault();
	if(this.classList.contains('active') == false){
		menu[0].style.display = "flex";
		this.classList.add('active');
	} else if (this.classList.contains('active')){
		this.classList.remove('active');
		menu[0].style.display = "none";
	}
	
})
