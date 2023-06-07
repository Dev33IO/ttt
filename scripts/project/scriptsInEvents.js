


const scriptsInEvents = {

	async Egame_Event9(runtime, localVars)
	{
		// Отримуємо доступ до SVG елемента за його ID
		var svgElement = document.getElementById("et");
		
		// Отримуємо всі елементи <path> всередині SVG
		var pathElements = svgElement.querySelectorAll("path");
		
		// Додаємо обробник події click до кожного елемента <path>
		pathElements.forEach(function(pathElement) {
		  pathElement.addEventListener("click", function(event) {
		    // Код, який виконується при кліку на <path>
		    console.log("Клікнуто на <path>");
		  });
		});
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

