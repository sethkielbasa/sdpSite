$(document).ready(function(){

	$("#umass").hover(function(){
		$(this).css('cursor','pointer');},
			function(){
			$(this).css('pointer', 'cursor');});
			
	$("#umass").click(function(){
		window.location.replace("https://umass.edu");
	});
	
});


$(document).ready(function(){
	$("#theProblem").click(function(){
		$("#interior").attr("src","subpages/project/construction.html");
	});
	$("#theProblem").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
	$("#theSolution").click(function(){
		$("#interior").attr("src","subpages/project/construction.html");
	});
	$("#theSolution").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
	$("#design").click(function(){
		$("#interior").attr("src","subpages/project/construction.html");
	});
	$("#design").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
	$("#finalProduct").click(function(){
		$("#interior").attr("src","subpages/project/construction.html");
	});
	$("#finalProduct").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
	$("#sethKielbasa").click(function(){
		$("#interior").attr("src","subpages/team/sethKielbasa.html");
	});
	$("#sethKielbasa").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
	$("#albionLici").click(function(){
		$("#interior").attr("src","subpages/team/albionLici.html");
	});
	$("#albionLici").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
	$("#noahPortnoy").click(function(){
		$("#interior").attr("src","subpages/team/noahPortnoy.html");
	});
	$("#noahPortnoy").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
	$("#andrewSousa").click(function(){
		$("#interior").attr("src","subpages/team/andrewSousa.html");
	});
	$("#andrewSousa").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
	$("#resources").click(function(){
		$("#interior").attr("src","subpages/resources/construction.html");
	});
	$("#resources").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});			
});

$(document).ready(function(){
	$("#option1").click(function(){
		$("#interior").attr("src","subpages/home.html");
	});
	$("#option1").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
});
$(document).ready(function(){
	$("#option4").click(function(){
		$("#interior").attr("src","subpages/construction.html");
	});
	$("#option4").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
});

$(document).ready(function(){
  $("#option2").mouseenter(function(){
	$("#option2Menu").show();
	$("#option2Menu").css("height", '160px');
  });
	$("#option2").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
});
$(document).ready(function(){
  $("#option2").mouseleave(function(){
	$("#option2Menu").hide();				
  });
});
$(document).ready(function(){
  $("#option2Menu").mouseenter(function(){
	$("#option2Menu").show();
  });
});
$(document).ready(function(){
  $("#option2Menu").mouseleave(function(){
	$("#option2Menu").hide();				
  });
});

$(document).ready(function(){
  $("#option3").mouseenter(function(){
	$("#option3Menu").show();
	$("#option3Menu").css("height", '160px');
  });
	$("#option3").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
});			
$(document).ready(function(){
  $("#option3").mouseleave(function(){
	$("#option3Menu").hide();				
  });
});
$(document).ready(function(){
  $("#option3Menu").mouseenter(function(){
	$("#option3Menu").show();
  });
});			
$(document).ready(function(){
  $("#option3Menu").mouseleave(function(){
	$("#option3Menu").hide();				
  });
});

$(document).ready(function(){
  $("#option5").mouseenter(function(){
	$("#option5Menu").show();
	$("#option5Menu").css("height", '40px');
  });
	$("#option5").hover(function(){
		$(this).css("background-color","#DDDDDD");
			}, function(){
			$(this).css("background-color","white");
			});
});					
$(document).ready(function(){
  $("#option5").mouseleave(function(){
	$("#option5Menu").hide();				
  });
});
$(document).ready(function(){
  $("#option5Menu").mouseenter(function(){
	$("#option5Menu").show();
  });
});					
$(document).ready(function(){
  $("#option5Menu").mouseleave(function(){
	$("#option5Menu").hide();				
  });
});