
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
	
	// datepicker
	$.datepicker.setDefaults({
		dateFormat: "yy-mm-dd",
		dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
		dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
		monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		nextText: "下一月",
		prevText: "上一月"
	});
	$('#edit form #birth').datepicker();
	
	/*  照片裁剪 */
	// Create variables (in this scope) to hold the API and image size
	var jcrop_api, boundx, boundy;
	// 裁剪后的效果图预览
	var updatePreview = function(c) {
		if (parseInt(c.w) > 0) {
			var rx = 100 / c.w;
			var ry = 100 / c.h;
			
			$('#avatar_preview img').css({
				width: Math.round(rx * boundx) + 'px',
				height: Math.round(ry * boundy) + 'px',
				marginLeft: '-' + Math.round(rx * c.x) + 'px',
				marginTop: '-' + Math.round(ry * c.y) + 'px'
			});
		}
	};
	
	// 渲染被裁剪的(上传)图片
	var regCropAvatar = function(){
		$('#my_avatar img').Jcrop({
			minSize: [10,10],		// 裁剪的最小宽度、高度
			maxSize: [225,300],	// 裁剪的最大宽度、高度
			setSelect : [40,40,180,180],	// 设置 默认选中区域的左上角、右下角坐标
			onSelect: updatePreview,
			onChange: updatePreview,
			onRelease: function(){},
			aspectRatio: 1	// 等比缩放
		}, function(){
			// Use the API to get the real image size
			var bounds = this.getBounds();
			boundx = bounds[0];
			boundy = bounds[1];
			// Store the API in the jcrop_api variable
			jcrop_api = this;
	  });
	};
	
	/* 照片上传前预览 */
	var $crop_container = $('#my_avatar');
	var $input_file = $('form#upload_avatar input:file');
	$input_file.bind('change', function(e){
		e = e.originalEvent;
		e.preventDefault();
		window.loadImage(
			(e.dataTransfer || e.target).files[0],
			function (img) {
				$crop_container.children().replaceWith(img);
				$('#avatar_preview').children().replaceWith($.clone(img));
				regCropAvatar();
			},
			{
				maxWidth: $crop_container.width(),
				maxHeight: $crop_container.height()
			}
		);
	});
  
})
