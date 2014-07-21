function adjustSize(){
	var w=window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	var windowHeight = w - 40 - 200;
	document.getElementById("interior").style.height = windowHeight+"px";
	document.getElementById("sideBar").style.height = (windowHeight + 6)+"px";
	
	w=window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	var windowWidth = w - 10 - 206;
	document.getElementById("interior").style.width = windowWidth+"px";			
	document.getElementById("headingBar").style.width = (w - 20)+"px";	
	document.getElementById("navigationBar").style.width = (w -20)+"px";
	document.getElementById("navSpace").style.width = (((w-20) - (150*5))/2)+"px";
	document.getElementsByClassName("option-menus")[0].style.left = ((((w-20) - (150*5))/2) + 10)+"px";
	document.getElementsByClassName("option-menus")[1].style.left = ((((w-20) - (150*5))/2) + 160)+"px";
	document.getElementsByClassName("option-menus")[2].style.left = ((((w-20) - (150*5))/2) + 310)+"px";
	document.getElementsByClassName("option-menus")[3].style.left = ((((w-20) - (150*5))/2) + 460)+"px";
	document.getElementsByClassName("option-menus")[4].style.left = ((((w-20) - (150*5))/2) + 610)+"px";
	
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
	
	x = $("#sideBar").height();
	$("#countdownHeader").css('top',(0.1*x)+'px');
	$("#days").css('top',(0.35*x)+'px');
	$("#daysNumber").css('top',(0.4*x)+'px');
	$("#hours").css('top',(0.5*x)+'px');
	$("#hoursNumber").css('top',(0.55*x)+'px');
	$("#minutes").css('top',(0.65*x)+'px');
	$("#minutesNumber").css('top',(0.70*x)+'px');
	$("#seconds").css('top',(0.80*x)+'px');
	$("#secondsNumber").css('top',(0.85*x)+'px');
	
}