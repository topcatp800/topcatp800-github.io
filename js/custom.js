 <!-- =============================================== -->
 <!-- ========== START SCROLL TO TOP SCRIPT ========== -->
 <!-- =============================================== -->
 (function($) { "use strict";
$(document).ready(function() {
     $(".scrollup").hide();
     $(window).scroll(function() {
         if ($(this).scrollTop() > 400) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });
     $('.scrollup').click(function() {
         $("html, body").animate({
             scrollTop: 0
         }, 800);
         return false;
     });
 });
 })(jQuery);
<!-- =============================================== -->
<!-- ========== END SCROLL TO TOP SCRIPT ========== -->
<!-- =============================================== -->
	 
<!-- =============================================== -->
<!-- ========== START MOBILE MENU SETTINGS ========== -->
<!-- =============================================== -->
 (function($) { "use strict";
$(document).ready(function() {
 $('#navigation-button').click(function(){
    $('.drop-down').toggleClass('active');
  });
});
 })(jQuery);
<!-- =============================================== -->
<!-- ========== END MOBILE MENU SETTINGS ========== -->
<!-- =============================================== -->

<!-- =============================================== -->
<!-- ========== START PAGE LOADER ========== -->
<!-- =============================================== -->
 (function($) { "use strict";

$(window).load(function() {
	$(".loader-img").delay(500).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow");
	var hash = window.location.hash;
	if(!hash) { 
	// Do nothing //
	} else {
	$(document).scrollTop( $(hash).offset().top -58); 
}
});
 })(jQuery);
<!-- =============================================== -->
<!-- ========== END PAGE LOADER ========== -->
<!-- =============================================== -->
	 
	 
<!-- =============================================== -->
<!-- ========== START BOOTSTRAP SCROLLSPY ========== -->
<!-- =============================================== -->
 (function($) { "use strict";
	 $('html').scrollspy({ target: '.top-menu' });
	  })(jQuery);
<!-- =============================================== -->
<!-- ========== END BOOTSTRAP SCROLLSPY ========== -->
<!-- =============================================== -->