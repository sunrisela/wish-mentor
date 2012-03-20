/**
 * 
 * @param {} type @default: warning, @values: info,warning,error,success
 * @param {} titleorContent
 * @param {} content
 */
function showMsg(){
	var type    = "",
			content = "",
			title   = ""
	switch(arguments.length) {
		case 1:
			content = arguments[0];
		break;
		case 2:
			type    = "alert-" + arguments[0];
			content = arguments[1];
		break;
		case 3:
			type    = "alert-" + arguments[0];
			title   = arguments[1]+":";
			content = arguments[2];
		break;
		default:
			return false;
	}
	var html = "<div class='alert " + type + " fade in'>" + 
								"<a class='close' data-dismiss='alert'>&times;</a>" + 
								"<strong>" + title + " </strong>" + content + 
							"</div>";
	var $show_div = $('#message') ;
	if(!$show_div.length){
		$show_div = $("<div id='message'>");
		var $container = $('.container-fluid>.row-fluid>.span10');
		if(!$container.length){
			$container = ('body');
		}
		$container.prepend($show_div);
	}
	
	$show_div.prepend(html);
}
