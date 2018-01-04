////////////////////////  arrow down scroll  //////////////////////
var arrowDown = document.getElementsByClassName('up__link');

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
});