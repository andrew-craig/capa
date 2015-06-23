function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function adjustTitle() {
	var scroll = $(window).scrollTop(),
		bar = $('.main-navigation'),
		titleSpacing = $('.title-spacing'),
		title = $('.title'),
	    size = (((190 - scroll)/ (190 - 112.5)) * 1.4) + 1.6,
		opac = (scroll - 100)/ 95;
		  
	if (scroll >= 190) {
		bar.addClass('fixed-header');
		titleSpacing.addClass('title-spacing-fixed');
	} else {
		bar.removeClass('fixed-header');
		titleSpacing.removeClass('title-spacing-fixed');
	}
	  
	$('.fade-header').css(
		{'background': 'linear-gradient(rgba(0, 107, 176,' + opac + '),rgba(0, 107, 176,' + opac + ')), url("../assets/images/header-background.jpg")', 'background-repeat': 'no-repeat', 'background-position': 'right top'
		}
	);

	if (scroll >= 112.5) {
		title.addClass('fixed-title');
	} else {
	  	title.removeClass('fixed-title');
	}
    
	if (scroll < 190) { 	
		$('.fixed-title').css(
			{'font-size': '' + size + 'em'}
		);
	} else {
		$('.fixed-title').css(
			{'font-size': '1.4em'}
		);			
	}		
};

function isMobileWidth() {
    return $('#mobile-indicator').is(':visible');
}

document.addEventListener('DOMContentLoaded', function() {
	if (isMobileWidth()) {
		var bar = $('.main-navigation'),
		    titleSpacing = $('.title-spacing');
	
		bar.addClass('fixed-header');
		$('.fade-header').css(
			{'background': 'linear-gradient(rgba(0, 107, 176, 1),rgba(0, 107, 176, 1)), url("../assets/images/header-background.jpg")', 'background-repeat': 'no-repeat', 'background-position': 'right top'
			}
		);
	}
}, false);

if (!isMobileWidth()) {
	$(window).scroll( debounce( adjustTitle, 10 ) );
}

