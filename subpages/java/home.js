$(window).load(function(){
	var height = $(window).height();
	var width = $(window).width();
	
	var position = ( width - $("#header1").width() ) / 2;
	$("#header1").css('left', position + 'px');
	position = ( width - $("#header2").width() ) / 2;
	$("#header2").css('left', position + 'px');
	position = ( $("#header1").height() + 10);
	$("#header2").css('top', position + 'px');		
	
	position = (width - 400) /5;
	$("#teamBox").css('left', (2*position) + 'px');
	$("#projectBox").css('left',(3*position+200)+'px');
	
	$("#seth").css('left', (2*position+25) + 'px');
	$("#albion").css('left', (2*position+25) + 'px');
	$("#noah").css('left', (2*position+25) + 'px');
	$("#andrew").css('left', (2*position+25) + 'px');
	$("#problem").css('left',(3*position+200+25)+'px');
	$("#solution").css('left',(3*position+200+25)+'px');
	$("#design").css('left',(3*position+200+25)+'px');
	$("#product").css('left',(3*position+200+25)+'px');

});

$(window).resize(function(){
	var height = $(window).height();
	var width = $(window).width();
	
	var position = ( width - $("#header1").width() ) / 2;
	$("#header1").css('left', position + 'px');
	position = ( width - $("#header2").width() ) / 2;
	$("#header2").css('left', position + 'px');
	position = ( $("#header1").height() + 10);
	$("#header2").css('top', position + 'px');		
	
	position = (width - 400) /5;
	$("#teamBox").css('left', (2*position) + 'px');
	$("#projectBox").css('left',(3*position+200)+'px');
	
	$("#seth").css('left', (2*position+25) + 'px').css('top','150px').hide();
	$("#albion").css('left', (2*position+25) + 'px').css('top','150px').hide();
	$("#noah").css('left', (2*position+25) + 'px').css('top','150px').hide();
	$("#andrew").css('left', (2*position+25) + 'px').css('top','150px').hide();
	$("#problem").css('left',(3*position+200+25)+'px').css('top','150px').hide();
	$("#solution").css('left',(3*position+200+25)+'px').css('top','150px').hide();
	$("#design").css('left',(3*position+200+25)+'px').css('top','150px').hide();
	$("#product").css('left',(3*position+200+25)+'px').css('top','150px').hide();

});

$(document).ready(function(){
	var height = $(window).height();
	var width = $(window).width();
	
	var position = ( width - $("#header1").width() ) / 2;
	$("#header1").css('left', position + 'px');
	position = ( width - $("#header2").width() ) / 2;
	$("#header2").css('left', position + 'px');
	position = ( $("#header1").height() + 10);
	$("#header2").css('top', position + 'px');		
	
	
	position = (width - 400) /5;
	$("#teamBox").css('left', (2*position) + 'px');
	$("#projectBox").css('left',(3*position+200)+'px');
	
	$("#seth").css('left', (2*position+25) + 'px');
	$("#albion").css('left', (2*position+25) + 'px');
	$("#noah").css('left', (2*position+25) + 'px');
	$("#andrew").css('left', (2*position+25) + 'px');
	$("#problem").css('left',(3*position+200+25)+'px');
	$("#solution").css('left',(3*position+200+25)+'px');
	$("#design").css('left',(3*position+200+25)+'px');
	$("#product").css('left',(3*position+200+25)+'px');

});

$(document).ready(function(){
	var height = $(window).height();
	var width = $(window).width();
	position = (width - 400) /7;

	$("#teamBox").click(function(){
		var height = $(window).height();
		var width = $(window).width();
		position = (width - 400) /14;
		$("#seth").show();
		$("#albion").show();
		$("#noah").show();
		$("#andrew").show();		
		$("#seth").animate({
			top:'300px',
			left: (position*5.5) + 'px',
			height:'100px',
			width:'100px',
			});
		$("#albion").animate({
			top:'300px',
			left:(position*6.5 + 100) + 'px',
			height:'100px',
			width:'100px',
			});
		$("#noah").animate({
			top:'300px',
			left:(position*7.5 + 200) + 'px',
			height:'100px',
			width:'100px',
			});
		$("#andrew").animate({
			top:'300px',
			left:(position*8.5 + 300) + 'px',
			height:'100px',
			width:'100px',
			});
			
		position = (width - 400) /5;
		$("#problem").animate({
			top:'150px',
			left: (3*position+225) + 'px',
			height:'1px',
			width:'1px',
			}).hide();
		$("#solution").animate({
			top:'150px',
			left:(3*position+225) + 'px',
			height:'1px',
			width:'1px',
			}).hide();
		$("#design").animate({
			top:'150px',
			left:(3*position+225) + 'px',
			height:'100px',
			width:'1px',
			}).hide();
		$("#product").animate({
			top:'150px',
			left:(3*position+225) + 'px',
			height:'100px',
			width:'1px',
			}).hide();	
	
	});
	$("#teamBox").hover(function(){
		$(this).css('background-color','#AAAAAA');
	}, function(){
		$(this).css('background-color','#CCCCCC');
	});
	$("#projectBox").click(function(){
		var height = $(window).height();
		var width = $(window).width();
		position = (width - 400) /14;
		$("#problem").show();
		$("#solution").show();
		$("#design").show();
		$("#product").show();		
		$("#problem").animate({
			top:'300px',
			left: (position*5.5) + 'px',
			height:'100px',
			width:'100px',
			});
		$("#solution").animate({
			top:'300px',
			left:(position*6.5 + 100) + 'px',
			height:'100px',
			width:'100px',
			});
		$("#design").animate({
			top:'300px',
			left:(position*7.5 + 200) + 'px',
			height:'100px',
			width:'100px',
			});
		$("#product").animate({
			top:'300px',
			left:(position*8.5 + 300) + 'px',
			height:'100px',
			width:'100px',
			});

		position = (width - 400) /5;
		$("#seth").animate({
			top:'150px',
			left: (2*position+25) + 'px',
			height:'1px',
			width:'1px',
			}).hide();
		$("#albion").animate({
			top:'150px',
			left:(2*position+25) + 'px',
			height:'1px',
			width:'1px',
			}).hide();
		$("#noah").animate({
			top:'150px',
			left:(2*position+25) + 'px',
			height:'100px',
			width:'1px',
			}).hide();
		$("#andrew").animate({
			top:'150px',
			left:(2*position+25) + 'px',
			height:'100px',
			width:'1px',
			}).hide();				
	});
	$("#projectBox").hover(function(){
		$(this).css('background-color','#AAAAAA');
	}, function(){
		$(this).css('background-color','#CCCCCC');
	});

});

$(document).ready(function(){
	$("#seth").hover(function(){
		$(this).css('background-color','#AAAAAA');
	}, function(){
		$(this).css('background-color','#CCCCCC');
	});
	$("#albion").hover(function(){
		$(this).css('background-color','#AAAAAA');
	}, function(){
		$(this).css('background-color','#CCCCCC');
	});
	$("#noah").hover(function(){
		$(this).css('background-color','#AAAAAA');
	}, function(){
		$(this).css('background-color','#CCCCCC');
	});
	$("#andrew").hover(function(){
		$(this).css('background-color','#AAAAAA');
	}, function(){
		$(this).css('background-color','#CCCCCC');
	});
	
	$("#problem").hover(function(){
		$(this).css('background-color','#AAAAAA');
	}, function(){
		$(this).css('background-color','#CCCCCC');
	});
	$("#solution").hover(function(){
		$(this).css('background-color','#AAAAAA');
	}, function(){
		$(this).css('background-color','#CCCCCC');
	});
	$("#design").hover(function(){
		$(this).css('background-color','#AAAAAA');
	}, function(){
		$(this).css('background-color','#CCCCCC');
	});
	$("#product").hover(function(){
		$(this).css('background-color','#AAAAAA');
	}, function(){
		$(this).css('background-color','#CCCCCC');
	});

});

$(document).ready(function(){
	$("#seth").click(function(){
		window.open("team/sethKielbasa.html",'_self');
	});
	$("#albion").click(function(){
		window.open("team/albionLici.html",'_self');
	});
	$("#noah").click(function(){
		window.open("team/noahPortnoy.html",'_self');
	});
	$("#andrew").click(function(){
		window.open("team/andrewSousa.html",'_self');
	});
	
	$("#problem").click(function(){
		window.open("project/construction.html",'_self');
	});
	$("#solution").click(function(){
		window.open("project/construction.html",'_self');
	});
	$("#design").click(function(){
		window.open("project/construction.html",'_self');
	});
	$("#product").click(function(){
		window.open("project/construction.html",'_self');
	});
	
});