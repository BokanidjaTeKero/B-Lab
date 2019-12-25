	
// checking id of the btn and doing the changing icon of that btn and showing or hidding content of a div
// 'one ring to rule them all :)'

function myFunction(button) {
	var x = button.id;

	switch(x) {
		case '1' :
			btnSwitch(x);
			contentSwitch(x);
		break;	
		case '2' :
			btnSwitch(x);
			contentSwitch(x);
		break;
	}
}

//function for checking btns background image ( and witch btn is pressed ) , and switching it to needed one.

function btnSwitch(button) {
		var y = button;

		if (document.getElementById(y).classList.contains('btn-arrow-down')) {
				document.getElementById(y).classList.remove('btn-arrow-down');
				document.getElementById(y).classList.add('btn-arrow-up');
		} else {
				document.getElementById(y).classList.remove('btn-arrow-up');
				document.getElementById(y).classList.add('btn-arrow-down');
		}	
}

//function for checking content visabiliti. if it is visible than hide it or if is it hidden then show it

function contentSwitch(content) {
	var b = content;
	var id = "con" + b;

	if (document.getElementById(id).classList.contains('hidden')) {
			document.getElementById(id).classList.remove('hidden');
			document.getElementById(id).classList.add('show');
		} else {
			document.getElementById(id).classList.remove('show');
			document.getElementById(id).classList.add('hidden');
		}
}

// Modal

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
	