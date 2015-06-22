$(document).ready(start);

function start(){

	var $red = $('#red');
	var $blue = $('#blue');
	var $green = $('#green');
	var $redMain = $('#red-main');
	var $blueMain = $('#blue-main');
	var $greenMain = $('#green-main');
	var $main = $('.main');
	var $tab = $('.tab');

	$red.on('click', showRed);
	$blue.on('click', showBlue);
	$green.on('click', showGreen);

	function showRed(e){


		$blueMain.hide();
		$greenMain.hide();
		$redMain.show();
		highlight(e);
	}
	function showBlue(e){

		$blueMain.show();
		$greenMain.hide();
		$redMain.hide();
		highlight(e);
	}
	function showGreen(e){

		$blueMain.hide();
		$greenMain.show();
		$redMain.hide();
		highlight(e);
	}

	// function highlight(e){

		// if($(e.target).parent().hasClass('tab')){
			// $tab.css('background-color','white');
			// $(e.target).parent().css('background-color', '#ccc');
		// }else{
			// $tab.css('background-color','white');
			// $(e.target).css('background-color', '#ccc')
		// }

		
	//}



}