console.log("R.U.N.K.I.T. Initialised");

function iitmnod(id, div) {
				let tag = document.getElementById(id);
				console.log(tag);
				let splittxt = tag.innerHTML.split(" ");
				console.log(splittxt);
				let yourArray = splittxt;
				let halfwayThrough = Math.floor(yourArray.length / 2);
				// or instead of floor you can use ceil depending on what side gets the extra data

				let arrayFirstHalf = yourArray.slice(0, halfwayThrough);
				let arraySecondHalf = yourArray.slice(halfwayThrough, yourArray.length);
				console.log(arrayFirstHalf.join());
				console.log(arraySecondHalf.join());
				tag.innerHTML = arrayFirstHalf.join() + div + arraySecondHalf.join();
}

function loadJS(src) {
				// Get the first script element on the page
				var ref = document.getElementsByTagName("script")[0];

				// Create a new script element
				var script = document.createElement("script");

				// Set the script element `src`
				script.src = src;

				// Inject the script into the DOM
				ref.parentNode.insertBefore(script, ref);
}

function runiitm(id, div) {
				try {
								let demoiitm = document.getElementById(id);

								if (document.getElementById(id, div)) {
												console.log("IITM using: " + id);
												iitmnod(id);
								} else {
												console.error("IITM Invalid Error: " + id);
								}
				} catch (error) {
								console.error(error);
								console.error("IITM Invalid Error: " + id);
				}
}

let runkit = {
				core: runiitm,
				load: loadJS
};

let rkclass = {};
let rkclasshide = function(rkclass) {
				document.getElementsByClassName("rkclass")[0].style.display = "none";
};
let rkclassshow = function(rkclass) {
				document.getElementsByClassName("rkclass")[0].style.display = "block";
};
rkclass = {
				rkclasshide,
				show: {
								block: rkclassshow
				}
};
let rk = runkit;
let r = rk;
window.addEventListener("DOMContentLoaded", (event) => {
				runkit.load("https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js");
				runkit.load("https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js");
				runkit.load("https://cdn.jsdelivr.net/npm/nasix.js@latest/overrides.min.js");
				setTimeout(function() {
								runkit = {
												core: runiitm,
												load: loadJS,
												nclass: rkclass,
												jQuery,
												_
												//es6over
								};
								try {
												r.initapp();
								} catch (error) {
												console.log("Error Running InitApp");
												console.log(error);
								}
				}, 2000);
});