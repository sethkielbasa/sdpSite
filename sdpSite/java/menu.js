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
	$("#option1").click(function(){
		$("#interior").attr("src","subpages/home.html");
	});
	$("#option1").hover(function(){
		$(this).css("font-weight","bold").css("border-width","6px").css("width","138").css("height","28").css("line-height","28px");
			}, function(){
			$(this).css("font-weight","normal").css("border-width","3px").css("width","144").css("height","34").css("line-height","34px");
			});
});
$(document).ready(function(){
	$("#option4").click(function(){
		$("#interior").attr("src","subpages/sdp15.html");
	});
	$("#option4").hover(function(){
		$(this).css("font-weight","bold").css("border-width","6px").css("width","138").css("height","28").css("line-height","28px");
			}, function(){
			$(this).css("font-weight","normal").css("border-width","3px").css("width","144").css("height","34").css("line-height","34px");
			});
});

$(document).ready(function(){
  $("#option2").mouseenter(function(){
	$("#option2Menu").show();
	$("#option2Menu").css("height", '140px');
  });
	$("#option2").hover(function(){
		$(this).css("font-weight","bold").css("border-width","6px").css("width","138").css("height","28").css("line-height","28px");
			}, function(){
			$(this).css("font-weight","normal").css("border-width","3px").css("width","144").css("height","34").css("line-height","34px");
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
	$("#option3Menu").css("height", '140px');
  });
	$("#option3").hover(function(){
		$(this).css("font-weight","bold").css("border-width","6px").css("width","138").css("height","28").css("line-height","28px");
			}, function(){
			$(this).css("font-weight","normal").css("border-width","3px").css("width","144").css("height","34").css("line-height","34px");
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
	$("#option5Menu").css("height", '30px');
  });
	$("#option5").hover(function(){
		$(this).css("font-weight","bold").css("border-width","6px").css("width","138").css("height","28").css("line-height","28px");
			}, function(){
			$(this).css("font-weight","normal").css("border-width","3px").css("width","144").css("height","34").css("line-height","34px");
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