var direction_variable = 0;
var param1;

const xi = {
	_XiElementConstructor: class {
		constructor(elementToReturn) {
			param1 = elementToReturn;
			return document.querySelectorAll(param1);
		}
		static direction() {
			transformgetter = '';
			while (document.querySelectorAll(param1).transform.charAt(3))
		}
		static turn(turnBy) {
			direction_variable += turnBy;
			document.querySelectorAll(param1).style.transform = ('rotate(' + direction_variable + 'deg)'); 
		}
	}
}

