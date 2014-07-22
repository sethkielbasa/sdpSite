function adjustSize(){
	var w=window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	var windowHeight = w - 10 - 200;
	document.getElementById("interior").style.height = (windowHeight+20)+"px";
	document.getElementById("sideBar").style.height = (windowHeight + 6)+"px";
	document.getElementById("rightLine").style.height = (windowHeight + 56)+"px";
	
	w=window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	var windowWidth = w - 10 - 206;
	document.getElementById("interior").style.width = (windowWidth + 30) +"px";			
	document.getElementById("headingBar").style.width = (w - 20)+"px";	
	document.getElementById("navigationBar").style.width = (w -20)+"px";
	document.getElementById("navSpace").style.width = (((w-20) - (150*5))/2)+"px";
	
	document.getElementsByClassName("option-menus")[1].style.top = 180+"px";
	document.getElementsByClassName("option-menus")[2].style.top = 210+"px";
	document.getElementsByClassName("option-menus")[4].style.top = 270+"px";
	
	
	
	if( windowWidth < (605)){
			$(document).ready(function(){
				$("#quotePartOne").hide();				
				$("#quotePartTwo").hide();	
			});
		}
	else{
			$(document).ready(function(){
				$("#quotePartOne").show();				
				$("#quotePartTwo").show();	
			});				
	}
	
	var x = $("#copyrightS").width();
	var position = (w/2) - (x/2);
	document.getElementById("copyright").style.left =position+"px";
	
	x = $("#countdownHeader").width();
	position = ($("#sideBar").width() - x)/2;
	document.getElementById("countdownHeader").style.left = position + "px";
	
	x = $("#days").width();
	position = ($("#sideBar").width() - x)/2;
	document.getElementById("days").style.left = position + "px";

	x = $("#hours").width();
	position = ($("#sideBar").width() - x)/2;
	document.getElementById("hours").style.left = position + "px";
	
	x = $("#minutes").width();
	position = ($("#sideBar").width() - x)/2;
	document.getElementById("minutes").style.left = position + "px";
	
	x = $("#seconds").width();
	position = ($("#sideBar").width() - x)/2;
	document.getElementById("seconds").style.left = position + "px";
	
	x = $("#daysNumber").width();
	position = ($("#sideBar").width() - x)/2;
	document.getElementById("daysNumber").style.left = position + "px";

	x = $("#hoursNumber").width();
	position = ($("#sideBar").width() - x)/2;
	document.getElementById("hoursNumber").style.left = position + "px";
	
	x = $("#minutesNumber").width();
	position = ($("#sideBar").width() - x)/2;
	document.getElementById("minutesNumber").style.left = position + "px";
	
	x = $("#secondsNumber").width();
	position = ($("#sideBar").width() - x)/2;
	document.getElementById("secondsNumber").style.left = position + "px";
	
	/*
	x = $("#sideBar").height();
	$("#countdownHeader").css('bottom',(0.55*x)+'px');
	$("#days").css('bottom',(0.46*x)+'px');
	$("#daysNumber").css('bottom',(0.41*x)+'px');
	$("#hours").css('bottom',(0.35*x)+'px');
	$("#hoursNumber").css('bottom',(0.29*x)+'px');
	$("#minutes").css('bottom',(0.23*x)+'px');
	$("#minutesNumber").css('bottom',(0.17*x)+'px');
	$("#seconds").css('bottom',(0.11*x)+'px');
	$("#secondsNumber").css('bottom',(0.05*x)+'px');
	*/
}