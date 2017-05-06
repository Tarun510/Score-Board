var onebutton = document.querySelector("#one");
var twobutton = document.getElementById("two");
var resetbutton = document.getElementById("reset");
var numinput = document.querySelector("input");
var winningscoreDisplay = document.querySelector("p span");
var oned = document.querySelector("#oned");
var twod = document.querySelector("#twod");
onescore = 0;
twoscore = 0;
var gameover = false;
var winningscore = 5;


onebutton.addEventListener("click", function() {
	if (!gameover) {
		onescore++;
		if (onescore === winningscore) {		
			gameover = true;
		};
	oned.textContent = onescore;


	}
	
	
}); 

twobutton.addEventListener("click", function(){
	if (!gameover) {
		twoscore++;
		if (twoscore === winningscore) {
			gameover = true;   
		};
	twod.textContent = twoscore;


	}

	
});

resetbutton.addEventListener("click", function(){
reset();
	


});

function reset(){
	onescore = 0;
	twoscore = 0;
	oned.textContent = onescore;
	twod.textContent = twoscore;
	gameover = false;



}
numinput.addEventListener("change", function(){
winningscoreDisplay.textContent = this.value;
winningscore = Number(this.value);


});