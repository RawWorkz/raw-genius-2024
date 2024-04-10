package;

import constants.App;
import haxe.Http;
import haxe.Log;
import js.Browser.*;
import js.Syntax;
import js.html.DOMTokenList;
import js.html.DivElement;
import js.html.Image;
import js.html.XMLHttpRequest;
import js.html.svg.Element;
import js.html.svg.Rect;
import js.html.svg.SVGElement;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main {
	var w:Int;
	var h:Int;
	var elementMap:Map<String, Dynamic> = new Map();

	var containerID = 'container-hero-svg2';
	var idArr = ['astronaut', 'rocket', 'saturnring', 'planet'];

	// var containerArr = ['container-hero-html', 'container-hero-svg', 'container-hero-svg2'];

	public function new() {
		document.addEventListener("DOMContentLoaded", function(event) {
			console.info('Main - ${App.NAME} Dom ready :: build: ${App.getBuildDate()} ');

			// setupListeners();
			// setContainer();
			// init();

			// convertSrcToSVG();
			convertSrcToSVG2();
		});
	}

	function convertSrcToSVG2() {
		// Get the container element
		var container:DivElement = cast document.getElementById(containerID);
		// Get the image element inside the container
		var image:Image = cast container.querySelector("img");
		// Get the src attribute of the image
		// var src = image.getAttribute("src");
		// Define the URL of the SVG file
		// var url = "images/svg/fake.svg";
		var url = image.src;

		// var url = "http://ip.jsontest.com/";
		var req = new XMLHttpRequest();
		req.open('GET', url);
		req.onload = function() {
			trace(req);
		};
		req.onerror = function(error) {
			console.error('[JS] error: $error');
		};
		req.send();
	}

	function setupListeners() {
		window.onresize = function() {
			// Your code to handle the resize event goes here
			console.log("Window resized!");
			setContainer();
		};
	}

	function setContainer() {
		var _container:DivElement = cast document.getElementById(containerID);
		this.w = _container.clientWidth;
		this.h = _container.clientHeight;
		console.log(_container.clientWidth);
		console.log(_container.clientHeight);
	}

	function init() {}

	function convertSrcToSVG() {
		// Get the container element
		var container:DivElement = cast document.getElementById(containerID);
		// Get the image element inside the container
		var image:Image = cast container.querySelector("img");
		// Get the src attribute of the image
		// var src = image.getAttribute("src");
		// Define the URL of the SVG file
		// var url = "images/svg/fake.svg";
		var url = image.src;
		// Create a new Http instance
		var http = new Http(url);
		// Define a callback function to handle the response
		http.onData = function(data:String) {
			// use the svg into the element
			container.innerHTML = data;

			// getDataSBG();
		};
		// Define a callback function to handle errors
		http.onError = function(error:String) {
			// Log an error message if the request failed
			trace("Failed to load SVG: " + error);
		};
		// Send the request
		http.request();
	}

	function getDataSBG() {
		var container:DivElement = cast document.getElementById(containerID);
		var astronaut:SVGElement = cast container.querySelector("#astronaut");
		var rocket:SVGElement = cast container.querySelector("#rocket");
		var ring:SVGElement = cast container.querySelector("#ring");
		var planet:SVGElement = cast container.querySelector("#planet");

		// console.log(astronaut);
		console.log(planet);
		planet.classList.add('--raw-planet');
	}

	// ____________________________________ main ____________________________________

	static public function main() {
		var app = new Main();
	}
}
