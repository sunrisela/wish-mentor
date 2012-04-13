
$.metadata.setType("attr", "validation");

$(function(){
	$('#sidebar').load('menu_0.html');
	$('.navbar.navbar-fixed-top').load('header.html');
	
	$("#list table").tablesorter({ 
		sortList: [[1,0]],
		headers: {
			5: {sorter: false}
		}
	});
	showMsg("测试show message");
	
	var $container = $('.thumbnails');
	$container.imagesLoaded(function(){
	  $container.masonry({
	    itemSelector : 'li.span3'
	  });
	});
	
	$('#college_select a[data-toggle="tab"]').on('shown', function (e) {
		$($(this).attr("href")).find('.thumbnails').masonry('reload');
	});
})
