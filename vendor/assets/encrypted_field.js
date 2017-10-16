//= require jsencrypt

$(document).on('turbolinks:load', function(){
  $('form').submit(function( event ) {
    var encrypt = new JSEncrypt();
    $('[data-encrypt]').each(function(){
      unencrypted = $(this);
      encrypt.setKey($('#public_key').val());
      encrypted = encrypt.encrypt(unencrypted.val());
      if (encrypted != false) {
        unencrypted.val(encrypted);
      }  
    })
  });
});
