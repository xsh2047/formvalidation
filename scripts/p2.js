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
	hidden = $('#hidden');
	patt = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	valid = true;

	fields.each(function(){
		if(this.value == null || this.value == ""){
			displayError('#errors');
			displayError('#empty');
			valid = false;
			return false;
		}
	});

	if(password.val() != confirm.val()){
		displayError('#errors');
		displayError('#mismatched');
		valid = false;
	}

	console.log(password.val());
	console.log(confirm.val());
	
	if(!(patt.test(email.val()))){
		displayError('#errors');
		displayError('#invalid');
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
}