$('document').ready(function(){
	var plate = $('.flipper-block');
	var button = $('.auth-button');
	$(".auth-button").click(function(e){
		e.preventDefault();
		 $(".flipper-block").flip();
	});
});
