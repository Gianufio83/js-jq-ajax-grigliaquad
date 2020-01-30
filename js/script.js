$(document).ready(
  function() {
    $('.box').click(function() {
        $.ajax(
          {
            url : "https://flynn.boolean.careers/exercises/api/random/int",
            method : "GET",
            success: function(data, stato){
              console.log(data.response);
            },
            error: function(richiesta, stato, errore){
              alert("E' avvenuto un errore" + errore);
            }
          });
        });
      });
