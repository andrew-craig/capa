$(document).ready(function() {

	$('img').each(function() {
		if($(this).attr("alt")) {
			$(this).after( "<p class='img-title'" + $(this).attr('title') + "</p>" ); 
		}
	
		if($(this).attr("caption")) {
        	$(this).after( "<p class='img-description'"+ $(this).attr("caption") +"</p>");
     	}
		
	});

});