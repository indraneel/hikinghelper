var autocomplete = new google.maps.places.Autocomplete(document.getElementById('location-input'), {types: ['(regions)']});

var invalidEmail = false;

function validEmail(email){
	return (email.indexOf("@") > 0) && (email.indexOf(".") > 0)
}

function isScrolledIntoView(elem)
{
		var $elem = $(elem);
		var $window = $(window);

		var docViewTop = $window.scrollTop();
		var docViewBottom = docViewTop + $window.height();

		var elemTop = $elem.offset().top;
		var elemBottom = elemTop + $elem.height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function() {

	$(window).scroll(function() {
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
				// do something
				console.log("Haven't scrolled in 250ms!");
		}, 250));
	});

	$("#about").click(function (){
			$('html, body').animate({
					scrollTop: $(".about").offset().top
			}, 2000);
	});


	$('#signup-form').on('submit', function(e) {
		e.preventDefault();

		var name = $('#name-input').val(), eaddress = $('#email-input').val(), location = $('#location-input').val(), distance = $('#distance-input').val(), transport = $('#transport-input').val(), tripLength = $('#length-input').val(), activities = $('#activities-input').val();

		var htmlString = '<p>Name: ' + name + '</p><p>Email address: ' + eaddress + '</p><p>Location: ' + location + '</p><p>Distance: ' + distance + '</p><p>Method of transport: ' + transport + '</p><p>Length of trip: ' + tripLength + '</p><p>Preferred activities: ' + activities +'</p>';
		if (!validEmail(eaddress)) {
			$('#email-input').css({ "border": '#FF0000 1px solid'});
			return;
		} else {
			$('#email-input').css({ "border": 'none'});
			// $.ajax({
			//   type: 'POST',
			//   url: 'https://mandrillapp.com/api/1.0/messages/send.json',
			//   data: {
			//     'key': 'W7gRFyLglBdYZfka0BbG_A',
			//     'message': {
			//       'from_email': 'rick@hikinghelper.com',
			//       'to': [{ 'email': 'rick@hikinghelper.com',
			//               'name': 'Rick',
			//               'type': 'to'
			//             }],
			//       'autotext': 'true',
			//       'subject': 'New Hiker to Help!',
			//       'html': htmlString
			//     }
			//   }
			// });
			$('.questions').append("Your trip request has been submitted");
		}
	});

});
