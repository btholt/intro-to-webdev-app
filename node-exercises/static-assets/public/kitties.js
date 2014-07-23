$('button').click(function() {
  var x = Math.round(Math.random() * 500);
  var y = Math.round(Math.random() * 500);
  $('div').append('<img src="http://placekitten.com/' + x + '/' + y + '">');
});