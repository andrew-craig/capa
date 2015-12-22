$(document).ready(function() {
    var page = 2;
	var url_blog = window.location;

    $('.loadmorebutton').on('click', function() {
    	$.get((url_blog+'/page/'+page),
  	  	function(content) {
			if(page <= max_pages){
				$('.rig').append($(content).find('.post'));
				page = page + 1;
			}
			if(page > max_pages){
				$('.loadmore').css({'display': 'none'});
			}
		});
	});

});
