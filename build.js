console.log("Script started successfully")

let Appurl = "https://ishjotsingh97.github.io/Vue-Todo-App/"

var http = require('http'),fs = require('fs');

fs.readFile('./index.html',(err, html) => {
	console.log(html)
})

console.log(`App live at ${Appurl}`)

console.log("Script ended successfully")

