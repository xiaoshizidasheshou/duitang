//购物车下拉框
$(function(){
	$("#sub").hover(function(){
		$("#car").css("display","block")
		$("#sub").css("height","38px")
		$("#sub").css("border-bottom","none")			
	},function(){
		$("#car").css("display","none")
		$("#sub").css("height","26px")
	})
	var banner_img = $("<img class = 'large_pic'>").appendTo($("#banner_left")).attr("src","images/large_img1.jpg").css({height:"400px",width:"400px"})
	var left_btm = $("<div>").appendTo($("#banner_left")).css({height:'64px',width:'323px',marginTop:"21px",float:'left',position:'relative',overflow:'hidden'})
	var left_img = $("<div>").appendTo($(left_btm)).css({height:'64px',width:'390px',float:'left',position:'absolute',marginLeft:'15px'})
	//下面的小图片
	ajax('get','banner.json','',function(date){
		var arr = JSON.parse(date)._date;
		for(i = 0; i < arr.length; i++){
			var small_img = $('<img>').html(arr[i].img2).children().css({height:'60px',width:'60px',border:"1px solid #eee",marginLeft:'15px'})
			if(i == 0){
				$(small_img).css({marginLeft:'0px'})
			}
			$(small_img).appendTo($(left_img))
			//换图片
		$(small_img).hover(function(){
			$(this).css({border:'2px solid #ff3355'})
			$(banner_img).attr("src","images/large_img" + ($(this).index()+1) + ".jpg")
		},function(){
			$(this).css({border:'2px solid #d5d5d5'})
		})
		$(small_img).click(function(){
			$(this).css({border:'2px solid #ff3355'})
			$(this).siblings().css({border:'2px solid #d5d5d5'})
			$(this).hover(function(){
			$(this).css({border:'2px solid #ff3355'})
			},function(){
				$(this).css({border:'2px solid #ff3355'})
			})
		})
		}
		var small_left = $("<div>").css({height:'63px',width:'33px',border:'1px solid #eee',fontSize:'50px',float:'left',marginTop:'21px'}).insertBefore($(left_btm))
		var small_right = $("<div>").css({height:'63px',width:'33px',border:'1px solid #eee',fontSize:'50px',float:'left',marginTop:'21px'}).insertAfter($(left_btm))
		//图片运动
		//点击左箭头
		$(small_left).click(function(){
			$(left_img).stop().animate({left:0},400)
		})
		//点击右箭头
		$(small_right).click(function(){
			$(left_img).stop().animate({left:-80},400)
		})
		
	})
	var right_p = $("<h3></h3>").html("韩版格子连衣裙女装宽松显瘦灯笼袖拼接圆领a字短裙").appendTo($("#banner_right")).css({height:'71px',fontSize:"19px",color:'#333',lineHeight:'71px'})
	//价格
	var price_p = $("<p></p>").html("抢购价").appendTo($("#banner_right")).css({background:'#eee',paddingLeft:'3px',borderRadius:'2px'})
	var price_span = $("<span></span>").html("￥89").appendTo($(price_p)).css({fontSize:'20px',color:"#ff3355",marginLeft:'32px',marginRight:'11px'})
	var price_span2 = $("<span></span>").html("市场价￥149.00").appendTo($(price_p)).css({fontSize:'12px',color:"#666"})
	//运费
	var send_p = $("<p></p>").html("运费").appendTo($("#banner_right"))
	var send_span = $("<span></span>").html("广东广州至杭州免邮费").appendTo($(send_p)).css({fontSize:'12px',color:"#333",marginLeft:'32px'})
	//color
	var color_p = $("<p></p>").html("颜色").appendTo($("#banner_right"))
	var color_but = $("<button>").html("深蓝色").appendTo($(color_p)).css({fontSize:'12px',color:"#000",background:"#fff",border:'1px solid #d5d5d5',marginLeft:'32px'}).hover(function(){
			$(this).css({border:'1px solid #ff3355'})
		},function(){
			$(this).css({border:'1px solid #d5d5d5'})
		})
		$(size_but).click(function(){
			$(this).css({border:'1px solid #ff3355'})
			$(this).siblings().css({border:'1px solid #d5d5d5'})
			$(this).hover(function(){
			$(this).css({border:'1px solid #ff3355'})
			},function(){
				$(this).css({border:'1px solid #ff3355'})
			})
		})
//尺码
	var size_p = $("<p></p>").html("尺码").appendTo($("#banner_right"))
	for(i = 0;i < 7;i++){
		var size_but = $("<span></span>").html(i - 2 + "XL").appendTo($(size_p)).css({fontSize:'12px',color:"#000",background:"#fff",border:'1px solid #d5d5d5',marginLeft:'32px',padding:'10px',display:'inline-block',lineHeight:'10px'}).hover(function(){
			$(this).css({border:'1px solid #ff3355'})
		},function(){
			$(this).css({border:'1px solid #d5d5d5'})
		})
		$(size_but).click(function(){
			$(this).css({border:'1px solid #ff3355'})
			$(this).siblings().css({border:'1px solid #d5d5d5'})
			$(this).hover(function(){
			$(this).css({border:'1px solid #ff3355'})
		},function(){
			$(this).css({border:'1px solid #ff3355'})
		})
		})
		if(i == 0){
			$(size_but).html("S")
		}
		if(i == 1){
			$(size_but).html("M")
		}
		if(i == 2){
			$(size_but).html("L")
		}
		if(i == 3){
			$(size_but).html("XL")
		}
	}
	//数量
	var num_p = $("<p></p>").appendTo($("#banner_right")).css({marginTop:'12px'})
	var num_div = $("<div>").html('数量').appendTo($(num_p)).css({fontSize:'12px',color:"#666",background:"#fff",height:"26px",width:"39px",lineHeight:'26px',float:'left'})
	var num_but = $("<span>").html('-').appendTo($(num_p)).css({fontSize:'12px',color:"#000",background:"#fff",border:'1px solid #d5d5d5',float:'left',height:"26px",width:'22px',marginLeft:'18px',lineHeight:'26px',textAlign:'center',cursor:'pointer'}).click(function(){
		if(Number($(num_good_div).html())== 1){
			$(num_good_div).html() = $(num_good_div).html()
		}
		$(num_good_div).html(Number($(num_good_div).html()) - 1)
	})
	var num_good_div = $("<div>").html(1).appendTo($(num_p)).css({fontSize:'12px',color:"#000",background:"#fff",border:'1px solid #d5d5d5',height:"26px",width:"39px",textAlign:'center',lineHeight:'26px',float:'left'})
	var num_but2 = $("<span></span>").html('+').appendTo($(num_p)).css({fontSize:'12px',color:"#000",background:"#fff",border:'1px solid #d5d5d5',float:'left',height:"26px",width:'22px',display:"inline-block",lineHeight:'26px',textAlign:'center',cursor:'pointer'}).click(function(){
		$(num_good_div).html(Number($(num_good_div).html()) + 1)
	})
	//购买
	var buy_div = $("<div>").appendTo($("#banner_right")).css({height:"52px",width:'162px',background:'#ff3355',color:"#fff",fontSize:'16px',marginTop:'60px',textAlign:'center',float:'left',marginLeft:'-142px',cursor:'pointer'}).html("立即购买")
	var car_div = $("<div id = 'shop_car'>").appendTo($("#banner_right")).css({height:"50px",width:'160px',background:'fff5f7',color:"#ff3355",fontSize:'16px',marginTop:'60px',textAlign:'center',float:'left',border:'1px solid #ff3355',marginLeft:"16px",cursor:'pointer'}).html("加入购物车")
	var heart = $("<div>").appendTo($("#banner_right")).css({height:"12px",width:'12px',background:'url(images/son_son_banner1.png) 0 -20px',float:"left",marginTop:'80px',marginLeft:'15px'})
	//collect
	var collect = $("<div></div>").appendTo($("#banner_right")).html('收藏商品（1人气）').css({height:"12px",width:'105px',float:"left",marginTop:'80px',marginLeft:'5px',fontSize:'12px',lineHeight:'12px',cursor:'pointer'}).hover(function(){
			$(collect).css({color:'#ff3355'})
	},function(){
			$(collect).css({color:'#888'})
	})
	
	//商品详情
		$("#good_div").find(".g-main").eq(0).siblings('.g-main').css("display","none");		
		$('button').click(function(){
			$("#good_div").find("button").attr("class","");
			$("#good_div").find(".g-main").css("display","none");
			$(this).attr("class","active")
			$("#good_div").find(".g-main").eq($(this).index()).css("display","block")
		})
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
	//购物车cookie

	$("#shop_car").click(function(){
		var src = $(".large_pic").attr('src')
		var same = false;
		var first = $.cookie("shop")==null?true:false;
		if(first){
			$.cookie("shop",'[{"src":" '+ src + ' ","num":1}]')
			first = false
		}else{
			var strs = $.cookie('shop')
			var shop_arr = eval(strs);
			for(var i in shop_arr){
				if(shop_arr[i].src ==  src){
					shop_arr[i].num += 1
					var str = JSON.stringify(shop_arr)
					$.cookie('shop',str)
					same = true
				}
			}
			if(!same){
				var obj = {src:src,num:1}
				shop_arr.push(obj);
				var str = JSON.stringify(shop_arr);
				$.cookie("shop",str)
			}
		}
	//读cookie
		read_cookie()
		sc_car()

		
	})	
	sc_car()
	function sc_car(){
				var sc_str = $.cookie('shop');
				if(sc_str){ //如果购物车不为空
					var sc_obj = eval(sc_str); //和JS中的JSON.parse()
					var sc_num = 0; //记录所有商品的数量
					for(var i in sc_obj){
						sc_num += Number(sc_obj[i].num);
					}
					$('#submit').find("span").html(sc_num);
				}
			}	
	read_cookie()
	function read_cookie(){
			var str = $.cookie("shop")
			if(str){
				var arr = eval(str);
				// var pic = $('<img/>').appendTo("#car").attr("src",arr[0].src).css({height:'40px',width:'40px'})
				// $('#submit').find("span").html(arr[0].num)
				//var title = $('<div>').appendTo("#car").html(arr)
				var html = "";
					for(var i in arr){
						html = '<li><div class="sc_goodsPic"><img src="'+arr[i].src+'" alt=""></div><div class="sc_goodsTitle"><p>灯笼袖拼接圆领a字短裙</p></div><div class="sc_goodsNum">商品数量:'+arr[i].num +'</div></li>';
					}
					$('#car').html(html);
					$(".sc_goodsPic").find("img").css({height:'50px',width:'50px',fontSize:'12px',float:'left',marginTop:'2px'})
					$(".sc_goodsNum").css({fontSize:'12px',float:'left',marginTop:'40px'})

			}
		}
	
})