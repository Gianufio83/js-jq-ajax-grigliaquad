$(document).ready(
  function() {
    $('.box').click(function() {
        $.ajax(
          {
            url : "https://flynn.boolean.careers/exercises/api/random/int",
            method : "GET",
            success: function(data, stato){
              var number = data.response;
              if (data.response <= 5) {
                $('.box').css('background', 'yellow');
                $('.box p').text(data.response);
              } else {
                  $('.box').css('background', 'green');
                  $('.box p').text(data.response);
              }
            },
            error: function(richiesta, stato, errore){
              alert("E' avvenuto un errore" + errore);
            }
          });
        });


      });
