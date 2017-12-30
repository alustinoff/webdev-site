////////////////////////  arrow scroll  //////////////////////

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
