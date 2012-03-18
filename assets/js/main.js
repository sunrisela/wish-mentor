$(function(){
	$.post('menu_0.html',function(data){
		$('#sidebar').append(data);
	});
	$("table").tablesorter({ 
		sortList: [[1,0]],
		headers: {
			5: {sorter: false}
		}
	});
})
