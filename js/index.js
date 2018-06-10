var cd=0;
function js(obj){
	var aa=$('.divArr').width();
   	cd-=aa;
   	document.getElementsByClassName('img-wrap')[0].style.marginLeft=cd+"px";
   	if(cd<=-aa*obj){
   		cd=aa
   	}
}
function b1(){
	var screens= document.body.offsetWidth;
	if(screens<769-17){
		var zk=$('#sec').width();
		$('.divArr').width(parseInt(zk/2));
		$('.img-wrap').width(parseInt(zk/2*8))
		$('#sec').css('overflow','hidden')
		$('.img').css('padding','0 10px')
		jsq=setInterval('js("6")',3000)
		$('.img-wrap').mouseover(function(){
			clearInterval(jsq)
		})
		$('.img-wrap').mouseout(function(){
			jsq=setInterval('js("6")',3000)
		})
	}else if(screens<992-17){
		var zk=$('#sec').width();
		$('.divArr').width(parseInt(zk/2));
		$('.img-wrap').width(parseInt(zk/2*8))
		$('#sec').css('overflow','hidden')
		$('.img').css('padding','0 15px')
		jsq=setInterval('js("6")',3000)
		$('.img-wrap').mouseover(function(){
			clearInterval(jsq)
		})
		$('.img-wrap').mouseout(function(){
			jsq=setInterval('js("6")',3000)
		})
	}else if(screens<1250-17){
		var zk=$('#sec').width();
		$('.divArr').width(parseInt(zk/3));
		$('.img-wrap').width(parseInt(zk/3*8))
		$('#sec').css('overflow','hidden')
		$('.img').css('padding','0 15px')
		jsq=setInterval('js("5")',3000)
		$('.img-wrap').mouseover(function(){
			clearInterval(jsq)
		})
		$('.img-wrap').mouseout(function(){
			jsq=setInterval('js("5")',3000)
		})
	}else if(screens>1250-17){
		var zk=$('#sec').width();
		$('.divArr').width(parseInt(zk/3));
		$('.divArr').css('background','url(images/xian.gif) no-repeat right top')
		$('.divArr').css('background-size','contain')
		$('.img-wrap').width(parseInt(zk/3*8))
		$('#sec').css('overflow','hidden')
		$('.img').css('padding','0 58px')
		jsq=setInterval('js("5")',3000000)
		$('.img-wrap').mouseover(function(){
			clearInterval(jsq)
		})
		$('.img-wrap').mouseout(function(){
			jsq=setInterval('js("5")',300000)
		})
	}
}
$(document).ready(function(){
	var jsq;
	b1();
	$(window).resize(function(){
		location.href="武.html";//屏幕刷新
	 	b1();
	})
})