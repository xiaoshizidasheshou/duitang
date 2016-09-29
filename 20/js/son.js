$(function(){
	var banner = $("<div></div>").appendTo($("#banner").children()).css({height:'280px',width:'1200px',marginTop:"40px",background:'url(images/son_banner.jpeg)'})
	var banner_p = $("<p></p>").html('甜美温柔的针织裙，穿出慵懒小性感').appendTo($(banner)).css({fontSize:'26px',color:"#fff",textAlign:'center',paddingTop:'72px'})
	var banner_p1 = $("<p></p>").html('74张图片·1215人收藏').appendTo($(banner)).css({fontSize:'12px',color:"#fff",textAlign:'center',marginTop:'18px'})
	var banner_p3 = $("<p></p>").css({background:'#818181',width:'1200px',height:'72px',position:'absolute',top:'208px',opacity:"0.6"}).appendTo($(banner))
	var opacity_logo = $("<img>").attr("src","images/son_mouse.jpeg").css({width:'38px',height:'38px',borderRadius:'50%',position:'absolute',left:'12px',top:'226px'}).appendTo($(banner))
	var opacity_span = $("<span></span>").html("李大象在那里").appendTo($(banner)).css({height:'33px',lineHeight:'33px',fontSize:'14px',position:'absolute',top:'226px',left:"68px",color:'#fff'})
	var opacity_span1 = $("<span>收藏</span>").appendTo($(banner)).css({display:"inline-block",height:'33px',width:'81px',color:'#fff',lineHeight:'72px',fontSize:'14px',background:"#ff4466 ",position:'absolute',left:'481px',top:'226px',borderRadius:'3px',lineHeight:"30px"}).hover(function(){
		$(opacity_span1).css({background:'#e03c5a'})
	},function(){
		$(opacity_span1).css({background:'#ff4466'})
	})
	var save_span = $("<span></span>").appendTo($(opacity_span1)).css({display:"inline-block",height:"16px",width:"16px",background:'url(images/falls_bg.png) -4px -4px',float:"left",margin:'8px 7px 8px 16px'})
	var opacity_span2 = $("<span>赞</span>").appendTo($(banner)).css({display:"inline-block",height:'33px',width:'70px',color:'#fff',lineHeight:'72px',fontSize:'14px',background:"#ffbb33",position:'absolute',left:'585px',top:'226px',borderRadius:'3px',lineHeight:"30px"}).hover(function(){
		$(opacity_span2).css({background:'#eab346'})
	},function(){
		$(opacity_span2).css({background:'#ffbb33'})
	})
	var save_span = $("<span></span>").appendTo($(opacity_span2)).css({display:"inline-block",height:"16px",width:"16px",background:'url(images/son_bg.png) -7px -29px',float:"left",margin:'8px 7px 8px 16px'})
	var opacity_span3 = $("<span></span>").appendTo($(banner)).css({display:"inline-block",height:'33px',width:'40px',color:'#fff',lineHeight:'72px',fontSize:'14px',background:"#fff ",position:'absolute',left:'679px',top:'226px',borderRadius:'3px',lineHeight:"30px",overflow:"hidden"}).hover(function(){
		$(this).stop().animate({width:'224'})
	},function(){
		$(this).stop().animate({width:'40'})
	})
	//分享到
	
		var share_a1 = $("<a href = ''></a>").appendTo($(opacity_span3)).css({display:'inline-block',height:"18px",width:'18px',marginLeft:'11px',marginTop:'10px',float:'left',background:"url(images/son_banner2.png) -122px -4px"})
		var share_a2 = $("<a href = ''></a>").appendTo($(opacity_span3)).css({display:'inline-block',height:"18px",marginLeft:'11px',marginTop:'10px',float:'left',width:'36px',textAlign:'center',fontSize:'12px',lineHeight:'14px',color:'#666'}).html("分享：")
		ajax("get","share.json","",function(date){
			var arr = JSON.parse(date)._date
			for(i = 0;i < arr.length;i++){
			var share_a = $("<a class = 'share' href = ''></a>").appendTo($(opacity_span3)).css({display:'inline-block',height:"18px",width:'18px',marginLeft:'11px',marginTop:'10px',float:'left',background:arr[i].background})
			var share_span = $("<em></em>").appendTo($(banner)).css({position:'absolute',left:arr[i].left,top:"270px",height:'20px',background:"#fff",fontSize:'12px',lineHeight:'20px',textAlign:'center',border:'1px solid gray',padding:'3px',display:"inline-block",borderRadius:'4px',display:'none',fontStyle:'normal'}).html(arr[i].word)
			$(opacity_span3).find(".share").each(function(index,ele){
				$(this).hover(function(){
					$(banner).find("em").eq($(this).index() - 2).css({display:'block'})

				},function(){
					$(banner).find("em").eq($(this).index() - 2).css({display:'none'})

				})
			})

			}
		})
		//切换视觉效果
		var change_span1 = $("<span></span>").appendTo($("#change")).css({height:"16px",width:"22px",background:'url(images/son_banner2.png) -400px -43px',display:'inline-block',marginRight:'21px',marginTop:'23px'})
		var change_span2 = $("<span></span>").appendTo($("#change")).css({height:"16px",width:"22px",background:'url(images/son_banner2.png) -440px -3px',display:'inline-block',marginTop:'23px'})

	//瀑布流
	oUl = document.getElementById('ul_id');
		aLi = oUl.getElementsByTagName('li')
		iLen = aLi.length;
	ajax("get","son.json",'',function(date){
		var arr = JSON.parse(date)._date
			for(var i = 0; i < arr.length; i++){
				var _index = getShort();
				var _h = (220 / arr[i].width * arr[i].height) + "px"
				var oDiv = $("<div><a href = 'http://10.30.162.27/code3/duitang/son_son.html'></a></div>").css({position:"relative"}).hover(function(){
					$(this).find("button").css({display:'block'})
				},function(){
					$(this).find("button").css({display:'none'})
				})
				var oImg = $("<img/>").attr("src",arr[i].img).css({width:'220px',height:_h})
				$(oImg).appendTo($(oDiv).children()).css({marginBottom:'15px'})
				$(oDiv).appendTo($("#ul_id").find("li").eq(_index))
				$("#img").find("li").find('div').find('a').css({display:'block',border:'1px solid #d5d6d1',marginTop:'20px',background:'#fff'})
				// #img li #div_id {border:1px solid #d5d6d1;margin-top:20px;background:#fff}
				//hover时显示
				
				var but1 =$("<button>收集</button>").css({height:'32px',position:'absolute',left:'7px',top:'7px',display:'none',borderRadius:'3px',background:'#ff4466',lineHeight:'32px',color:'#fff'}).appendTo(oDiv.children())
				var hover_span1 = $("<span id = 'hover_span1'>").prependTo($(but1))
				var hover_span1_2 = $("<span >").css({margin:'0 7px',color:'#fff'}).appendTo($(but1)).html(arr[i].num1)
				var hover_span2 = $("<span id = 'hover_span2'>").wrap("<button>").parent().css({height:'32px',width:'35px',position:'absolute',left:'180px',top:'7px',display:'none',borderRadius:'3px',background:'#fff'}).appendTo($(oDiv).children())
				var hover_span3 = $("<span id = 'hover_span3'>").wrap("<button>").parent().css({height:'32px',width:'35px',position:'absolute',left:'137px',top:'7px',display:'none',borderRadius:'3px',background:'#fff'}).appendTo($(oDiv).children())
					$("#ul_id").find("li").eq(4).css({marginRight:'0px'})
				var falls_h3 = $("<h3>").html(arr[i].title).appendTo($(oDiv).children()).css({fontSize:'12px',width:"198px",marginLeft:'12px',lineHeight:'18px',color:'#444'})
				//4个span是点赞和收藏
				var img_div = $("<div></div>").appendTo($(oDiv).children()).css({marginBottom:'10px',width:'198px',marginLeft:'13px'})
				var falls_span1 = $("<span id = 'span1'>").appendTo($(img_div)).css({display:'inline-block',width:'14px',height:"11px",background:'url(images/falls_bg.png) -7px -54px'})
				var falls_span2 = $("<span>").html(arr[i].num1).appendTo($(img_div)).css({fontSize:"12px",display:'inline-block',width:'25px',height:"12px",lineHeight:"12px",color:'#bbb'})
				var falls_span3 = $("<span id = 'span3'>").appendTo($(img_div)).css({display:'inline-block',width:'14px',height:"10px",background:'url(images/falls_bg.png) -92px -54px'})
				var falls_span4 = $("<span>").html(arr[i].num2).appendTo($(img_div)).css({fontSize:"12px",display:'inline-block',width:'25px',height:"12px",lineHeight:"12px",color:'#bbb'})
				var falls_span5 = $("<span>").html(arr[i].price).appendTo($(img_div)).css({fontSize:"12px",display:'inline-block',width:'40px',height:"12px",lineHeight:"12px",color:'#f14382',float:'right',marginTop:"14px",fontWeight:'bold'})

				
			 }
			 

		
	})
	
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

	//右侧栏

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