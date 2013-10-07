$(document).ready(function() {
   $('#submitEmail').submit(function(event){
    var address = $('#address').val()
    var patt = /\w+@\w+\.\w+/
    var message = ''
    if(address.match(patt) === null){
      message += '<div class="response">Enter a valid address</div>'
      event.preventDefault()
    }
    if(address === ""){
      event.preventDefault()
      message += '<div class="response">Email Address Blank</div>'
    }
    $('#responseDiv').html(message)
   })
});
