$(function(){
	//添加banner图
	var banner_span = $('<span></span>')
		$(banner_span).appendTo($('#banner_left')).css({height:'64px',width:'632px',background:'#000',position:'absolute',left:'40px',top:'340px',opacity:"0.5",zIndex:'2'})
	ajax('get','banner.json','',function(date){
		var arr = JSON.parse(date)._date;
		for(i = 0; i < arr.length; i++){
			var banner_img = $('<a href = "#"></a>')
			var banner_word = $('<p></p>')
			$(banner_word).html(arr[i].title)
			$(banner_img).html(arr[i].img)
			$(banner_img).appendTo($("#remove"))
			//var banner_span = $('<span></span>')
		// $(banner_span).appendTo($(banner_img)).css({height:'64px',width:'632px',background:'#000',position:'absolute',left:'40px',top:'340px',opacity:"0.5",zIndex:'2'})
			$(banner_word).appendTo($('#banner_left')).css({paddingLeft:'20px',height:'64px',width:'623px',fontSize:'26px',lineHeight:'64px',position:'absolute',top:'345px',left:'40px',zIndex:'3',color:'#fff',display:'none'})
			$('#banner_left').find("p").eq(0).css({display:'block'})

		}
	})
	//banner图自动轮播
	var i_now = 0
	function remove(){
		target = setInterval(function(){
			i_now++
			if(i_now == 5){
				i_now = 0
			}
			$("#remove").animate({left:-710 * i_now},400)
		},1500)
		setInterval(function(){
			$('#banner_left').find("p").eq(i_now).css({display:'block'})
			$('#banner_left').find("p").eq(i_now).siblings('p').css({display:'none'})
		},1500)
	}

	//mouseover时停止轮播
		$('#remove').hover(function(){
			clearInterval(target)
		},function(){
			remove();
		})
		$("#left").hover(function(){
			clearInterval(target)
		},function(){
			remove();
		})
		$("#right").hover(function(){
			clearInterval(target)
		},function(){
			remove();
		})
		//点击左箭头
		$("#left").click(function(){
			i_now--
			if(i_now == -1){
				i_now = 4
			}
		$("#remove").stop().animate({left:-710 * i_now },400)
		clearInterval(target);
		})
		//点击右箭头
		$("#right").click(function(){
			i_now++
			if(i_now == 5){
				i_now = 0
			}
		$("#remove").stop().animate({left:-710 * i_now },400)
		clearInterval(target);
		})

		remove();
	
	//专辑精选
	ajax("get",'bestgoods.json',"",function(date){
		var arr = JSON.parse(date)._date
		for(i = 0;i< arr.length;i++){
			var goods_img = $('<a href = "http://10.30.162.27/code3/duitang/son.html"></a>')
			//淡入淡出
			$(goods_img).html(arr[i].img).hover(function(){
				$(this).fadeTo(100,0.7)
			},function(){
				$(this).fadeTo(100,1)
			})
			$(goods_img).appendTo($("#bestgoods").children())
			$(goods_img).wrap("<div>")
			$(goods_img).parent().css({float:'left',height:'322px',width:'222px',border:'1px solid #dedfe0',marginLeft:'19px'})
			if(i == 0){
				$(goods_img).parent().css({marginLeft:'0'})
			}
			var goods_h3 = $("<h3><a href = '#'></h3>");
			//设置连接，添加下划线效果
			$(goods_h3).find("a").html(arr[i].title).css('color','#444').hover(function(){
				$(this).css({textDecoration:'underline'})
			},function(){
				$(this).css({textDecoration:'none'})
			})
			$(goods_h3).insertAfter($(goods_img)).css({fontSize:"13px",fontWeight:"bold",marginLeft:'12px',width:'195px',height:'26px'})
			var goods_h4 = $("<h4></h4>");
			$(goods_h4).html(arr[i].page)
			$(goods_h4).insertAfter($(goods_h3)).css({fontSize:"12px",marginLeft:'12px',color:'#888',marginTop:'20px'})
			var goods_h5 = $("<h5></h5>");
			$(goods_h5).html(arr[i].person)
			$(goods_h5).insertAfter($(goods_h4)).css({fontSize:"12px",marginLeft:'12px',color:'#888',marginTop:'7px'})
		}
	})
	//单品推荐
	ajax("get",'singlegoods.json',"",function(date){
		var arr = JSON.parse(date)._date
		for(i = 0;i< arr.length;i++){
			var single_img = $('<a href = "#"></a>')
			//淡入淡出
			$(single_img).html(arr[i].img).hover(function(){
				$(this).fadeTo(100,0.7)
			},function(){
				$(this).fadeTo(100,1)
			})
			$(single_img).appendTo($("#singlegoods").children());
			$(single_img).wrap("<div class = 'single_class'></div>")
			$(single_img).parent().css({float:'left',height:'295px',width:'222px',border:'1px solid #dedfe0',marginLeft:'19px'})
			if(i == 0){
				$(single_img).parent().css({marginLeft:'0'})
			}
			var single_h3 = $("<h3><a href = '#'></a></h3>");
			$(single_h3).find("a").html(arr[i].title).hover(function(){
				$(this).css({textDecoration:'underline'})
			},function(){
				$(this).css({textDecoration:'none'})
			})
			$(single_h3).insertAfter($(single_img)).css({fontSize:"13px",fontWeight:"bold",marginLeft:'12px',width:'195px',height:'13px',marginTop:'10px'})
			$(single_h3).children().css({color:'#444'})
			var single_h4 = $("<h4></h4>");
			$(single_h4).html(arr[i].num)
			$(single_h4).insertAfter($(single_h3)).css({fontSize:"12px",marginLeft:'12px',color:'#888',marginTop:'20px',height:'12px',float:'left'})
			var single_but = $("<span class ='single_but'><a href = '#'>良品购</a></span>")
			$(single_but).insertAfter($(single_h4)).children().css({color:'#fff'})
		}
		$("#single_nav").children().css({color:'#444',padding:'0 12px',borderRight:'1px solid #ddd',cursor:'pointer'})
		$("#single_nav").find("span").eq(6).css({borderRight:'none'})
	})
	//达人推荐
	ajax("get",'person.json','',function(date){
		var arr = JSON.parse(date)._date;
		for(i = 0; i < arr.length; i++){
			//上面的背景图
			var person_img = $("<img>").attr("src",arr[i].img).css({height:'112px',width:'222px'}).appendTo($('#person').children())
			$(person_img).wrap($('<div>')).parent().css({height:'251px',width:'222px',border:'1px solid #dedfe0',float:'left',marginLeft:'20px',position:'relative'})
			if(i == 0){
				$(person_img).parent().css({marginLeft:'0px'})
			}
			//下面的圆形图
			var person_img2 = $("<img>").attr("src",arr[i].img2).insertAfter($(person_img)).wrap('<div><div>').parent().css({height:'80px',width:'80px',borderRadius:'50%',background:'red',overflow:'hidden',position:'absolute',top:'70px',left:'68px',border:'3px solid #fff',cursor:'pointer'})
			//v图标
			var V = $("<img>").attr("src",arr[i].v).insertAfter($(person_img2)).css({position:'absolute',top:'128px',left:'128px'})
			//by
			var person_h3 = $('<h3></h3>').insertAfter(V).html(arr[i].title).css({fontSize:"13px",fontWeight:"bold",width:'222px',height:'13px',marginTop:'54px',textAlign:'center',cursor:'pointer'}).hover(function(){
				$(this).css({textDecoration:'underline'})
			},function(){
				$(this).css({textDecoration:'none'})
			})
			var person_h4 = $('<h4 class = "person_h4"></h4>').insertAfter(person_h3).html(arr[i].num).css({fontSize:"12px",width:'67px',color:'#888',height:'12px',textAlign:'center',marginTop:'12px',marginLeft:'78px'})
			var person_h5 = $('<h5></h5>').insertAfter(person_h4).html("擅长领域:").css({fontSize:"12px",width:'222px',color:'#888',height:'12px',textAlign:'center',marginTop:'12px',float:'left'})
			var person_span = $("<span></span>").appendTo(person_h5).html(arr[i].good).css({fontSize:"12px",height:'12px',color:'#444',marginLeft:'7px'})

		}
	})
	//瀑布流
		oUl = document.getElementById('ul_id');
		aLi = oUl.getElementsByTagName('li')
		iLen = aLi.length;
	ajax("get","stroll.json",'',function(date){
		var arr = JSON.parse(date)._date
			for(var i = 0; i < arr.length; i++){
				var _index = getShort();
				var _h = (220 / arr[i].width * arr[i].height) + "px"
				var oDiv = $("<div id = 'div_id'></div>").css({position:"relative"}).hover(function(){
					$(this).find("button").css({display:'block'})
				},function(){
					$(this).find("button").css({display:'none'})
				})
				var oImg = $("<img>").attr("src",arr[i].img).css({width:'220px',height:_h})
				$(oImg).appendTo($(oDiv)).css({marginBottom:'15px'})
				$(oDiv).appendTo($("#ul_id").find("li").eq(_index))
				//hover时显示
				
				var but1 =$("<button>收集</button>").css({height:'32px',position:'absolute',left:'7px',top:'7px',display:'none',borderRadius:'3px',background:'#ff4466',textDecoration:'30px',lineHeight:'32px',color:'#fff'}).appendTo(oDiv)
				var hover_span1 = $("<span id = 'hover_span1'>").prependTo($(but1))
				var hover_span1_2 = $("<span >").css({margin:'0 7px',color:'#fff'}).appendTo($(but1)).html(arr[i].num1)
				var hover_span2 = $("<span id = 'hover_span2'>").wrap("<button>").parent().css({height:'32px',width:'35px',position:'absolute',left:'180px',top:'7px',display:'none',borderRadius:'3px',background:'#fff'}).appendTo(oDiv)
				var hover_span3 = $("<span id = 'hover_span3'>").wrap("<button>").parent().css({height:'32px',width:'35px',position:'absolute',left:'137px',top:'7px',display:'none',borderRadius:'3px',background:'#fff'}).appendTo(oDiv)
					$("#ul_id").find("li").eq(4).css({marginRight:'0px'})
				var falls_h3 = $("<h3>").html(arr[i].title).appendTo($(oDiv)).css({fontSize:'12px',width:"198px",marginLeft:'12px',lineHeight:'18px',color:'#444'})
				//4个span是点赞和收藏
				var falls_span1 = $("<span id = 'span1'>").insertAfter($(falls_h3)).css({display:'inline-block',width:'14px',height:"11px",marginLeft:'12px'})
				var falls_span2 = $("<span>").html(arr[i].num1).insertAfter($(falls_span1)).css({fontSize:"12px",display:'inline-block',width:'40px',height:"12px",lineHeight:"12px",color:'#bbb'})
				var falls_span3 = $("<span id = 'span3'>").insertAfter($(falls_span2)).css({display:'inline-block',width:'14px',height:"10px",marginLeft:'12px'})
				var falls_span4 = $("<span>").html(arr[i].num2).insertAfter($(falls_span3)).css({fontSize:"12px",display:'inline-block',width:'40px',height:"12px",lineHeight:"12px",color:'#bbb'})
				//包含发布者和收藏地点
				var falls_div = $("<div>").insertAfter($(falls_span4)).css({height:'59px',borderTop:'1px solid #d5d6d6',marginTop:'14px'})
				var img_person = $("<img>").attr("src",arr[i].img2).appendTo($(falls_div)).css({height:'25px',width:'25px',borderRadius:"50%",marginTop:'9px',marginLeft:'10px',float:'left'})
				var img_span = $("<a href = '#'></a>").html(arr[i].name).insertAfter($(img_person)).css({display:'block',float:'left',fontSize:'12px',marginLeft:'8px',color:'#666',height:'12px',marginTop:'12px'}).hover(function(){
					$(this).css({textDecoration:"underline"})
				},function(){
					$(this).css({textDecoration:"none"})
				})
				var local_h4 = $("<h4></h4>").html("收集到:").appendTo($(falls_div)).css({fontSize:'12px',color:'#bbb',height:'12px',marginTop:"34px",marginLeft:'43px'})
				var person_a = $("<a href = '#'></a>").appendTo(local_h4).html(arr[i].local).css({fontSize:"12px",height:'12px',color:'#666',marginLeft:'7px',marginTop:'6px'}).hover(function(){
					$(this).css({textDecoration:"underline"})
				},function(){
					$(this).css({textDecoration:"none"})
				})
			}

		
	})
	var more_div = $("<a href = 'http://10.30.162.27/code3/duitang/son.html'></a>").insertAfter($('#stroll').find("ul")).css({display:'block',width:'120px',height:'40px',background:"#22b4f6",marginLeft:'539px',textAlign:'center',color:"#fff",lineHeight:'40px',borderRadius:'2px',cursor:'pointer'}).html("浏览更多>")
	//获取最短下标
	function getShort(){
				var index = 0;
				var gs = aLi[index].offsetHeight;
				for(i = 1; i < iLen; i++){
					if(gs > aLi[i].offsetHeight){
						index = i;
						gs = aLi[i].offsetHeight;
					}
				}
				return index
			}
			//footer
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
			//右侧
			$("#right0").css({position:'fixed',left:'1555px',top:$(window).height() - 194 + "px",height:'155',width:'52px',display:'none'}).find('div').css({height:'47px',width:'48px',border:'1px solid #ebebeb',cursor:'pointer'})
			//固定右侧栏
			window.onresize= function(){
				var s = (document.body.clientWidth - 1202)/2;
				var h = $(window).height()
				if(s > 48){
				$("#right0").css({position:'fixed',left:s + 1202 +"px",top:h - 194 + "px"})
				}if(s < 48){
					$("#right0").css({position:'fixed',left:(document.body.clientWidth -48) + "px",top:h - 194 + "px"})
				}	
			}
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			window.onscroll= function(){
				$("#right0").css({display:'block'})
			}
			// if(scrollTop == 0){
			// 		$("#right0").css({display:'none'})
			// 	}
				//右侧栏效果
				$("#right1").css({background:'url(images/common_bg.png) -1100px -240px'}).hover(function(){
					$("#right1").css({background:'url(images/common_bg.png) -1100px -392px'})
				},function(){
					$("#right1").css({background:'url(images/common_bg.png) -1100px -240px'})
				}).wrap('<a href = "#banner"></a>')
				$("#right2").css({background:'url(images/common_bg.png) -1100px -288px'}).hover(function(){
					$("#right2").css({background:'url(images/common_bg.png) -1100px -438px'})
				},function(){
					$("#right2").css({background:'url(images/common_bg.png) -1100px -288px'})
				})
				$("#right3").css({background:'url(images/common_bg.png) -1100px -336px'}).hover(function(){
					$("#right3").css({background:'url(images/common_bg.png) -1100px -485px'})
				},function(){
					$("#right3").css({background:'url(images/common_bg.png) -1100px -336px'})
				})
				
	
})