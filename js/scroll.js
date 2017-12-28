var obj = document.getElementById('1');
var arrow = document.getElementsByClassName('arrow__link');



/*var t;
function scroll(elem) { 
  var box = elem.getBoundingClientRect();

  var topY = box.top + pageYOffset;
  // if(topY != window.clientY){
  	
  	window.scrollTo(0, topY);
  	t = setTimeout('scroll()',20);
  	console.log('yeeeee');
  // } else{
  	// clearTimeout(t);
  	// console.log('nope')
  // } 
  // return false;
}*/

var t;
function scroll(elem){
	var box = elem.getBoundingClientRect();
	var topY = box.top + pageYOffset;
	while(pageYOffset < topY){
		window.scrollBy(0,100);
		t = setTimeout('scroll()',20);	
		pageYOffset+=100;
	}
}

arrow[0].addEventListener('click',function(e){
	e.preventDefault();
	scroll(obj);
});