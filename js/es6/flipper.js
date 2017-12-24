$('document').ready(function(){
	var plate = $('.flipper-block');
	var button = $('.auth-button');
	// $(".flipper-block").flip(false);
	$(".auth-button").click(function(e){
		e.preventDefault();
		 $(".flipper-block").flip();
});
});

	// button.css('display','none');

// if(plate.flip(false)){
// 		plate.flip(true);
// 		} else{
// 			plate.flip(false);
// 		}
// 	});