
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
	
	// 事件绑定：选择第几志愿
	$('.thumbnail .confirm .btn-group .dropdown-menu a').live('click', function(){
		var self = $(this);
		if(self.attr('selected') === undefined){
			var $pre = self.closest('.dropdown-menu').find('a[selected]');
			$pre.removeAttr('selected');
			$pre.find('.icon-ok').remove();
			self.attr('selected', true);
			self.prepend('<i class="icon-ok"></i>');
		}
		return false;
	});
	
	// 事件绑定：选定按钮
	$('.thumbnail .confirm .btn-group .btn:first').live('click', function(){
		var self = $(this);
		var val  = self.siblings('.dropdown-menu').find('a[selected]').data('choice');
		
		/* 这里先要判断是否会覆盖已选的志愿,若会，则给予提示 */
		// TODO
		if(true){
			var rs = confirm('将覆盖第 '+val+ ' 志愿，确定吗？');
			// 取消按钮，中断该操作
			if(!rs) return false;
		}
		
		// TODO 发送请求
		//$.post(url, params, function(){});
	});
})
