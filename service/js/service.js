function fun(obj){
	$('.main .one,.main .two,.main .three').css('display','none')
	$(obj).css('display','block')
	$('.page').css('display','none')	
}
$('#img_wrap').click(function(){
	if($('img').hasClass('rotate2')){
		$('#img').removeClass('rotate2')
		$('#img').addClass('rotate3')
	}else{
		$('#img').removeClass('rotate3')
		$('#img').addClass('rotate2')
	}	
})

