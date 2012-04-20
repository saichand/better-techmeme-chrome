function hideSponsors() {
	var parent = document.getElementById('topcol23');
	var child = document.getElementById('topcol2');
	//document.getElementById('topcol2').style.display="none";
	//document.getElementById('topCol3').style.width="90%";
	parent.removeChild(child);

	document.getElementById('topcol1').style.width="67%";
	document.getElementById('topcol23').style.width="30%";

	document.getElementById('topcol3').style.cssFloat="left";
	document.getElementById('topcol3').style.styleFloat="left";
	document.getElementById('topcol3').style.width="100%";
	

	// move top bar to bottom

	try {
		$('div.prenavbar').css({ "border-bottom": "solid 1px #CCC" });
		var topline = $('div.topline').detach();
		$('div.navbar:first').remove();
		topline.insertAfter($('div.navbar'));
		$('div.topline').css({ "margin-left": "2em" });
	}
	catch (error) {
		console.log("Error moving top bar to bottom");
	}
	//var topline = document.getElementById('prenavbar').removeChild('topline');
	
}

hideSponsors();