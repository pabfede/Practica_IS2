$('.error-page').hide(0);

$('.registro-button , .no-access').click(function(){
  $('.registro').slideUp(500);
  $('.error-page').slideDown(1000);
});

$('.try-again').click(function(){
  $('.error-page').hide(0);
  $('.registro').slideDown(1000);
});