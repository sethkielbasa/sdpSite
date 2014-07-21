$(document).ready(function(){

	var height = $(document).height();
	var width = $(document).width();	
	var vertSpacing = (height-400)/5;
	
	$(window).resize(function(){
		height = $(document).height();
		width = $(document).width();
		vertSpacing = (height-400)/5;
		
		$("#photoOne").css('top' , vertSpacing + 'px');
		$("#photoTwo").css('top' , (2*vertSpacing + 100) + 'px');
		$("#photoThree").css('top' , (3*vertSpacing + 200) + 'px');
		$("#photoFour").css('top' , (4*vertSpacing + 300) + 'px');
		
		$("#topBox").css('width', (width - 250)+'px');
		$("#bottomBox").css('width', (width - 250)+'px');
		$("#topBox").css('height', (height - 350)+'px');
		$("#bottomBox").css('height', (height - 350)+'px');
		
		

	});

	
	
	$("#photoOne").css('top' , vertSpacing + 'px');
	$("#photoTwo").css('top' , (2*vertSpacing + 100) + 'px');
	$("#photoThree").css('top' , (3*vertSpacing + 200) + 'px');
	$("#photoFour").css('top' , (4*vertSpacing + 300) + 'px');

	$("#photoOne").hover(function(){
		$(this).animate({
			left:'800px',
			top:'450px',
			height:'200px',
			width:'200px'
			});
		$("#photoTwo").animate({
			left:'50px',
			top:(2*vertSpacing + 100) + 'px',
			height:'100px',
			width:'100px'
			});
		$("#photoThree").animate({
			left:'50px',
			top:(3*vertSpacing + 200) + 'px',
			height:'100px',
			width:'100px'
			});
		$("#photoFour").animate({
			left:'50px',
			top:(4*vertSpacing + 300) + 'px',
			height:'100px',
			width:'100px'
			});
		$("#topBox").fadeIn(1500);
		$("#designOne").fadeIn(1500);
		$("#bottomBox").fadeOut('fast');
		$("#designTwo").fadeOut('fast');
		$("#designThree").fadeOut('fast');
		$("#designFour").fadeOut('fast');
	});

	$("#photoTwo").hover(function(){
		$(this).animate({
			left:'800px',
			top:'50px',
			height:'200px',
			width:'200px'
			});
		$("#photoOne").animate({
			left:'50px',
			top:vertSpacing + 'px',
			height:'100px',
			width:'100px'
			});
		$("#photoThree").animate({
			left:'50px',
			top:(3*vertSpacing + 200) + 'px',
			height:'100px',
			width:'100px'
			});
		$("#photoFour").animate({
			left:'50px',
			top:(4*vertSpacing + 300) + 'px',
			height:'100px',
			width:'100px'
			});
		$("#bottomBox").fadeIn(1500);
		$("#designTwo").fadeIn(1500);
		$("#topBox").fadeOut('fast');
		$("#designThree").fadeOut('fast');
		$("#designOne").fadeOut('fast');
		$("#designFour").fadeOut('fast');
	});

	$("#photoThree").hover(function(){
		$(this).animate({
			left:'800px',
			top:'450px',
			height:'200px',
			width:'200px'
			});
		$("#photoTwo").animate({
			left:'50px',
			top:(2*vertSpacing + 100) + 'px',
			height:'100px',
			width:'100px'
			});
		$("#photoOne").animate({
			left:'50px',
			top:vertSpacing + 'px',
			height:'100px',
			width:'100px'
			});
		$("#photoFour").animate({
			left:'50px',
			top:(4*vertSpacing + 300) + 'px',
			height:'100px',
			width:'100px'
			});
		$("#topBox").fadeIn(1500);
		$("#designThree").fadeIn(1500);
		$("#bottomBox").fadeOut('fast');
		$("#designTwo").fadeOut('fast');
		$("#designOne").fadeOut('fast');
		$("#designFour").fadeOut('fast');
	});

	$("#photoFour").hover(function(){
		$(this).animate({
			left:'800px',
			top:'50px',
			height:'200px',
			width:'200px'
			});
		$("#photoTwo").animate({
			left:'50px',
			top:(2*vertSpacing + 100) + 'px',
			height:'100px',
			width:'100px'
			});
		$("#photoThree").animate({
			left:'50px',
			top:(3*vertSpacing + 200) + 'px',
			height:'100px',
			width:'100px'
			});
		$("#photoOne").animate({
			left:'50px',
			top: vertSpacing + 'px',
			height:'100px',
			width:'100px'
			});
		$("#bottomBox").fadeIn(1500);
		$("#designFour").fadeIn(1500);
		$("#topBox").fadeOut('fast');
		$("#designTwo").fadeOut('fast');
		$("#designOne").fadeOut('fast');
		$("#designThree").fadeOut('fast');
	});
});





