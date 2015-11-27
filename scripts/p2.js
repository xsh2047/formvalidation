$( window ).load(function() {
	$('input').blur(function()
	{
    	if( !$(this).val() ) {
        	$(this).addClass('invalid');
    	}else{
    		$(this).removeClass('invalid');
    	}
	});

	var errorFields = $('.error');

	init();
});



function onSubmit(){
	init();
	fields = $('.field');
	password = $('#password');
	confirm = $('#confirm');
	email = $('#email');
	yos = $('#yos');
	hidden = $('#hidden');
	patt = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	valid = true;

	fields.each(function(){
		if(this.value == null || this.value == ""){
			displayError('#errors');
			displayError('#empty');
			$(this).addClass('invalid');
			valid = false;
		}
	});

	if(password.val() != confirm.val()){
		displayError('#errors');
		displayError('#mismatched');
		password.addClass('invalid');
		confirm.addClass('invalid');
		valid = false;
	}

	console.log(yos.val());
	if(parseInt(yos.val()) < 1 || parseInt(yos.val()) > 50){
		displayError('#errors');
		displayError('#outofbounds');
		yos.addClass('invalid');
	}
	
	if(!(patt.test(email.val()))){
		displayError('#errors');
		displayError('#invalid');
		email.addClass('invalid');
		valid = false;
	}
	
	//return valid;
	return false;
}


function displayError(error){
	if($(error).hasClass("hidden")){
		$(error).removeClass("hidden");
	}
}

function init(){
	$('.error').each(function(){
		if(!$(this).hasClass("hidden")){
			$(this).addClass("hidden");
		}
	});
	$('.field').each(function(){
		if($(this).hasClass("invalid")){
			$(this).removeClass("invalid");
		}
	});
}