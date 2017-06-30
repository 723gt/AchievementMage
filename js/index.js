

$(function(){
  $('.level').change(function(){
  	$('.insert').remove();
    var val = $(this).val();
    switch(val)
    {
    	case 1:
    	  $('table tbody').appedn(_1st);
    	  break;
    	case 2:
    	  $('.insert').appedn(_2nd);
    	  break;
    	case 3:
    	  $('.insert').appedn(_3rd);
    	  break;
    }
  });
})