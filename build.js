console.log("Script started successfully")

let Appurl = "https://ishjotsingh97.github.io/Vue-Todo-App/"

var http = require('http'),fs = require('fs');


fs.readFile('./index.html',async function (err, html) {
	console.log(html)
})
    
console.log("Script ended successfully")

console.log(`App live at ${Appurl}`)