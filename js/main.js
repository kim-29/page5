$(document).ready(function(){
  $(".fa-bars").click(function(){
    $(this).toggleClass("fa-times");
    $('.navbar').toggleClass("nav-toggle");
  })
  
  $(window).on('scroll load',function(){
    if($(window).scrollTop()<25){
      $('.header').hide();
    }else{
      $('.header').show();
    }
    
    $(".fa-bars").removeClass("fa-times");
    $('.navbar').removeClass("nav-toggle");
  })
  
  $('.buttons').click(function(){
    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
      $('.filter-image').show();
    }else{
      $('.filter-image').hide();
      $('.'+filter).show();
    }
    $('.buttons').removeClass('active');
    $(this).addClass('active');
  })
});
