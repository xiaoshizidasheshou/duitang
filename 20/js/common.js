$(function(){
	//nav下拉效果
	$("#header_list").hover(function(){
		$("#header_nav").css("display","block")
		$("#header_but").css("height","41px")
		$("#header_but").css("border-bottom","none")
		$('.img2').css('transform','rotate(-180deg)')//控制旋转角度
		$('.img2').css('transition','0.2s')//控制旋转速度					
	},function(){
		$("#header_nav").css("display","none")
		$("#header_but").css("height","26px")
		$("#header_but").css("border-bottom","1px solid #e1e1e1")
		$('.img2').css('transform','rotate(0deg)')//控制旋转角度
		$('.img2').css('transition','0.2s')//控制旋转速度
		
	})
	//手机版下拉图标
	$('#phone').hover(function(){
		$('.img2').css('transform','rotate(-180deg)')//控制旋转角度
		$('.img2').css('transition','0.2s')//控制旋转速度
	},function(){
		$('.img2').css('transform','rotate(0deg)')//控制旋转角度
		$('.img2').css('transition','0.2s')//控制旋转速度
	})
	//手机版二维码显示
	var barcode_a = $('<a id = "barcode_a" href = "#"><img src = "images/barcode.png"></a>');
	$(barcode_a).appendTo($('#barcode')).css({display:"inline-block",marginLeft:"33px",marginTop:"15px"});
	var barcode_h3 = $('<h3 id = "barcode_p">扫一扫下载手机客户端</h3>');
	$(barcode_h3).appendTo($('#barcode')).css({marginLeft:"38px",fontSize:"12px",marginTop:"10px"})
	$('#phone').hover(function(){
		$("#barcode").css("display","block")
	},function(){
		$("#barcode").css("display","none")
	})
	//添加nav内容
	ajax('get','nav.json',"", function(date){
		var arr = JSON.parse(date)._date;
		for(i = 0; i < arr.length; i++){
			var nav_a = $("<span><a href = '#'></a></span>");
			$(nav_a).children().html(arr[i].title).css({height:'12px',color:'#444',display:'block',borderRight:'1px solid #666',fontSize:'12px',padding:'0px 20px',lineHeight:'12px',marginBottom:'25px',float:'left'});
			$(nav_a).appendTo("#nav_right").css({borderBottom:'1px dotted #666'});
		}

	})
})