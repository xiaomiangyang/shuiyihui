$(document).ready(function(){
	$('#menu_btn').click(function(){
		if($('#menu_btn .span1').hasClass('rotate')){
			$("#menu_btn .span2").css('display','block')
			$("#menu_btn .span1").removeClass('rotate')
			$("#menu_btn .span3").removeClass('rotate1')			
		}else{
			$("#menu_btn .span2").css('display','none')
			$("#menu_btn .span1").addClass('rotate')
			$("#menu_btn .span3").addClass('rotate1')
		}
	})
	window.onscroll=function(){
		var top=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		if(top>115){
			$('.smallHeader').show();
		}else{
			$('.smallHeader').hide();
		}
	}
	$('#banner').carousel({
        interval:3000
    })
	
})
	