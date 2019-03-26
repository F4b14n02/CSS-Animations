document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});

document.onkeydown = function(e){
  var n = (window.Event) ? e.which : e.keyCode;
  if(n==123) return false;
}

$(window).scroll(function() {
	animate('fadescroll');
	animate('moveleft');
});

function animate(name) {
	$('.' + name).each(function() {
		switch(name) {
			case 'fadescroll':
				addClass(this, 'fade');
				break;
			case 'moveleft':
				addClass(this, 'left');
				break;
			default:
				break;
		}
	});
}

function addClass(object, name) {
	if (isVisible(object)) {
		$(object).addClass(name);
	} else {
		$(object).removeClass(name);
	}
}

function isVisible(object) {
	var range = 150;
	var viewport = $(window).scrollTop() + $(window).height();
	var rand = $(object).offset();
	rand.bottom = rand.top + $(object).outerHeight();
	return (!(viewport < (rand.top + range) || $(window).scrollTop() > (rand.bottom - range)));
}