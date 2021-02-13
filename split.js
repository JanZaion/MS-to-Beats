inlets = 3;
outlets = 1;
var ins = new Array();

ins[0] = ins[1] = ins[2] = 0;

var oneBar = ins[0];
var currentValue = ins[1];
var parameter = ins[2];

function bang(output) {
	outlet(0, output);
}

function ms() {
	parameter = "ms";
}
	
function s() {
	parameter = "s";
}

function invalid() {
	parameter = "invalid parameter";
	bang(parameter);
}

function msg_int(i) {
	oneBar = i;
	}		

function msg_float(f) {
	if (parameter == "ms") {
		currentValue = f;
		} else {
			currentValue =f*1000;
			}
	
	if (parameter == "invalid parameter") {
		bang(parameter);
		} else if (oneBar >= currentValue) {
			bang("1/"+(oneBar/currentValue).toFixed(2) + " of a bar");
			} else if (oneBar < currentValue) {
				var bars = Math.floor(currentValue/oneBar)
				var rest = currentValue-(bars*oneBar);
				bang(bars + " bar(bars) and " + "1/" + (oneBar/rest).toFixed(2) + " of a bar" )
				} 
		
}





/*
ins[inlet] = f;
	if ((inlet==0) ) {
		bang("yo");
	} else {
    bang(ins[0])
  }
*/



