// add contact functionality
$('#submit').on('click', function (event) {
  event.preventDefault();

  var newUser = {
    firstName: $('#firstName').val().trim(),
    lastName: $('#lastName').val().trim(),
    emailAddress: $('#emailAddress').val().trim()
  };

  $.post('/api/user', newUser).then(function (response) {
    location.href = '/';
  });
});
