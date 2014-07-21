$(document).ready(function(){

	$("#qOne").css('width', ($(document).width() /2) + 'px');
	$("#qTwo").css('width', ($(document).width() /2) + 'px');
	$("#qThree").css('width', ($(document).width() /2) + 'px');
	$("#qFour").css('width', ($(document).width() /2) + 'px');
	
	$("#qOne").css('line-height', $("#qOne").height() + 'px');
	$("#qTwo").css('line-height', $("#qTwo").height() + 'px');
	$("#qThree").css('line-height', $("#qThree").height()  + 'px');
	$("#qFour").css('line-height', $("#qFour").height() + 'px');
	
	$("#qOne").css('height', ($(document).height() /2) + 'px');
	$("#qTwo").css('height', ($(document).height() /2) + 'px');
	$("#qThree").css('height', ($(document).height() /2) + 'px');
	$("#qFour").css('height', ($(document).height() /2) + 'px');
	
	$("#qTwo").css('left',$("#qOne").width() + 'px');
	$("#qFour").css('left',$("#qThree").width() + 'px');
	
	$("#qThree").css('top',$("#qOne").height() + 'px');
	$("#qFour").css('top',$("#qTwo").height() + 'px');
	
	
	
	$("#one").css('width', ($(document).width() /2 -3) + 'px');
	$("#two").css('width', ($(document).width() /2 -3) + 'px');
	$("#three").css('width', ($(document).width() /2 -3) + 'px');
	$("#four").css('width', ($(document).width() /2 -3) + 'px');
	
	$("#one").css('height', ($(document).height() /2 -3) + 'px');
	$("#two").css('height', ($(document).height() /2 -3) + 'px');
	$("#three").css('height', ($(document).height() /2 -3) + 'px');
	$("#four").css('height', ($(document).height() /2 -3) + 'px');
	
	$("#two").css('left',($("#qOne").width() - 3) + 'px');
	$("#four").css('left',($("#qThree").width() - 3) + 'px');
	
	$("#three").css('top',($("#qOne").height() -3) + 'px');
	$("#four").css('top',($("#qTwo").height() -3) + 'px');

	
	$("#qOne").hover(function(){
		$(this).css('background-color','#FF3333');
	}, function(){
			$(this).css('background-color','#FF7777');
	});	
	$("#qTwo").hover(function(){
		$(this).css('background-color','#33FF33');
	}, function(){
			$(this).css('background-color','#77FF77');
	});	
	$("#qThree").hover(function(){
		$(this).css('background-color','#3333FF');
	}, function(){
			$(this).css('background-color','#7777FF');
	});	
	$("#qFour").hover(function(){
		$(this).css('background-color','#FFFF33');
	}, function(){
			$(this).css('background-color','#FFFF77');	
	});
	
	
	
	$("#qOne").click(function(){
		$(this).fadeOut(1500);
	});
	$("#qTwo").click(function(){
		$(this).fadeOut(1500);
	});
	$("#qThree").click(function(){
		$(this).fadeOut(1500);
	});
	$("#qFour").click(function(){
		$(this).fadeOut(1500);
	});
	
});



$(window).resize(function(){

	$("#qOne").css('width', ($(document).width() /2) + 'px');
	$("#qTwo").css('width', ($(document).width() /2) + 'px');
	$("#qThree").css('width', ($(document).width() /2) + 'px');
	$("#qFour").css('width', ($(document).width() /2) + 'px');
	
	$("#qOne").css('line-height', $("#qOne").height() + 'px');
	$("#qTwo").css('line-height', $("#qTwo").height() + 'px');
	$("#qThree").css('line-height', $("#qThree").height()  + 'px');
	$("#qFour").css('line-height', $("#qFour").height() + 'px');
	
	$("#qOne").css('height', ($(document).height() /2) + 'px');
	$("#qTwo").css('height', ($(document).height() /2) + 'px');
	$("#qThree").css('height', ($(document).height() /2) + 'px');
	$("#qFour").css('height', ($(document).height() /2) + 'px');
	
	$("#qTwo").css('left',$("#qOne").width() + 'px');
	$("#qFour").css('left',$("#qThree").width() + 'px');
	
	$("#qThree").css('top',$("#qOne").height() + 'px');
	$("#qFour").css('top',$("#qTwo").height() + 'px');
	
	
	
	$("#one").css('width', ($(document).width() /2 -3) + 'px');
	$("#two").css('width', ($(document).width() /2 -3) + 'px');
	$("#three").css('width', ($(document).width() /2 -3) + 'px');
	$("#four").css('width', ($(document).width() /2 -3) + 'px');
	
	$("#one").css('height', ($(document).height() /2 -3) + 'px');
	$("#two").css('height', ($(document).height() /2 -3) + 'px');
	$("#three").css('height', ($(document).height() /2 -3) + 'px');
	$("#four").css('height', ($(document).height() /2 -3) + 'px');
	
	$("#two").css('left',($("#qOne").width() - 3) + 'px');
	$("#four").css('left',($("#qThree").width() - 3) + 'px');
	
	$("#three").css('top',($("#qOne").height() -3) + 'px');
	$("#four").css('top',($("#qTwo").height() -3) + 'px');
});