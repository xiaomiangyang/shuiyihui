// JavaScript Document
$(function(){
	function imgs (){
		var pmW = $(window).width();
		if ( pmW <= 991 ){
			$('body').removeClass('hover');
		}else{
			$('body').addClass('hover');
		}
	}
	imgs();	
	$(window).resize(function(){
		imgs();	
	})	
})	
$(document).ready(function() {
	$(".pictrue-2-owl").owlCarousel({
		items : 3,/*榛樿鏄剧ず鏁伴噺*/
		itemsDesktop : [1199, 3],/*鍝嶅簲寮忓竷灞€*/
		itemsDesktopSmall : [991, 2],
		itemsTablet : [768, 2],
		itemsMobile : [479, 2],
		autoPlay : 3000,
		stopOnHover : true,/*榧犳爣缁忚繃鎮仠*/
		lazyLoad : true,/*鍝嶅簲寮忓紑鍏�*/
		navigation : true,/*绠ご寮€鍏�*/
		pagination : false,/*鎸夐挳寮€鍏�*/
		navigationText : ["", ""],/*宸﹀彸绠ご鏂囧瓧*/
	  });
 });