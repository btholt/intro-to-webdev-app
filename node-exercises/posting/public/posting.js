$('#submit-btn').click(function() {
  $.ajax({
    type: "POST",
    url: "login",
    contentType: "application/json",
    data: JSON.stringify({
      username: $("#username").val(),
      password: $("#password").val()
    }),
    success: function(data) {
      console.log('data', data);
    }
  })
});