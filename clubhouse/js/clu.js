
$('#img_wrap').click(function(){
	if($('img').hasClass('rotate2')){
		$('#img').removeClass('rotate2')
		$('#img').addClass('rotate3')
	}else{
		$('#img').removeClass('rotate3')
		$('#img').addClass('rotate2')
	}	
})
function fun(obj){
	$('.one,.two,.three').css('display','none')
	$(obj).css('display','block')
	$('.page').css('display','none')
	$('.record1').css('display','block')
}
