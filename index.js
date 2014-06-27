$("#me").hover(function(){
	slide_away();
},function(){
	slide_back();
});

$("#snap").hover(function(){
	slide_away_snap();
}, function(){
	slide_back_snap();
});

function slide_away_snap(){
	$("#image").animate({
		marginTop: "-21px"
	}, 1000, function(){

	});
}

function slide_back_snap(){
	$("#image").animate({
		marginTop: "-322px"
	}, 1000, function(){

	});
}

function slide_away(){
	$("#desc").animate({
		marginLeft: "190px"
	}, 1000, function(){

	});
}

function slide_back(){
	$("#desc").animate({
		marginLeft: "0"
	}, 1000, function(){

	});
}
