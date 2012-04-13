// 通过iput标签里的"validation"属性，绑定验证条件
// Inside an attribute. The name parameter indicates *which* attribute.
$.metadata.setType("attr", "validation");

$(function(){
	
	var $login_form = $('form#login_form');
	var submit_options = {
		success: function(response, status, xhr, $form) {	// callback
			// 判断登录是否成功
			// TODO
			//alert("params: "+$form.serialize());
			window.location.href = "volunteer_edit.html";
		},
		error: function(response) {	// callback  error: 404,500..
			alert('login error.');
		}
	};
	// 表单验证初始化渲染
	$login_form.validate({
		/*errorClass: "",
		validClass: "",
		errorElement: "em",
		wrapper: "li",
		errorLabelContainer: "#messageBox",
		errorContainer: "#messageBox1, #messageBox2",*/
		submitHandler : function(form) {	// 验证成功后会执行该方法
			// ajax提交表单，发送请求
			$(form).ajaxSubmit(submit_options);
		}
	});
	
})