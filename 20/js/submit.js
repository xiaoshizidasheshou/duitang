$(function(){
	//验证用户名
	$("#username").on("blur",function(){
		$("#name_span").css({color:'red'})
		if($("#username").val().length < 6 || $("#username").val().length > 18){
			$("#name_span").html("用户名的长度是8到16位") 
		}else if(/\d/.test($("#username").val()[0])){
			$("#name_span").html("用户名首字母不能为数字")
		}else if(/\W/.test($("#username").val())){
			$("#name_span").html("用户名只能为数字，字母和下划线")
		}else{
			$("#name_span").css({color:'green'})
			$("#name_span").html("√")
		}
	
	})
	//验证手机号
	$("#phone2").on("blur",function(){
		if(/^1/.test($("#phone2").val()) && /^[\d]{11,11}$/.test($("#phone2").val())){
			$("#phone_span").css({color:'green'})
			$("#phone_span").html("√")
		}else{
			$("#phone_span").css({color:'red'})
			$("#phone_span").html("请输入正确的手机号")
		}
	})
	//获取验证码
	$("#test_but").on("click",function(){
		$("#test_but").html(testCode(4))
	})
	//验证验证码
	$("#test").on('blur',function(){
		if($("#test").val() == $("#test_code").html()){
			$("#code_span").css({color:'green'})
			$("#code_span").html("验证码正确")
		}else{
			$("#code_span").css({color:'red'})
			$("#code_span").html("验证码不正确")
		}
	})
	//设置密码
	$("#password").on("blur",function(){
		$("#password_span").css({color:'red'})
				
				if($("#password").val().length < 6 ||$("#password").val().length > 18){
					$("#password_span").html("密码的长度是8到16位")
				}else{
					$("#password_span").css({color:'green'})
					if(/\d+/.test($("#password").val()) && /[a-z]+/.test($("#password").val()) && /[A-Z]+/.test($("#password").val())){
						$("#password_span").html("[强]")
					}else if(/^\d+$/.test($("#password").val()) || /^[a-z]+$/.test($("#password").val()) ||/^[A-Z]+$/.test($("#password").val())){
						$("#password_span").html("[弱]") 
					}else{
						$("#password_span").html("[一般]") 
					}
				}
	})
	//密码确认
	$("#sure").on("blur",function(){
		if($("#password").val() == $("#sure").val()){
			$("#sure_span").css({color:'green'})
			$("#sure_span").html("√")
		}else{
			$("#sure_span").css({color:'red'})
			$("#sure_span").html("密码错误，请重新输入密码")
		}
	})
	function testCode(n){
			var arr = [];
			for(var i = 0; i < n; i++){
				var num = parseInt(Math.random() * 100);
				if(num >= 0 && num <= 9){
					arr.push(num);
				}else if(num >= 10 && num <= 25){
					arr.push(String.fromCharCode(num + 87));
				}else if(num >= 65 && num <= 90){
					arr.push(String.fromCharCode(num));
				}else{
					i--;
				}
			}
			return arr.join("");
		}
		ajax("get","footer.json","",function(date){
				var arr = JSON.parse(date)._date;
				for(i = 0; i < arr.length; i++){
					var footer_1_div = $("<div class ='foot11'></div>").appendTo($("#footer_1")).html(arr[i].title).css({float:"left",width:'100px',fontSize:"12px",color:"#666",lineHeight:'30px'}).find("a").css({color:'#666'})
					var footer_2_div = $("<div class ='foot22'></div>").appendTo($("#footer_2")).html(arr[i].phone).css({float:"left",width:'100px',fontSize:"12px",color:"#666",lineHeight:'30px'}).find("a").css({color:'#666'})
					var footer_3_div = $("<div class ='foot33'></div>").appendTo($("#footer_3")).html(arr[i].code).css({width:'200px',fontSize:"12px",color:"#666",lineHeight:'30px',textAlign:'center'}).find("a").css({color:'#666'})
					var footer_4_div = $("<div class ='foot44'></div>").appendTo($("#footer_4")).html(arr[i].method).css({float:"left",width:'100px',fontSize:"12px",color:"#666",lineHeight:'30px'}).find("a").css({color:'#666'})
					var footer_5_div = $("<div class ='foot55'></div>").appendTo($("#footer_5")).html(arr[i].link).css({float:"left",width:'100px',fontSize:"12px",lineHeight:'30px'}).find("a").css({color:'#666'})
				}
				$('.foot11').wrapAll("<div></div>").parent().css({height:'160px',width:'280px',marginLeft:'33px'})
				$('.foot22').wrapAll("<div></div>").parent().css({height:'160px',width:'280px',marginLeft:'33px'})
				$('.foot33').wrapAll("<div></div>").parent().css({height:'160px',width:'280px',marginLeft:'33px'})
				$('.foot44').wrapAll("<div></div>").parent().css({height:'160px',width:'280px',marginLeft:'33px'})
				$('.foot55').wrapAll("<div></div>").parent().css({height:'160px',width:'280px',marginLeft:'33px'})
			})
		var last_img1 = $('<span></span>').appendTo($('#last_div')).css({display:'inline-block',width:'128px',height:'36px',background:"url(images/common_bg.png) no-repeat -923px -490px",marginLeft:'15px'})
			var last_img2 = $('<span></span>').appendTo($('#last_div')).css({display:'inline-block',width:'102px',height:'36px',background:"url(images/common_bg.png) no-repeat -799px -540px",marginLeft:'15px'})
			var last_img2 = $('<span></span>').appendTo($('#last_div')).css({display:'inline-block',width:'113px',height:'36px',background:"url(images/last_img3.png)",marginLeft:'15px'})
			$("#last_div").find("span").eq(0).css({height:'30px',display:'inline-block',lineHeight:'30px',float:'left'})



			$("#submit2").on("click",function(){
				if($("#name_span").html("√")){
				if($("#phone_span").html("√")){
					if($("#code_span").html("验证码正确")){
						//if($("#password_span")).css({color:'green'}){
							if($("#sure_span").html("√")){
								alert("注册成功")
							}
						}
					//}
				}
			}
				
			})
})