var nameInput = document.getElementById("input-name");
var mailInput = document.getElementById("input-mail");
var sendButton = document.getElementById("send");
var resetButton = document.getElementById("reset");
var textArea = document.getElementsByClassName("contact-form__input-textarea")[0];
var modal = document.getElementsByClassName("modal-block")[0];
var CloseButton = document.getElementsByClassName("modal-block__button")[0];

function validate(){
	if(!nameInput.value || !mailInput.value || !textArea.value){
		alert('Заполните все поля');
	} else if(!modal.classList.contains('modal-block_active')){
		modal.classList.add('modal-block_active');
	}
}

sendButton.addEventListener('click', function(e){
	e.preventDefault();
	validate();
})


reset.addEventListener('click', function(e){
	e.preventDefault();
	nameInput.value	= "";
	mailInput.value = "";
	textArea.value = "";
});

CloseButton.addEventListener('click', function(){
	modal.classList.remove('modal-block_active');
	nameInput.value	= "";
	mailInput.value = "";
	textArea.value = "";
})