var flipBlock = $('.flipper-block');
var authButton = $('.auth-button-link');
var exit = $('.exit-link');


$(window).click(function(event){
	var target = event.target;
	var flip = target.closest('.flipper-block');
	if(target == authButton[0]){
		event.preventDefault();
		flipBlock.toggleClass('flipped');
		authButton.css("display","none");
	} 
	else if (!flip){
		if(flipBlock.hasClass('flipped')){
			flipBlock.removeClass("flipped");
			authButton.css("display","inline");	
		}
		
	} 
});