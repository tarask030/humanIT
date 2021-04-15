$(document).ready(function(){
	$(":checkbox").click(function(){
		if ($('.check1').is(':checked'))                   
			$('.main').css("border", "solid 1px #EB4E1D");
		else
			$('.main').css( "border", "solid 1px #ddd");
	});
});

$(document).ready(function(){
	$(":checkbox").click(function(){
		if ($('.check').is(':checked'))                   
			$('.main2').css("border", "solid 1px #EB4E1D");
		else
			$('.main2').css( "border", "solid 1px #ddd");
	});
});