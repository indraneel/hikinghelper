
var invalidEmail = false;

function validEmail(email){
	return (email.indexOf("@") > 0) && (email.indexOf(".") > 0)
}


$(document).ready(function() {

	var autocomplete = new google.maps.places.Autocomplete(document.getElementById('location-input'), {types: ['(regions)']});

	$('#signup-form').on('submit', function(e) {
		e.preventDefault();

		var eaddress = $('#email-input').val();
		var location = $('#location-input').val();
		var confirmationString = '<p>Hello!  Thanks for signing up for the Hiking Helper waiting list.  We will email you when we launch!</p>';
		var signupString = '<p>Email address: ' + eaddress + '</p><p>Location: ' + location + '</p>';
		if (!validEmail(eaddress)) {
			$('#email-input').css({ "border": '#FF0000 1px solid'});
			return;
		} else {
			$('#email-input').css({ "border": 'none'});

			//confirmation
			$.ajax({
				type: 'POST',
				url: 'https://mandrillapp.com/api/1.0/messages/send.json',
				data: {
					'key': 'W7gRFyLglBdYZfka0BbG_A',
					'message': {
						'from_email': 'rick@hikinghelper.com',
						'to': [
							{ 'email': eaddress,
										'type': 'to'
							}
						],
						'autotext': 'true',
						'subject': 'Thanks for signing up for Hiking Helper!',
						'html': confirmationString
					}
				}
			});

			//record
			$.ajax({
				type: 'POST',
				url: 'https://mandrillapp.com/api/1.0/messages/send.json',
				data: {
					'key': 'W7gRFyLglBdYZfka0BbG_A',
					'message': {
						'from_email': 'rick@hikinghelper.com',
						'to': [
							{ 'email': 'rick@hikinghelper.com',
										'name': 'Rick',
										'type': 'to'
							},
							{ 'email': 'indraneelpurohit+hikinghelper@gmail.com',
										'name': 'Indraneel',
										'type': 'to'
							}
						],
						'autotext': 'true',
						'subject': 'New Hiker Waiting List Signup!',
						'html': signupString
					}
				}
			});
		}
	});

});
