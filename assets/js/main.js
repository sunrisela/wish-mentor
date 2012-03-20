
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
})
