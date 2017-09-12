$(document).ready(() => {
	// $('.grid').masonry({
	// 	itemSelector: '.grid-item', 
	// 	columnWidth: 485, 
	// 	gutter: 30
	// });	
	$('#hello-img').addClass("expand").delay(2000).queue((next) => {
	    $('#hello-img').addClass("expand-shift");
	    $('.nav-item.about').first().addClass('expand');
	    $('.nav-item.contact').first().addClass('expand');

	    // $('#header-proj').addClass('show');
	    // $('.proj-box').addClass('expand');
	    // $('.proj-box').addClass("expand");

	    // $(".proj-box").each(() => {
	    // 	$(this).css("opacity","1");
	    // });
	    $(".proj-header-box").addClass("expand");
	    $(".grid-item").addClass("expand");
	    setTimeout(() => {$('#content-box').addClass("readyScroll")}, 1200);
	    next();
	});
	$('#hello-text').addClass("expand").delay(2000).queue((next) => {
	    $('#hello-text').removeClass("expand");
	    setTimeout(() => {$('#hello-text').remove()}, 1000);
	    next();
	});



		// let scroll = $(window).scrollTop();

		// if (scroll >= 0 && scroll <= 700) { // About
		// 	$('.nav-item-circle-active.about').first().addClass('about-active');
		// 	$(".border-bar").css("background-color","rgb(169,213,161)");
		// 	$('.header-underline.about').first().addClass('expandout');
		// } else if (scroll >= 700 && scroll <= 2100) { // Work
		// 	$('.nav-item-circle-active.work').first().addClass('work-active');
		// 	$(".border-bar").css("background-color","rgb(140, 210, 249)");
		// 	$('.header-underline.work').first().addClass('expandout');
		// } else if (scroll >= 2100 && scroll <= 3500) { // Projects
		// 	$('.nav-item-circle-active.projects').first().addClass('projects-active');
		// 	$(".border-bar").css("background-color","rgb(248, 220, 118)");
		// 	$('.header-underline.projects').first().addClass('expandout');
		// }
		// else { // Contact
		// 	$('.nav-item-circle-active.contact').first().addClass('contact-active');
		// 	$(".border-bar").css("background-color","rgb(236, 152, 147)");
		// 	$('.header-underline.contact').first().addClass('expandout');
		// 	$('.header-underline.contact-other').first().addClass('expandout');
		// }	

	// $(window).scroll(() => {
	// 	let scroll = $(window).scrollTop();
	// 	if (!($('.md-dialog-container')[0])) {
	// 		if (scroll >= 0 && scroll <= 700) { // About
	// 			$('.nav-item-circle-active.about').first().addClass('about-active');
	// 			$('.nav-item-circle-active.work').first().removeClass('work-active');
	// 			$(".border-bar").css("background-color","rgb(169,213,161)");
	// 			$('.header-underline.about').first().addClass('expandout');
	// 		} else if (scroll >= 700 && scroll <= 2100) { // Work
	// 			$('.nav-item-circle-active.about').first().removeClass('about-active');
	// 			$('.nav-item-circle-active.projects').first().removeClass('projects-active');
	// 			$('.nav-item-circle-active.work').first().addClass('work-active');
	// 			$(".border-bar").css("background-color","rgb(140, 210, 249)");
	// 			$('.header-underline.work').first().addClass('expandout');
	// 		} else if (scroll >= 2100 && scroll <= 3500) { // Projects
	// 			$('.nav-item-circle-active.work').first().removeClass('work-active');
	// 			$('.nav-item-circle-active.contact').first().removeClass('contact-active');
	// 			$('.nav-item-circle-active.projects').first().addClass('projects-active');
	// 			$(".border-bar").css("background-color","rgb(248, 220, 118)");
	// 			$('.header-underline.projects').first().addClass('expandout');
	// 		}
	// 		else { // Contact
	// 			$('.nav-item-circle-active.projects').first().removeClass('projects-active');
	// 			$('.nav-item-circle-active.contact').first().addClass('contact-active');
	// 			$(".border-bar").css("background-color","rgb(236, 152, 147)");
	// 			$('.header-underline.contact').first().addClass('expandout');
	// 			$('.header-underline.contact-other').first().addClass('expandout');
	// 		}
	// 	}
	// });
});

function goToByScroll(id){
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top - 120},
        'slow');
}

// let elem = document.querySelector('.grid');
// let msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 480
// });

