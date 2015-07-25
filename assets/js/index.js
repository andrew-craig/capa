function isMobileWidth() {
    return $('#mobile-indicator').is(':visible');
};

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
    $('.fixed-title').css(
      {'font-size': '3em'}
    );
    title.removeClass('fixed-title');
	};

	if (scroll > 190) {
    $('.fixed-title').css(
      {'font-size': '1.4em'}
    );
	} else {
    $('.fixed-title').css(
      {'font-size': '' + size + 'em'}
    );
	}
};

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

var scrollFunction = debounce(function() {
  if (!isMobileWidth()) adjustTitle();
}, 5);

$(window).scroll( scrollFunction );

/**
 * Created by Kupletsky Sergey on 17.10.14.
 *
 * Material Sidebar (Profile menu)
 * Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7
 * You can use this sidebar in Bootstrap (v3) projects. HTML-markup like Navbar bootstrap component will make your work easier.
 * Dropdown menu and sidebar toggle button works with JQuery and Bootstrap.min.js
 */

// Toggle Sidebar

$(document).ready(function() {
    var overlay = $('.sidebar-overlay');
    var page = 2;
	var url_blog = window.location;

    $('.hamburger').on('click', function() {
        var sidebar = $('#sidebar');
        sidebar.toggleClass('open');
        if ((sidebar.hasClass('sidebar-fixed-left') || sidebar.hasClass('sidebar-fixed-right')) && sidebar.hasClass('open')) {
            overlay.addClass('active');
        } else {
            overlay.removeClass('active');
        }
    });

    overlay.on('click', function() {
        $(this).removeClass('active');
        $('#sidebar').removeClass('open');
    });
	

    $('.loadmorebutton').on('click', function() {
    	$.get((url_blog+'/page/'+page),
  	  	function(content) {
			console.log(content);
			if(page <= max_pages){
				console.log("if = true");
				console.log($(content).find('.post'));
				$('.rig').append($(content).find('.post'));
				console.log(page);
				page = page + 1;
			} 
			if(page >= max_pages){
				$('.loadmore').css({'display': 'none'});
			}
		});
	});
	
});
