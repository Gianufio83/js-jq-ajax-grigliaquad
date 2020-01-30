$(document).ready(
  function() {
    $('.box').click(function() {
      var selezione = $(this);
        $.ajax(
          {
            url : "https://flynn.boolean.careers/exercises/api/random/int",
            method : "GET",
            success: function(data, stato){
              var number = data.response;
              if (data.response <= 5) {
                selezione.css('background', 'yellow');
                selezione.find('p').text(data.response);
              } else {
                  selezione.css('background', 'green');
                  selezione.find('p').text(data.response);
              }
            },
            error: function(richiesta, stato, errore){
              alert("E' avvenuto un errore" + errore);
            }
          });
        });


      });
