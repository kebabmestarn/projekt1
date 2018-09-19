$(document).ready(function() {
//$("#photoImage").attr("src", "asd123.jpg");


$(".photo").css({
	"border": "solid",
	"border-color": "green",
	"border-width": "10px",
	"width": "400px",
	"height": "300px",
	"margin": "25px"
});

$("#photoImage").css({
	"border": "dashed",
	"border-color": "yellow",
	"border-width": "10px",
	"width": "400px",
	"height": "300px",
	"margin": "25px",
	"position": "absolute",
	"top": "500px"
});

$(".blue").removeClass().addClass("red");


$("#but").mouseenter( function(){
	

	$("#photoImage").animate({
		"opacity": "toggle",
		"width": "toggle",
		"height": "toggle" }, 1000, "swing",
	);
	
	var butText = $("#but").attr("value");
	
	if(butText == "show"){
		$("#but").attr("value", "hide");
	} if(butText == "hide"){
		$("#but").attr("value", "show");
	}
		
	});

$(".photo").on("click", function(a){
$("p").text(a.target.id);
});

	
	
	

	}); 





	
	


