//
//Handle initial load
//
$(window).load(function(){
	var width = $(window).width();
	var height = $(window).height();	
	
	var x = 0;
	var y = 0;
	
	$("#leftOptions").css('height', (height - 70) + 'px');	
	$("#rightOptions").css('height', (height - 70) + 'px');
	
	var leftMenuSpace = ($("#leftOptions").height() - 9*($(".left-menus").height()))/10;
	if(leftMenuSpace < 25)
		leftMenuSpace = 25;
	for(var i = 0; i < 4; i++){
		document.getElementsByClassName("left-menus")[i].style.top = (i*($(".left-menus").height())+ (i+1)*leftMenuSpace) + "px";
	}
	
	var rightMenuSpace = ($("#rightOptions").height() - 9*($(".right-menus").height()))/10;
	if(rightMenuSpace < 25)
		rightMenuSpace = 25;
	for(var i = 0; i < 4; i++){
		document.getElementsByClassName("right-menus")[i].style.top = (i*($(".right-menus").height())+ (i+1)*rightMenuSpace) + "px";
	}
	
	var position = (width -$("#displayBox").width())/2;
	$("#displayBox").css('left', position + 'px');
	$("#leftOptions").css('left', (position - 126) + 'px');	
	$("#rightOptions").css('right', (position - 126) + 'px');
	
	$("#displayBox").css('height', (height - 50) + 'px');
	x = $("#displayBox").width();
	y = $("#displayBox").height();
	$("#interior").css('height', ( y - 80 ) + 'px').css('width', ( x - 80 ) + 'px');

	$("#header1").css('left', (($("#displayBox").width() - $("#header1").width() ) /2 ) + 'px');
	$("#header2").css('left', (($("#displayBox").width() - $("#header2").width() ) /2 ) + 'px');
	$("#header2").css('top', (($("#header1").height() + 60 ) + 'px'));	
	
});

//
//Handle resizing
//
$(window).resize(function(){
	var width = $(window).width();
	var height = $(window).height();	

	var x = 0;
	var y = 0;
	
	$("#leftOptions").css('height', (height - 70) + 'px');	
	$("#rightOptions").css('height', (height - 70) + 'px');
	
	var leftMenuSpace = ($("#leftOptions").height() - 9*($(".left-menus").height()))/10;
	if(leftMenuSpace < 25)
		leftMenuSpace = 25;
	for(var i = 0; i < 4; i++){
		document.getElementsByClassName("left-menus")[i].style.top = (i*($(".left-menus").height())+ (i+1)*leftMenuSpace) + "px";
	}
	
	var rightMenuSpace = ($("#rightOptions").height() - 9*($(".right-menus").height()))/10;
	if(rightMenuSpace < 25)
		rightMenuSpace = 25;
	for(var i = 0; i < 4; i++){
		document.getElementsByClassName("right-menus")[i].style.top = (i*($(".right-menus").height())+ (i+1)*rightMenuSpace) + "px";
	}
	
	var position = (width -$("#displayBox").width())/2;
	$("#displayBox").css('left', position + 'px');	
	$("#leftOptions").css('left', (position - 126) + 'px');
	$("#rightOptions").css('right', (position - 126) + 'px');
	
	$("#displayBox").css('height', (height - 50) + 'px');
	x = $("#displayBox").width();
	y = $("#displayBox").height();
	$("#interior").css('height', ( y - 80 ) + 'px').css('width', ( x - 80 ) + 'px');
	
	$("#header1").css('left', (($("#displayBox").width() - $("#header1").width() ) /2 ) + 'px');
	$("#header2").css('left', (($("#displayBox").width() - $("#header2").width() ) /2 ) + 'px');
	$("#header2").css('top', (($("#header1").height() + 60 )) + 'px');
});

//
// Hover over menu buttons
//
$(document).ready(function(){
	$("#seth").hover(function(){
		$(this).css('background-color','#42ddb8').css('box-shadow','5px 5px 10px #444444');
	}, function(){
		$(this).css('background-color','#64ffda').css('box-shadow','5px 5px 10px #888888');
	});
		
	$("#albion").hover(function(){
		$(this).css('background-color','#42ddb8').css('box-shadow','5px 5px 10px #444444');
	}, function(){
		$(this).css('background-color','#64ffda').css('box-shadow','5px 5px 10px #888888');
	});
	
	$("#noah").hover(function(){
		$(this).css('background-color','#42ddb8').css('box-shadow','5px 5px 10px #444444');
	}, function(){
		$(this).css('background-color','#64ffda').css('box-shadow','5px 5px 10px #888888');
	});
	
	$("#andrew").hover(function(){
		$(this).css('background-color','#42ddb8').css('box-shadow','5px 5px 10px #444444');
	}, function(){
		$(this).css('background-color','#64ffda').css('box-shadow','5px 5px 10px #888888');
	});
	
	$("#problem").hover(function(){
		$(this).css('background-color','#42ddb8').css('box-shadow','5px 5px 10px #444444');
	}, function(){
		$(this).css('background-color','#64ffda').css('box-shadow','5px 5px 10px #888888');
	});
	
	$("#solution").hover(function(){
		$(this).css('background-color','#42ddb8').css('box-shadow','5px 5px 10px #444444');
	}, function(){
		$(this).css('background-color','#64ffda').css('box-shadow','5px 5px 10px #888888');
	});
	
	$("#design").hover(function(){
		$(this).css('background-color','#42ddb8').css('box-shadow','5px 5px 10px #444444');
	}, function(){
		$(this).css('background-color','#64ffda').css('box-shadow','5px 5px 10px #888888');
	});
	
	$("#product").hover(function(){
		$(this).css('background-color','#42ddb8').css('box-shadow','5px 5px 10px #444444');
	}, function(){
		$(this).css('background-color','#64ffda').css('box-shadow','5px 5px 10px #888888');
	});
	
	
	$("#resources").hover(function(){
		$(this).css('color','#004C4C');
	}, function(){
		$(this).css('color','white');
	});
	
	$("#sdp").hover(function(){
		$(this).css('color','#004C4C');
	}, function(){
		$(this).css('color','white');
	});

	$("#umass").hover(function(){
		$(this).css('color','#004C4C');
	}, function(){
		$(this).css('color','white');
	});
	
	
	$("#resources").hover(function(){
		$(this).css('cursor','pointer');},
			function(){
			$(this).css('pointer', 'cursor');
	});
	$("#sdp").hover(function(){
		$(this).css('cursor','pointer');},
			function(){
			$(this).css('pointer', 'cursor');
	});
	$("#umass").hover(function(){
		$(this).css('cursor','pointer');},
			function(){
			$(this).css('pointer', 'cursor');
	});			

	$("#seth").hover(function(){
		$(this).css('cursor','pointer');},
			function(){
			$(this).css('pointer', 'cursor');
	});
	$("#albion").hover(function(){
		$(this).css('cursor','pointer');},
			function(){
			$(this).css('pointer', 'cursor');
	});
	$("#noah").hover(function(){
		$(this).css('cursor','pointer');},
			function(){
			$(this).css('pointer', 'cursor');
	});	
	$("#andrew").hover(function(){
		$(this).css('cursor','pointer');},
			function(){
			$(this).css('pointer', 'cursor');
	});
	$("#problem").hover(function(){
		$(this).css('cursor','pointer');},
			function(){
			$(this).css('pointer', 'cursor');
	});
	$("#solution").hover(function(){
		$(this).css('cursor','pointer');},
			function(){
			$(this).css('pointer', 'cursor');
	});
	$("#design").hover(function(){
		$(this).css('cursor','pointer');},
			function(){
			$(this).css('pointer', 'cursor');
	});
	$("#product").hover(function(){
		$(this).css('cursor','pointer');},
			function(){
			$(this).css('pointer', 'cursor');
	});	
});

//
//Click on menu buttons
//

$(document).ready(function(){	
	$("#seth").click(function(){
		$("#interior").fadeOut('fast', function(){		
			$("#interior").attr('src','subpages/team/sethKielbasa.html');
			$("#interior").fadeIn('slow');
		});
	});
	$("#albion").click(function(){
		$("#interior").fadeOut('fast', function(){		
			$("#interior").attr('src','subpages/team/albionLici.html');
			$("#interior").fadeIn('slow');
		});
	});
	$("#noah").click(function(){
		$("#interior").fadeOut('fast', function(){		
			$("#interior").attr('src','subpages/team/noahPortnoy.html');
			$("#interior").fadeIn('slow');
		});
	});
	$("#andrew").click(function(){
		$("#interior").fadeOut('fast', function(){		
			$("#interior").attr('src','subpages/team/andrewSousa.html');
			$("#interior").fadeIn('slow');
		});
	});
	$("#solution").click(function(){
		$("#interior").fadeOut('fast', function(){		
			$("#interior").attr('src','subpages/construction.html');
			$("#interior").fadeIn('slow');
		});
	});
	$("#problem").click(function(){
		$("#interior").fadeOut('fast', function(){		
			$("#interior").attr('src','subpages/construction.html');
			$("#interior").fadeIn('slow');
		});
	});
	$("#design").click(function(){
		$("#interior").fadeOut('fast', function(){		
			$("#interior").attr('src','subpages/construction.html');
			$("#interior").fadeIn('slow');
		});
	});
	$("#product").click(function(){
		$("#interior").fadeOut('fast', function(){		
			$("#interior").attr('src','subpages/construction.html');
			$("#interior").fadeIn('slow');
		});
	});
	
	$("#resources").click(function(){
		$("#interior").fadeOut('fast', function(){		
			$("#interior").attr('src','subpages/construction.html');
			$("#interior").fadeIn('slow');
		});
	});
	$("#sdp").click(function(){
		window.open("http://www.ecs.umass.edu/ece/sdp/sdp15/");
	});
	$("#umass").click(function(){
		window.open('https://umass.edu');
	});

});

$(document).ready(function(){
	$("#displayBox").click(function(){	
		$("#interior").fadeOut(300);
	});
	$("#headingBar").click(function(){
		$("#interior").fadeOut(300);
	});
});
