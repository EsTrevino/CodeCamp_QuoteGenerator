$(document).ready(function() {
	var counter = 0;
	var colors = ['#CC5500', '#4B0082', '#4A96AD', '#585858', '#DF3D82', '#E00000', '#6B8E23'];
	var $body = $('body');
	var $button = $('button');
	var $text = $('.text');

	$body.animate({ opacity: 0 }, 1);
	$text.animate({ opacity: 0 }, 1);
	$button.animate({ opacity: 0 }, 1);

	$.getJSON('https://talaikis.com/api/quotes/random/', function(results) {
		$('h2').html(`"${results.quote}"`);
		$('h5').html(`-${results.author}`);
		$body.animate().css({ backgroundColor: colors[counter % colors.length] });
		$button.css({ backgroundColor: colors[counter % colors.length] });
		$text.css({ color: colors[counter % colors.length] });
		$text.animate({ opacity: 1 }, 1000);
		$body.animate({ opacity: 1 }, 1000);
		$button.animate({ opacity: 1 }, 1000);
	});

	$('.getQuote').on('click', function(e) {
		counter++;
		$.getJSON('https://talaikis.com/api/quotes/random/', function(results) {
			$text.animate({ opacity: 0 }, 1);
			$body.animate({ opacity: 0 }, 1);
			$button.animate({ opacity: 0 }, 1);
			if (results instanceof Object) {
				$('h2').html(`"${results.quote}"`);
				$('h5').html(`-${results.author}`);
				$text.animate({ opacity: 1 }, 1000);
				$body.animate({ opacity: 1 }, 1000);
				$button.animate({ opacity: 1 }, 1000);
				$body.css({ backgroundColor: colors[counter % colors.length] });
				$button.css({ backgroundColor: colors[counter % colors.length] });
				$text.css({ color: colors[counter % colors.length] });
			}
		});
	});
});
