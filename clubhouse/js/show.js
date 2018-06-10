$('#img_wrap').click(function(){
	if($('img').hasClass('rotate2')){
		$('#img').removeClass('rotate2')
		$('#img').addClass('rotate3')
	}else{
		$('#img').removeClass('rotate3')
		$('#img').addClass('rotate2')
	}	
})
$('.one1,.two2,.three3').css('display','none')
function fun(obj){
	$('.one1,.two2,.three3,.text').css('display','none')
	$(obj).css('display','block')
	$('.record1').css('display','block')
}
