
$.metadata.setType("attr", "validation");

$(function(){
	$('#sidebar').load('menu_1.html');
	$('.navbar.navbar-fixed-top').load('header.html');
	
	$("#list table").tablesorter({ 
		sortList: [[1,0]],
		headers: {
			5: {sorter: false}
		}
	});
	showMsg("测试show message");
	
	// 初始化: 瀑布流布局
	var $container = $('.thumbnails');
	$container.imagesLoaded(function(){
	  $container.masonry({
	    itemSelector : 'li.span3'
	  });
	});
	
	// 当点击学院tab的时候，触发该事件，
	// reload瀑布流布局，防止因取不到image的width, height, 造成页面混乱
	$('#college_select a[data-toggle="tab"]').on('shown', function (e) {
		$($(this).attr("href")).find('.thumbnails').masonry('reload');
	});
	
	// 初始化：详细资料 浮出框
	$('a[rel="popover"]').popover();
})
