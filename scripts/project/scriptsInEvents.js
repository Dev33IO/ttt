


const scriptsInEvents = {

	async Egame_Event9(runtime, localVars)
	{
		// Виконуємо запит AJAX
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "t.svg", true);
		xhr.onreadystatechange = function() {
		  if (xhr.readyState === 4 && xhr.status === 200) {
		    var svgResponse = xhr.responseText;
		
		    // Створюємо контейнер для SVG
		    var div = document.createElement("div");
		    div.innerHTML = svgResponse;
		
		    // Отримуємо SVG елемент з контейнера
		    var svgElement = div.querySelector("svg");
		
		    // Отримуємо всі елементи <path> всередині SVG
		    var pathElements = svgElement.querySelectorAll("path");
		
		    // Додаємо обробник події click до кожного елемента <path>
		    pathElements.forEach(function(pathElement) {
		      pathElement.addEventListener("click", function(event) {
		        // Код, який виконується при кліку на <path>
		        console.log("Клікнуто на <path>");
		      });
		    });
		
		    // Додаємо SVG елемент до DOM
		    document.body.appendChild(svgElement);
		  }
		};
		xhr.send();
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

