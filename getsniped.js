
const input = document.getElementsByTagName('input');
const arcBoost = document.getElementById('arc-boost');
const output = document.getElementById('output-area');

	for (let i = 0; i < input.length; i++){
		input[i].onfocus = function(){
			this.setAttribute('TEMPORARY', this.getAttribute('placeholder'));
			this.removeAttribute('placeholder');
			this.select();
		}
		input[i].onblur = function(){
			this.setAttribute('placeholder', this.getAttribute('TEMPORARY'));
			this.removeAttribute('TEMPORARY');
		}
		input[i].oninput = function(){
			this.value = this.value.replace(/[^0-9]/g,'');
			calculate();
		}
	}

arcBoost.onchange = function(){
	calculate();
}

function calculate(){
	let inputVal = {
		fpRequired: parseInt(document.getElementById('fp-required').value),
		fpReward: parseInt(document.getElementById('fp-reward').value),
		fpProfit: parseInt(document.getElementById('fp-profit').value)
	}

		for (let prop in inputVal){
			if (inputVal.hasOwnProperty(prop)){
				if (isNaN(inputVal[prop])){
					inputVal[prop] = 0;
				}
			}
		}

	let boostSelected = parseFloat(arcBoost.options[arcBoost.selectedIndex].value);
	let preRes = inputVal.fpReward + inputVal.fpReward * boostSelected - inputVal.fpProfit;
	let res = Math.ceil(inputVal.fpRequired - (preRes * 2));

		if (res <= 0){
			output.innerHTML = `<span>0 FP</span>`;
		} else {
			output.innerHTML = `<span>${res} FP</span>`;
		}	
}


























