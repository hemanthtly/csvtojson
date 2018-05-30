const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const jsonFormat = require('json-format')
const jsonFilePath = path.join(__dirname, 'customer-data.json')
const csvFilePath = path.join(__dirname, 'customer-data.csv')

csv()
.fromFile(csvFilePath)
.then((json)=>{
	fs.writeFile(jsonFilePath, jsonFormat(json, {type: 'space', size: 2}), function (err){
	if (err) throw err
	console.log('File saved!')
	})
	})
