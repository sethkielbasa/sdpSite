function startTime(){

	var today = new Date();
	
	var days = today.getDate();
	var month = today.getMonth();
	switch(month){
		case 0: //Jan 31
			days = days;
			break;
		case 1: //Feb 28
			days = days + 31;
			break;
		case 2: //Mar 31
			days = days + 59;
			break;
		case 3: //Apr 30
			days = days + 90;
			break;
		case 4: //May 31
			days = days + 120;
			break;
		case 5: //Jun 30
			days = days + 151;
			break;
		case 6: //Jul 31
			days = days + 181;
			break;
		case 7: //Aug 31 
			days = days + 212;
			break;
		case 8: //Sep 30
			days = days + 243;
			break;
		case 9: //Oct 31
			days = days + 273;
			break;
		case 10: //Nov 30
			days = days + 304;
			break;
		case 11: //Dec 31
			days = days + 334;
			break;
	}
	
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	
	//DAYS
	if(days > 114)
		days = 365 -days + 114;
	else
		days = 114 - days;
	
	//HOURS
	if(days == 0)
		hours = 9 - hours;
	else
		hours = 24 - hours + 8;
	if(hours > 23){
		hours = hours -24;
		days = days +1;
		}
	if( hours < 0)
		hours = "0" + hours;
	
	//MINUTES
	minutes = 60 - minutes;
	if(minutes < 10)
		minutes = "0" + minutes;
	
	//SECONDS
	seconds = 60 - seconds;
	if(seconds < 10)
		seconds = "0" + seconds;
			
	document.getElementById("daysNumber").innerHTML = days;
	document.getElementById("secondsNumber").innerHTML = seconds;
	document.getElementById("minutesNumber").innerHTML = minutes;
	document.getElementById("hoursNumber").innerHTML = hours;
	var t = setTimeout(function(){startTime()},500);
}