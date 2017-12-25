var flipBlock = $('.flipper-block');
var authButton = $('.auth-button');
var exit = $('.exit-link');

$(authButton).click(function(event){
	event.preventDefault();
	flipBlock.toggleClass('flipped');
	console.log('yes');
})

// $(window).click( function(event) {
// 	var target = event.target;
//     if(target == authButton){
//     	console.log('yeeee');
//     } else {
//     	console.log(authButton);
//     }
//     	// if(flipBlock.hasClass('flipped') == false){
// 	    // 		// event.preventDefault();
// 	    // 		// flipBlock.addClass("flipped");
// 	    // 		// authButton.css("display","none");
// 	    // 		$('#block').addClass('flipped');
// 	    // 		console.log('yes');
// 	    // 	} 
// 	    // 	else {
//     	// 	console.log(event.target);
//     	// }
	    
// });