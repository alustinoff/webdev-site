var flipBlock = document.getElementsByClassName("flipper-block")[0];
var authButton = document.getElementsByClassName("auth-button-link")[0];
var exit = document.getElementById('exit');
var enterButton = document.getElementById('enter');
var login = document.getElementsByClassName('login')[0];
var password = document.getElementsByClassName('password')[0];
var human = document.getElementsByClassName('auth__checkbox-elem')[0];
var Norobot = document.getElementsByClassName('auth__radio-elem-true')[0];
var robot = document.getElementsByClassName('auth__radio-elem-false')[0];

////////////////////////////  flipp   //////////////////////

window.addEventListener("click", function(event){
	var target = event.target;
	var flip = target.closest('.flipper-block');
	if(target == authButton){
		event.preventDefault();
		flipBlock.classList.add("flipped");
		authButton.style.display = "none";
	}
	else if (!flip || target == exit){
		event.preventDefault();
		if(flipBlock.classList.contains('flipped')){
			flipBlock.classList.remove("flipped");
			authButton.style.display = "inline";	
		}
		
	}
});


/*$(window).click(function(event){
	var target = event.target;
	var flip = target.closest('.flipper-block');
	if(target == authButton[0]){
		event.preventDefault();
		flipBlock.toggleClass('flipped');
		authButton.css("display","none");
	} 
	else if (!flip || target == exit){
		event.preventDefault();
		if(flipBlock.hasClass('flipped')){
			flipBlock.removeClass("flipped");
			authButton.css("display","inline");	
		}
		
	} 
});*/

//////////////////////////////     validation form //////////////////////////

exit.addEventListener('click', function(e){
	e.preventDefault();
	flipBlock.classList.toggle("flipped");
	authButton.style.display = "inline";	
});

/*exit.addEventListener('click', function(e){
	e.preventDefault();
	flipBlock.toggleClass('flipped');
	authButton.css("display","inline");	
});*/

function validateForm(){
	if(!login.value){
		login.style.border = "1px solid red";
	}
	if(!password.value){
		password.style.border = "1px solid red";
	}
	login.onchange = function(){
		login.style.border = "1px solid #00bfa5";

	}
	password.onchange = function(){
		password.style.border = "1px solid #00bfa5";

	}
	if(login.value && password.value && human.checked && Norobot.checked){
		window.location = "http://index.html/admin.html";
	}

}

enterButton.addEventListener('click', function(e){
	e.preventDefault();
	validateForm();
});
