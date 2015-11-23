
  $(document).ready(function(){
    var link = window.location.pathname;
    $('.nav li a[href="'+link+'"]').parent().addClass('active1');
  });
